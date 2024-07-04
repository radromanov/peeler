import "module-alias/register";

import { Command } from "commander";
import { isUrl } from "@lib/utils";

const cli = new Command();

cli
  .command("search")
  .argument("<url>", "url to search for")
  .action((url) => {
    if (!isUrl(url)) cli.error("error: please provide a valid url");
  });

cli.parse(process.argv);
