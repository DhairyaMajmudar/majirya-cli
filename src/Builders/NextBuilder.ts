import consola from "consola";
import { execSync } from "child_process";

export const NextBuilder = async () => {
  consola.start("NextJs Project Initialization Started...");

  await new Promise((resolve) => setTimeout(resolve, 700));

  execSync("npx create-next-app@latest", { stdio: "inherit" });
};
