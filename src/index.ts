import "module-alias/register";

import { Command } from "commander";
import { searchUrl } from "@lib/core";

const cli = new Command();

cli.command("search").argument("<url>", "url to search for").action(searchUrl);

cli.parse(process.argv);
