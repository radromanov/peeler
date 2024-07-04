import { ALLOWED_URLS } from "@lib/constants/allowed-urls";
import { Site } from "@lib/types/Site";
import { isAllowed, isUrl } from "@lib/utils";

export function searchUrl(url: Site) {
  try {
    if (!isUrl(url))
      throw new Error(
        "error: please provide a valid url (e.g. 'https://example.com')"
      );

    if (!isAllowed(url))
      throw new Error(
        `error: please provide one of the following urls - ${ALLOWED_URLS.join(
          " | "
        )}`
      );

    // URL controller
    switch (url) {
      case "https://jobs.bg":
        // Logic linked to the domain of `https://jobs.bg`...
        break;
    }
  } catch (error: any) {
    console.error(error.message);
  }
}
