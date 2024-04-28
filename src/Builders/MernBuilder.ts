import consola from "consola";
import { execSync } from "child_process";
import {
  backendFolder,
  backendFolderFiles,
  packageInit,
  viteCreate,
} from "../scripts/scripts.js";

export const BackendBuilder = async () => {
  consola.start("Creating Backend Folders...");

  const BackendType = await consola.prompt(
    "Do you want to create Backend in Typescript ?",
    {
      type: "confirm",
    }
  );

  if (!BackendType) {
    consola.start("Creating Backend Folders in Javascript...");

    await new Promise((resolve) => setTimeout(resolve, 700));

    consola.info("Inititalising package.json");
    execSync(packageInit, { stdio: "inherit" });

    consola.success("package.json created successfully!");

    await new Promise((resolve) => setTimeout(resolve, 500));

    consola.info("Inititalising Folder Structure");

    execSync(backendFolder, { stdio: "inherit" });

    execSync(backendFolderFiles, { stdio: "inherit" });
  } else {
    consola.info("Creating Backend Folders in Typescript...");
  }
};

export const FrontendBuilder = async () => {
  consola.start("Inititalising Vite project...");

  await new Promise((resolve) => setTimeout(resolve, 700));

  execSync(viteCreate, { stdio: "inherit" });
};

export const FrontendAndBackendBuilder = async () => {
  consola.start("Creating Backend project...");

  await BackendBuilder();

  consola.success("Backend Project Created Successfully!");

  await new Promise((resolve) => setTimeout(resolve, 700));

  consola.start("Creating Frontend project...");
  await FrontendBuilder();
};
