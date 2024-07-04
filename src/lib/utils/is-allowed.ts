import { ALLOWED_URLS } from "@lib/constants/allowed-urls";
import { Site } from "@lib/types/Site";

export function isAllowed(url: Site): boolean {
  return ALLOWED_URLS.includes(url) ? true : false;
}
