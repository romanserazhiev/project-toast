import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  function clearAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
        clearAllToasts,
        useEscapeKey,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
