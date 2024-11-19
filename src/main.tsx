import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import FAQ from "./components/tabs/FAQ";
import "../src/assets/css/variables.scss";
import "../src/assets/css/faq.scss";
import "../src/assets/css/help-desk.scss";
import "../src/assets/main.css";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

const domNode = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(domNode!);

root.render(
	<StrictMode>
		<ThemeProvider>
			<App defaultTab="home">
				<h1 className="text-3xl font-bold underline overflow-hidden">
					Hello world!
				</h1>

				<FAQ
					json={{
						categories: [
							{
								title: "General",
								articles: [
									{
										title: "What is React Help Desk?",
										body: 'React Help Desk is a set of React components designed to be the building blocks of a help desk and self-support system for web apps.<br /><br /><iframe width="375" height="211" src="https://www.youtube-nocookie.com/embed/XxVg_s8xAms?rel=0" frameborder="0" allowfullscreen></iframe>',
									},
									{
										title: "Who built this?",
										body: "The team of developers",
									},
								],
							},
							{
								title: "Tray",
								articles: [
									{
										title: "What widgets are available?",
										body: "Right now, there is an FAQ tab and a Tutorials tab.<br /><br />The FAQ tab accepts an object of categories and/or articles that are shown in a collapsible, searchable view.<br /><br />The Tutorials tab accepts an object of walkthroughs and displays the thumbnail in a grid allowing the user to replay walkthroughs.",
									},
								],
							},
							{
								title: "Walkthroughs",
								articles: [
									{
										title: "What are walkthroughs?",
										body: "Walkthroughs are live in-app tutorials that your users can play any time they want to learn how to do a task in your app.<br /><br />You can create text-based walkthroughs that show a popover next to elements or audio walkthroughs with graphics that are timed up with the voiceover.",
									},
								],
							},
						],
					}}
					onArticleRating={() => "Article rated"}
				/>
			</App>
		</ThemeProvider>
	</StrictMode>,
);
