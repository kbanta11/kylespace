import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Emphasis } from '../components/Card';
import { aboutMe, contactLinks, profile } from '../data/profile';
import { blurbs } from '../data/blurbs';
import { topProjects } from '../data/projects';
import { showTop8, top8, top8Title } from '../data/top8';

export function ProfilePage() {
  return (
    <div className='ks-cols'>
      <div className='ks-rail'>
        <Card title={profile.name.toLowerCase()}>
          <img className='ks-headshot' src={profile.avatar} alt={profile.name} />
          <div className='ks-identity'>
            <div>
              <h1 className='ks-identity-name'>{profile.name}</h1>
              <div className='ks-identity-sub'>{profile.subtitle}</div>
            </div>
            <div className='ks-status'>
              <span className='ks-status-dot' />
              {profile.status}
            </div>
            <div className='ks-divider' />
            <div>
              <span className='ks-micro ks-micro--tahoma'>mood</span>
              <div className='ks-mood-value'>{profile.mood}</div>
            </div>
          </div>
        </Card>

        <Card title='contacting kyle'>
          <div className='ks-rows'>
            {contactLinks.map((link) => (
              <a
                key={link.href}
                className='ks-row'
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className='ks-row-label'>{link.label}</span>
                <span className='ks-row-value'>{link.value} →</span>
              </a>
            ))}
          </div>
        </Card>

        <Card title="kyle's blurbs">
          <div className='ks-rows'>
            {blurbs.map((blurb) => (
              <div className='ks-blurb' key={blurb.label}>
                <div className='ks-micro'>{blurb.label}</div>
                <p className='ks-body-sm'>
                  <Emphasis text={blurb.body} />
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className='ks-col-main'>
        <Card title='about me'>
          <div className='ks-about'>
            <p className='ks-about-lead'>{aboutMe.lead}</p>
            {aboutMe.paragraphs.map((para, i) => (
              <p className='ks-body' key={i}>
                {para}
              </p>
            ))}
          </div>
        </Card>

        <Card
          title="kyle's top projects"
          action={
            <Link className='ks-card-head-action' to='/work'>
              see all →
            </Link>
          }
        >
          <div className='ks-rows'>
            {topProjects.map((project) => {
              const inner = (
                <>
                  {project.image ? (
                    <img
                      className='ks-project-row-thumb'
                      src={project.image}
                      alt={project.title}
                      style={
                        project.imageFit === 'contain'
                          ? { objectFit: 'contain', background: project.imageBg }
                          : undefined
                      }
                    />
                  ) : (
                    <div className='ks-project-row-thumb ks-project-row-thumb--slot' />
                  )}
                  <div className='ks-project-row-text'>
                    <div className='ks-project-row-title'>{project.title}</div>
                    <p className='ks-project-row-desc'>
                      {project.shortDescription || project.description}
                    </p>
                  </div>
                  {project.url ? (
                    <span className='ks-chevron' aria-hidden='true'>
                      ›
                    </span>
                  ) : (
                    <span className='ks-project-tag'>soon</span>
                  )}
                </>
              );

              return project.url ? (
                <a
                  key={project.slug}
                  className='ks-project-row'
                  href={project.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {inner}
                </a>
              ) : (
                <div key={project.slug} className='ks-project-row'>
                  {inner}
                </div>
              );
            })}
          </div>
        </Card>

        {showTop8 && (
          <Card title={top8Title}>
            <div className='ks-card-body'>
              <div className='ks-top8-grid'>
                {top8.map((person) => (
                  <div className='ks-top8-person' key={person.name}>
                    <div className='ks-top8-tile'>
                      {person.image ? (
                        <img src={person.image} alt={person.name} />
                      ) : (
                        person.initials
                      )}
                    </div>
                    <div className='ks-top8-name'>{person.name}</div>
                    <div className='ks-top8-note'>{person.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
