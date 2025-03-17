import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };

  const handleDismiss = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
