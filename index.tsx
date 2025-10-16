import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { KeystoneShell } from './components/KeystoneShell';

// Inject /keystone.css into <head> (no index.html edits)
function UseKeystoneCSS() {
  React.useEffect(() => {
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = '/keystone.css';
    document.head.appendChild(el);
    return () => {
      try { document.head.removeChild(el); } catch {}
    };
  }, []);
  return null;
}

// Friendly error boundary to avoid blank screen
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean; error?: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    console.error('App crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>Something went wrong.</h1>
          <p>Try refreshing the page. If it persists, we can roll back.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UseKeystoneCSS />
      <KeystoneShell
        title="Momentum"
        tagline="Personal productivity, beautifully organized."
        ctaLabel="New Task"
        onCtaClick={() => {
          const el = document.getElementById('new-task-input') as HTMLInputElement | null;
          if (el) el.focus();
        }}
      >
        <App />
      </KeystoneShell>
    </ErrorBoundary>
  </React.StrictMode>
);
