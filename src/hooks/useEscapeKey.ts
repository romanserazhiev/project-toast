import React from "react";

export function useEscapeKey(callback) { 
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        callback(event)
      }
    }

    window.addEventListener("keydown", (event) => {
      handleKeyDown(event);
    });

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
}
