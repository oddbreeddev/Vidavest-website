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
  // Fix: Move state initialization to constructor to ensure proper inheritance of 'props' and 'state' from React.Component
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  /**
   * Update state so the next render will show the fallback UI.
   */
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    // Accessing state and props via React.Component inheritance
    // Fix: this.props and this.state are now correctly typed through React.Component<Props, State>
    if (this.state.hasError) {
      // Return custom fallback UI or provided fallback prop
      return this.props.fallback || (
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

    return this.props.children;
  }
}

export default ErrorBoundary;