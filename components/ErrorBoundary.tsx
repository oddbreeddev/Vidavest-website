
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Standard React Error Boundary implementation to catch and handle UI failures gracefully.
 * Inherits from Component<Props, State> to ensure proper typing of this.props and this.state.
 */
class ErrorBoundary extends Component<Props, State> {
  // Fixed: Use class property for state initialization to resolve 'Property state does not exist' error
  public state: State = {
    hasError: false
  };

  /**
   * Lifecycle method called when a child component throws an error.
   * Updates the state to trigger the fallback UI render.
   */
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  /**
   * Lifecycle method for logging error information.
   * Useful for debugging and tracking system errors in production.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to console or an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    // Fixed: Accessed this.state which is now correctly typed from inheritance
    if (this.state.hasError) {
      // Fixed: Accessed this.props which is now correctly typed from inheritance
      return this.props.fallback || (
        <div className="py-20 px-6 text-center bg-[#0B0B0F] border border-red-500/10 rounded-[3rem] my-10 mx-auto max-w-2xl">
          <div className="text-5xl mb-6">🛠️</div>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Section Recovery Required</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            A minor technical glitch occurred in this component. We've logged the error for our Abuja dev team.
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

    // Default rendering for children components
    return this.props.children;
  }
}

export default ErrorBoundary;
