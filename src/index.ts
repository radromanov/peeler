import "module-alias/register";

import { Command } from "commander";
import { isUrl } from "@lib/utils";
import { isAllowed } from "@lib/utils/is-allowed";
import { ALLOWED_URLS } from "@lib/constants/allowed-urls";

const cli = new Command();

cli
  .command("search")
  .argument("<url>", "url to search for")
  .action((url) => {
    if (!isUrl(url))
      cli.error(
        "error: please provide a valid url (e.g. 'https://example.com')"
      );

    if (!isAllowed(url))
      cli.error(
        `error: please provide one of the following - ${ALLOWED_URLS.join(
          " | "
        )}`
      );
  });

cli.parse(process.argv);
