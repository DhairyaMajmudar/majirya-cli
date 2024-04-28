import consola from "consola";
import {
  BackendBuilder,
  FrontendBuilder,
  FullStackBuilder,
} from "../../Builders/MernBuilder.js";
import { NextBuilder } from "../../Builders/NextBuilder.js";

export const initProject = async () => {
  try {
    const projectOptions = await consola.prompt("Select your project type:", {
      type: "select",
      options: ["NextJs Project", "MERN Stack Project"],
    });

    if (projectOptions === "NextJs Project") {
      NextBuilder();
    } else if (projectOptions === "MERN Stack Project") {
      consola.start("Project Initialization Started...");

      const FolderOptions = await consola.prompt(
        "Please select the project for your choice",
        {
          type: "select",
          options: ["Frontend Project", "Backend Project", "Fullstack Project"],
        }
      );

      if (FolderOptions === "Backend Project") {
        BackendBuilder();
      } else if (FolderOptions === "Frontend Project") {
        FrontendBuilder();
      } else {
        FullStackBuilder();
      }
    }

    consola.success("Project Initialized Successfully! 🎉🎉🎉");
  } catch (err) {
    consola.error("Project Initialization Failed!", err);
  }
};
