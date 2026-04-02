import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date(input));
}

export function absoluteUrl(path: string) {
  return new URL(path, process.env.NEXT_PUBLIC_SITE_URL ?? "https://anlcounsel.vn").toString();
}

