import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          return;
        }
        setTheme("dark");
      }}
      className="rounded-xs rounded p-1 hover:bg-gray-200 hover:dark:bg-[#313131]"
    >
      {theme === "dark" ? (
        <span className="sun-icon">
          <IconSun height={25} width={25} />
        </span>
      ) : (
        <span className="moon-icon">
          <IconMoon height={25} width={25} />
        </span>
      )}
    </button>
  );
}
