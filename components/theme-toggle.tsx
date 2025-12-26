"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setTheme(actualTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="relative overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: actualTheme === "dark" ? 180 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
