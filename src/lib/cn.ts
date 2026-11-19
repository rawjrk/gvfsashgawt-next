import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 * - clsx handles conditional classes
 * - twMerge handles conflicting Tailwind utilities
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
