import "./stylesheets/main.scss";
import "./helpers/context_menu";
import "./helpers/external_links";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------



import { remote } from "electron";
import jetpack from "fs-jetpack";


//@ts-ignore
import env from "env";


const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

//@ts-ignore
document.querySelector("#app").style.display = "block";