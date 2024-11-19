// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import HelpDesk from "./App";
import { Book, Compass, HelpCircle, MessageSquare } from "react-feather";
import Tutorials from "./components/tabs/Tutorials";

import "../src/assets/main.css";

import "../src/assets/css/variables.scss";
import "../src/assets/css/help-desk.scss";
import "../src/assets/css/faq.scss";
import "../src/assets/css/tutorials.scss";

import FAQ from "./components/tabs/FAQ";
import * as faqData from "./components/tabs/FAQ/faq.json";
import React from "react";

const meta: Meta<typeof HelpDesk> = {
	component: HelpDesk,
};

const walkthroughs = {
	team: {
		title: "Using the Dashboard",
		thumbnail: "https://i.imgur.com/ItIdshs.png",
	},
	avatar: {
		title: "Upload to the gallery",
		thumbnail: "https://i.imgur.com/T8DZKF7.png",
	},
	dashboard: {
		title: "Embedding video",
		thumbnail: "https://i.imgur.com/OUm6qKz.png",
	},
	goals: {
		title: "Learn how to chat",
		thumbnail: "https://i.imgur.com/Osp9Xjq.png",
	},
};

export default meta;
type Story = StoryObj<typeof HelpDesk>;

export const Primary: Story = {
	render: () => (
		<div>
			<h1>React Help Desk</h1>
			<p>
				Click on the help button on the right hand side of your screen to open
				the help desk.
			</p>
			<HelpDesk defaultTab="home">
				<HelpDesk.Menu>
					<HelpCircle width="18" height="18" />
				</HelpDesk.Menu>
				<HelpDesk.Content>
					<div data-name="home">
						<HelpDesk.Header title="Help Center" />
						<HelpDesk.Widgets>
							<HelpDesk.Widget label="FAQ" tab="home">
								<Book width="20" height="20" />
							</HelpDesk.Widget>
							<HelpDesk.Widget label="Tutorials" tab="tutorials">
								<Compass width="20" height="20" />
							</HelpDesk.Widget>
							<HelpDesk.Widget
								label="Live Chat Support"
								// onClick={() =>
								// 	action("Open the live chat box with their JS API")()
								// }
								// externalAction
							>
								<MessageSquare width="20" height="20" />
							</HelpDesk.Widget>
						</HelpDesk.Widgets>
						<FAQ json={faqData} onArticleRating={() => ""} />
					</div>
					<div data-name="tutorials">
						<HelpDesk.Header title="Tutorials" />
						<Tutorials walkthroughs={walkthroughs} />
					</div>
				</HelpDesk.Content>
			</HelpDesk>
		</div>
	),
};
