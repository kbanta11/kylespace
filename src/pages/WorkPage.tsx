import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Project, isPlaceholderCopy, projects } from '../data/projects';

function Thumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        className={
          project.imageFit === 'contain'
            ? 'ks-project-thumb ks-project-thumb--contain'
            : 'ks-project-thumb'
        }
        src={project.image}
        alt={project.title}
        loading='lazy'
        decoding='async'
        style={project.imageBg ? { background: project.imageBg } : undefined}
      />
    );
  }
  return (
    <div className='ks-slot'>
      <span className='ks-slot-label'>{project.placeholderLabel}</span>
    </div>
  );
}

function Body({ project }: { project: Project }) {
  return (
    <div className='ks-project-body'>
      <div className='ks-project-title-row'>
        <span className='ks-project-title'>{project.title}</span>
      </div>
      <p
        className={
          isPlaceholderCopy(project.description)
            ? 'ks-project-desc ks-project-desc--todo'
            : 'ks-project-desc'
        }
      >
        {project.description}
      </p>
    </div>
  );
}

export function WorkPage() {
  return (
    <div className='ks-page'>
      <div>
        <h1 className='ks-h1'>Work</h1>
        <p className='ks-lede'>
          Products I've designed, built and shipped, mostly solo and mostly to scratch my own itch.
        </p>
      </div>

      <div className='ks-work-grid'>
        {/* Every card opens its detail route — including the ones with no live
            site, which used to be inert. The outbound link lives in the dialog. */}
        {projects.map((project) => (
          <Link key={project.slug} className='ks-card ks-project-card' to={`/work/${project.slug}`}>
            <Thumb project={project} />
            <Body project={project} />
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
