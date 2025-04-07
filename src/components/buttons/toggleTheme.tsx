"use client";

import { useDarkMode } from "@/hooks/useDarkmode";

export default function ToggleTheme() {
  const { enabled, toggle } = useDarkMode();

  return (
    <button onClick={toggle}>
      {enabled ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
