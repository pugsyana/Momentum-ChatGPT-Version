
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean; error?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'Inter, sans-serif' }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>Something went wrong.</h1>
          <p>Try refreshing the page. If this persists, we’ll patch it.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
  </ErrorBoundary>
  </React.StrictMode>
);

// AI gating helper (non-invasive): available if App wants it
(window as any).aiEnabled = Boolean(import.meta.env?.VITE_GOOGLE_API_KEY);
