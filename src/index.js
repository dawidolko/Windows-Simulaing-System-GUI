import "./fabricConfig";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./theme/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import * as serviceWorker from "./serviceWorker";

initializeIcons();
/*
  Waiting one frame lets the HTML in the first response paint before the application
  replaces it. A tab opened in the background has no frames, so it mounts at once.
*/
const mount = () =>
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);

if (document.hidden) mount();
else requestAnimationFrame(() => setTimeout(mount));

serviceWorker.unregister();
reportWebVitals();
