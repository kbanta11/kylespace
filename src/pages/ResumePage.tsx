import React from 'react';
import { Card } from '../components/Card';
import { earlierRoles, experience, resumeIntro } from '../data/experience';
import { education } from '../data/education';
import { stack } from '../data/stack';
import { profile } from '../data/profile';

export function ResumePage() {
  return (
    <div className='ks-page'>
      <div className='ks-page-head'>
        <div>
          <h1 className='ks-h1'>Resume</h1>
          <p className='ks-lede'>{resumeIntro}</p>
        </div>
        <a
          className='ks-btn ks-btn--cta'
          href={`mailto:${profile.email}?subject=Resume%20request`}
        >
          request the pdf
        </a>
      </div>

      <div className='ks-cols'>
        <Card title='experience' className='ks-card--wide'>
          <div className='ks-rows'>
            {experience.map((role) => (
              <div className='ks-role' key={`${role.org}-${role.title}`}>
                <div className='ks-role-head'>
                  <span className='ks-role-title'>
                    {role.title}
                    <span className='ks-role-org'> · {role.org}</span>
                  </span>
                  <span className='ks-meta'>{role.dates}</span>
                </div>
                <ul className='ks-role-bullets'>
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className='ks-earlier'>
              <div className='ks-micro'>earlier</div>
              {earlierRoles.map((role) => (
                <div className='ks-earlier-row' key={`${role.org}-${role.title}`}>
                  <span className='ks-earlier-title'>
                    {role.title}
                    <span className='ks-earlier-org'> · {role.org}</span>
                  </span>
                  <span className='ks-earlier-dates'>{role.dates}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className='ks-col-side'>
          <Card title='the stack'>
            <div className='ks-stack-body'>
              {stack.map((group) => (
                <div key={group.label}>
                  <div className='ks-micro ks-stack-group-label'>{group.label}</div>
                  <div className='ks-chips'>
                    {group.items.map((item) => (
                      <span className='ks-chip' key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title='education'>
            {education.map((entry) => (
              <div className='ks-education' key={entry.school}>
                <div className='ks-education-school'>{entry.school}</div>
                <div className='ks-education-degree'>{entry.degree}</div>
                <div className='ks-education-meta'>{entry.meta}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
