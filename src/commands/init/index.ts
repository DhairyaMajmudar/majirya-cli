import consola from "consola";
import { BackendBuilder, FrontendBuilder } from "../../Builders/MernBuilder.js";
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
        "Please Choose the Folder Structure for your project",
        {
          type: "select",
          options: [
            "Frontend Folders Only",
            "Frontend Folders + Backend Folders",
            "Backend Only Folders",
          ],
        }
      );

      if (FolderOptions === "Backend Only Folders") {
        BackendBuilder();
      } else if (FolderOptions === "Frontend Only Folders") {
        FrontendBuilder();
      } else {
      }
    }

    consola.success("Project Initialized Successfully! 🎉🎉🎉");
  } catch (err) {
    consola.error("Project Initialization Failed!", err);
  }
};
