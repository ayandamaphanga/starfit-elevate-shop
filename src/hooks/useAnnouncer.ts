import { useState, useCallback } from "react";

export const useAnnouncer = () => {
  const [message, setMessage] = useState("");

  const announce = useCallback((text: string) => {
    setMessage(text);
    // Clear message after announcement
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }, []);

  return { message, announce };
};
