import React from 'react';
import { Card } from '../components/Card';
import { elsewhereLinks, profile } from '../data/profile';

export function ContactPage() {
  return (
    <div className='ks-cols'>
      <div className='ks-contact-main'>
        <h1 className='ks-h1 ks-h1--contact'>Got something worth building?</h1>
        <p className='ks-contact-copy'>
          I take on product builds: mobile, web, data, contracts. Fastest way in is email; tell me
          what you're trying to ship and when.
        </p>
        <div className='ks-btn-row'>
          <a className='ks-btn ks-btn--lg ks-btn--cta' href={`mailto:${profile.email}`}>
            email kyle
          </a>
          <a
            className='ks-btn ks-btn--lg ks-btn--ghost'
            href={profile.linkedin}
            target='_blank'
            rel='noreferrer'
          >
            linkedin
          </a>
        </div>
      </div>

      <Card title='elsewhere' className='ks-card--side'>
        <div className='ks-rows'>
          {elsewhereLinks.map((link) => (
            <a key={link.href} className='ks-row' href={link.href} target='_blank' rel='noreferrer'>
              <span className='ks-row-label'>{link.elsewhereLabel}</span>
              <span className='ks-row-value'>{link.value} →</span>
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
}
