// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { Book, HelpCircle, MessageSquare, Youtube } from "react-feather";
import Tutorials from "./components/tabs/Tutorials";
import { action } from "@storybook/addon-actions";

import "../src/assets/main.css";

import "../src/assets/css/variables.scss";
import "../src/assets/css/help-desk.scss";
import "../src/assets/css/faq.scss";
import "../src/assets/css/tutorials.scss";

import FAQ from "./components/tabs/FAQ";
import * as faqData from "./components/tabs/FAQ/faq.json";
import HelpDesk from "./App";

const meta: Meta<typeof HelpDesk> = {
	component: HelpDesk,
	title: "Help Center",
};

const tutorials = {
	1: {
		title: "React tutorial for beginners",
		videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk",
		body: "The coors light related to a Mango Beer befriends the loyal Guiness. Most people believe that the Hommel Bier bestows great honor upon a Hops Alligator Ale.",
	},
	2: {
		title: "React & Tailwind CSS Gallery",
		videoUrl: "https://www.youtube.com/watch?v=FiGmAI5e91M",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt.",
	},
	3: {
		title: "Embedding video width React and Gatsby",
		videoUrl: "https://www.youtube.com/watch?v=xNRJwmlRBNU",
		body: "A college-educated freight train finds lice on the Fosters, or the bullfrog brew beyond the Jamaica Red Ale borrows money from a malt. ",
	},
	4: {
		title: "Learn tips & tricks for React",
		videoUrl: "https://www.youtube.com/watch?v=b0IZo2Aho9Y",
		body: "Indeed, another Sam Adams accidentally pees on a gratifying booze. A mug shares a shower with another Ipswich Ale. Now and then, an Ipswich Ale from the porter brainwashes the monkey bite. Indeed, the Long Trail Ale around the change tries to seduce some ESB.",
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
								<Youtube width="20" height="20" />
							</HelpDesk.Widget>
							<HelpDesk.Widget
								label="Live Chat"
								onClick={() => action("Live chat initializer if wanted")()}
								externalAction
							>
								<MessageSquare width="20" height="20" />
							</HelpDesk.Widget>
						</HelpDesk.Widgets>
						<FAQ json={faqData} onArticleRating={() => ""} />
					</div>
					<div data-name="tutorials">
						<HelpDesk.Header title="Tutorials" />
						<Tutorials walkthroughs={tutorials} />
					</div>
				</HelpDesk.Content>
			</HelpDesk>
		</div>
	),
};
