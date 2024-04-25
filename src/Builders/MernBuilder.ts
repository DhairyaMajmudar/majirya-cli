import consola from "consola";
import { execSync } from "child_process";

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
    execSync("npm init", {
      stdio: "inherit",
    });

    consola.success("package.json created successfully!");

    await new Promise((resolve) => setTimeout(resolve, 500));

    consola.info("Inititalising Folder Structure");
    execSync(
      "touch index.js && mkdir data && touch .gitignore && touch .env && mkdir src && mkdir src/routes && mkdir src/controllers && mkdir src/middlewares && mkdir src/models",
      {
        stdio: "inherit",
      }
    );
  } else {
    consola.info("Creating Backend Folders in Typescript...");
  }
};

export const FrontendBuilder = async () => {
  consola.start("Inititalising Vite project...");

  await new Promise((resolve) => setTimeout(resolve, 700));

  execSync("npm create vite@latest", { stdio: "inherit" });
};

export const FrontendAndBackendBuilder = async () => {
  consola.start("Creating Backend Project...");

  consola.start("Inititalising Vite project...");

  await new Promise((resolve) => setTimeout(resolve, 700));

  execSync("npm create vite@latest", { stdio: "inherit" });
};
