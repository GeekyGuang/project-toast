import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  const createToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };

  const handleDismiss = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return <ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
