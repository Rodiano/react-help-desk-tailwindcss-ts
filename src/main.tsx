import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/main.css";
import { ThemeProvider } from "@material-tailwind/react";

const domNode = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(domNode!);

root.render(
	<StrictMode>
		<ThemeProvider>
			<h1 className="text-xl">
				Please run <i>yarn storybook</i> to see an example of the help-desk
			</h1>
		</ThemeProvider>
	</StrictMode>,
);
