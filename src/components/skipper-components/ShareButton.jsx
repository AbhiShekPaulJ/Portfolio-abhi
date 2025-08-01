import React, { useState } from "react";
import { cn } from "../lib/utils"; // Adjust if you’re not using alias paths ./lib/utils
import { Button } from "../ui/button"; // Make sure you’ve added this or replace with a <button>

const ShareButton = ({ className, links = [], children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rotate-0 text-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl",
          "bg-white dark:bg-black",
          "hover:bg-gray-50 dark:hover:bg-gray-950",
          "text-black dark:text-white",
          "border border-black/10 dark:border-white/10",
          "transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
      </Button>

      <div className="absolute left-0 top-0 flex h-10 border">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <button
              cl
              type="button"
              key={index}
              onClick={link.onClick}
              className={cn(
                "h-10 w-10 flex items-center justify-center",
                "bg-zinc-800 dark:bg-zinc-700 text-white dark:text-zinc-200",
                "transition-all duration-300",
                index === 0 && "rounded-l-3xl",
                index === links.length - 1 && "rounded-r-3xl",
                "border-r border-zinc-700 last:border-r-0 dark:border-zinc-600",
                "hover:bg-zinc-700 dark:hover:bg-zinc-600",
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0",
                index === 0 && "transition-all duration-200",
                index === 1 && "delay-[50ms] transition-all duration-200",
                index === 2 && "delay-[100ms] transition-all duration-200",
                index === 3 && "delay-[150ms] transition-all duration-200"
              )} 
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShareButton;