import { useEffect, useState } from "react";

interface AccessibilityAnnouncerProps {
  message: string;
  priority?: "polite" | "assertive";
}

const AccessibilityAnnouncer = ({
  message,
  priority = "polite",
}: AccessibilityAnnouncerProps) => {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (message) {
      // Clear first to ensure screen reader picks up the change
      setAnnouncement("");
      // Use timeout to ensure the change is detected
      setTimeout(() => {
        setAnnouncement(message);
      }, 100);
    }
  }, [message]);

  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

export default AccessibilityAnnouncer;
