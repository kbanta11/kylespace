import React, { useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { isPlaceholderCopy, projectBySlug } from '../data/projects';

/**
 * TypeScript 4.5's DOM lib predates the <dialog> API, so the methods we rely on
 * are declared here rather than pulled from lib.dom. Drop this on a TS upgrade.
 */
type DialogElement = HTMLDialogElement & {
  open: boolean;
  showModal(): void;
  close(): void;
};

/**
 * The /work/:slug detail overlay. Rendered as an <Outlet /> inside WorkPage so
 * the grid stays mounted underneath and closing is just a route change.
 *
 * A native <dialog> rather than a hand-rolled div: the platform gives us focus
 * trapping, Esc-to-close, inert background content and the top layer for free.
 */
export function ProjectDialog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ref = useRef<HTMLDialogElement>(null);
  const project = projectBySlug(slug);

  useEffect(() => {
    const node = ref.current as DialogElement | null;
    if (!node) return;
    if (!node.open) node.showModal();

    // A modal <dialog> does not stop the page behind it from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // React 17's types have no onClose for <dialog>, and listening directly is
    // the honest version anyway: Esc, the backdrop and the ✕ all land here.
    const handleClose = () => navigate('/work');
    node.addEventListener('close', handleClose);

    return () => {
      // Detach first, so tearing the dialog down on a route change to some
      // other page doesn't fire handleClose and yank the user back to /work.
      node.removeEventListener('close', handleClose);
      document.body.style.overflow = previousOverflow;
      if (node.open) node.close();
    };
  }, [navigate]);

  // An unknown slug is not a route worth keeping in history.
  if (!project) return <Navigate to='/work' replace />;

  const requestClose = () => (ref.current as DialogElement | null)?.close();

  return (
    <dialog
      ref={ref}
      className='ks-dialog'
      aria-labelledby='ks-dialog-title'
      // clicks land on the <dialog> itself only when they hit the backdrop
      onClick={(event) => {
        if (event.target === ref.current) requestClose();
      }}
    >
      <div className='ks-dialog-head'>
        <h2 className='ks-dialog-title' id='ks-dialog-title'>
          {project.title}
        </h2>
        <button className='ks-dialog-close' type='button' onClick={requestClose} aria-label='Close'>
          ✕
        </button>
      </div>

      <div className='ks-dialog-body'>
        {project.image ? (
          <img
            className={
              project.imageFit === 'contain'
                ? 'ks-dialog-thumb ks-dialog-thumb--contain'
                : 'ks-dialog-thumb'
            }
            src={project.image}
            alt={project.title}
            style={project.imageBg ? { background: project.imageBg } : undefined}
          />
        ) : (
          <div className='ks-slot ks-dialog-thumb'>
            <span className='ks-slot-label'>{project.placeholderLabel}</span>
          </div>
        )}

        {project.bullets?.length ? (
          <ul className='ks-dialog-bullets'>
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className={isPlaceholderCopy(bullet) ? 'ks-dialog-bullet--todo' : undefined}
              >
                {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className='ks-project-desc'>{project.description}</p>
        )}

        {project.note && <p className='ks-dialog-note'>{project.note}</p>}

        {Boolean(project.stack?.length) && (
          <div className='ks-chips'>
            {project.stack?.map((tech) => (
              <span className='ks-chip' key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className='ks-dialog-actions'>
          {project.url ? (
            <>
              <a className='ks-btn ks-btn--cta' href={project.url} target='_blank' rel='noreferrer'>
                {project.ctaLabel ?? 'visit site'}
              </a>
              {project.secondaryCta && (
                <a
                  className='ks-dialog-secondary'
                  href={project.secondaryCta.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {project.secondaryCta.label}
                </a>
              )}
            </>
          ) : (
            <span className='ks-dialog-nolink'>
              {project.status === 'unreleased' ? 'not out yet' : 'no live site'}
            </span>
          )}
        </div>
      </div>
    </dialog>
  );
}
