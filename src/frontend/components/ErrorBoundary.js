import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  handleTryAgain = () => {
    this.setState({ hasError: false, error: null });
    // Optionally reset app state or navigate
  }

  render() {
    if (this.state.hasError) {
      // Customized UI based on development or production mode
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Oops! Something went wrong.</h1>
          <p>We're working on fixing the issue. Please try again later.</p>
          <button onClick={this.handleTryAgain}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

