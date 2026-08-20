import React from 'react';

type CardProps = {
  /** the uppercase header strip; omit for a headerless card */
  title?: string;
  /** optional right-aligned action inside the header strip */
  action?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export function Card({ title, action, className, children }: CardProps) {
  return (
    <div className={className ? `ks-card ${className}` : 'ks-card'}>
      {title && (
        <div className={action ? 'ks-card-head ks-card-head--split' : 'ks-card-head'}>
          {/* a heading, not a span — these strips are the page's section structure */}
          <h2 className='ks-card-head-title'>{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

/** Splits *starred* runs into <em>, so plain-text data files can still italicize. */
export function Emphasis({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
    </>
  );
}
