
import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Standard React Error Boundary implementation to catch and handle UI failures gracefully.
 */
class ErrorBoundary extends React.Component<Props, State> {
  // Use a class property for state to ensure TypeScript correctly identifies the state type on the instance
  public state: State = {
    hasError: false
  };

  /**
   * Update state so the next render will show the fallback UI.
   */
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  /**
   * Capture error details for logging.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error for strategy and tech teams
    console.error("Uncaught error:", error, errorInfo);
  }

  /**
   * Render method to display either the error fallback or children.
   */
  public render(): ReactNode {
    // Explicitly destructure from this.state and this.props to satisfy TypeScript compiler
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      // Return custom fallback UI or provided fallback prop
      return fallback || (
        <div className="py-20 px-6 text-center bg-[#0B0B0F] border border-red-500/10 rounded-[3rem] my-10 mx-auto max-w-2xl">
          <div className="text-5xl mb-6">🛠️</div>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">System Recovery Required</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            A minor technical glitch occurred in this component. We've logged the error for our global strategy and tech team.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="brand-gradient-bg text-black px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl"
          >
            Reload Interface
          </button>
        </div>
      );
    }

    // Standard render path for nested components
    return children;
  }
}

export default ErrorBoundary;
