/**
 * English translation dictionary, merged from per-page source files.
 * Keys are the exact Japanese source strings used in the components.
 * Any string without an entry here falls back to Japanese automatically.
 *
 * Each page owns its own file under ./translations/ to avoid edit conflicts.
 */
import { common } from "./translations/common";
import { home } from "./translations/home";
import { about } from "./translations/about";
import { schedule } from "./translations/schedule";
import { kids } from "./translations/kids";
import { program } from "./translations/program";
import { instructors } from "./translations/instructors";
import { contact } from "./translations/contact";

export const en: Record<string, string> = {
  ...common,
  ...home,
  ...about,
  ...schedule,
  ...kids,
  ...program,
  ...instructors,
  ...contact,
};
