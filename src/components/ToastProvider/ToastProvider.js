import React, { useEffect } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setToasts([]);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const createToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };

  const handleDismiss = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
