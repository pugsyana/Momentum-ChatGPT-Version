import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LayoutShell } from './components/LayoutShell';

// Visual verification: log to console
console.log('%cLayout v1 active', 'padding:4px 8px;background:#222;color:#0f0;border-radius:6px');

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean; error?: any }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  componentDidCatch(error: any, info: any) { console.error('App crashed:', error, info); }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 24, fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: 20, marginBottom: 8 }}>Something went wrong.</h1>
        <p>Try refreshing the page.</p>
      </div>;
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <LayoutShell
        title="Momentum • Layout v1"
        sidebarItems={[
          { label: 'Today', key: 'today' },
          { label: 'Tasks', key: 'tasks' },
          { label: 'Notes', key: 'notes' },
          { label: 'Mind Map', key: 'mindmap' },
        ]}
        onToggleTheme={() => document.documentElement.classList.toggle('dark')}
      >
        <App />
      </LayoutShell>
    </ErrorBoundary>
  </React.StrictMode>
);
