// components/KeystoneShell.tsx
import * as React from "react";

export function KeystoneShell({
  children,
  title = "Momentum",
  tagline = "Personal productivity, beautifully organized.",
  ctaLabel = "Get Started",
  onCtaClick,
}: {
  children: React.ReactNode;
  title?: string;
  tagline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}) {
  return (
    <div className="keystone-root">
      <header className="keystone-nav">
        <div className="keystone-container">
          <div className="keystone-brand">
            <div className="keystone-mark" />
            <span className="keystone-wordmark">{title}</span>
          </div>
          <div className="keystone-actions">
            <a className="keystone-link" href="#features">Features</a>
            <a className="keystone-link" href="#projects">Projects</a>
            <a className="keystone-link" href="#notes">Notes</a>
            <button className="keystone-cta" onClick={onCtaClick}>{ctaLabel}</button>
          </div>
        </div>
      </header>

      <section className="keystone-hero">
        <div className="keystone-container">
          <h1 className="keystone-hero-title">{title}</h1>
          <p className="keystone-hero-tagline">{tagline}</p>
          <div className="keystone-hero-ctas">
            <button className="keystone-cta" onClick={onCtaClick}>{ctaLabel}</button>
            <a className="keystone-ghost" href="#features">See Features</a>
          </div>
        </div>
        <div className="keystone-hero-bg" />
      </section>

      <main className="keystone-container keystone-content">
        {children}
      </main>

      <footer className="keystone-footer">
        <div className="keystone-container">
          <span>© {new Date().getFullYear()} Momentum</span>
          <nav className="keystone-footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
