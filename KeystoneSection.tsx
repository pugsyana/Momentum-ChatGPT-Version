// components/KeystoneSection.tsx
import * as React from "react";

export function KeystoneSection({
  id,
  headline,
  subhead,
  children,
}: {
  id?: string;
  headline: string;
  subhead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="keystone-section">
      <div className="keystone-section-inner">
        <h2 className="keystone-h2">{headline}</h2>
        {subhead ? <p className="keystone-subhead">{subhead}</p> : null}
        <div className="keystone-card-grid">
          {children}
        </div>
      </div>
    </section>
  );
}

export function KeystoneCard({
  title,
  body,
  badge,
}: {
  title: string;
  body: string;
  badge?: string;
}) {
  return (
    <article className="keystone-card">
      {badge ? <span className="keystone-badge">{badge}</span> : null}
      <h3 className="keystone-h3">{title}</h3>
      <p className="keystone-body">{body}</p>
    </article>
  );
}
