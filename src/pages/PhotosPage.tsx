import React from 'react';
import { photos } from '../data/photos';

export function PhotosPage() {
  return (
    <div className='ks-page'>
      <div>
        <h1 className='ks-h1'>Photos</h1>
        <p className='ks-lede'>
          Surf, trails, the van, the desk. Drop images into the slots below and they'll fill the
          grid.
        </p>
      </div>

      <div className='ks-photo-grid'>
        {photos.map((photo, i) => (
          <div className='ks-card ks-photo-card' key={photo.src || i}>
            <div className='ks-photo-frame'>
              {photo.src ? (
                <img src={photo.src} alt={photo.alt || photo.caption} />
              ) : (
                <span className='ks-slot-label'>{photo.caption}</span>
              )}
            </div>
            {photo.src && <div className='ks-photo-caption'>{photo.caption}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
