#!/usr/bin/env node

import { Command } from "commander";
import { initProject } from "./commands/init/index.js";

const program = new Command();

program.name("majirya").description("Majirya CLI").version("0.0.1");

program.command("init").action(initProject).parse();
