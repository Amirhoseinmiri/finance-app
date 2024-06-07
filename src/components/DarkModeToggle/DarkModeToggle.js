"use client";
import React from "react";
import Button from "../Button/Button";
import useDarkMode from "@/hooks/use-dark-mode";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultMode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultMode);
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
