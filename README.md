# React Help Desk 2024

An updated version of <a href='https://github.com/onlicar/react-help-desk'>react-help-desk</a> using **React, TailwindCSS, TypeScript and Vite**.
Credit to the former Front-End team at Onlicar.


### Usage
```bash
yarn add react-help-desk-tailwindcss-ts # or npm install react-help-desk-tailwindcss-ts
```

<sub>To see how it actually works</sub>



```tsx
import React from 'react'
import HelpDesk from 'react-help-desk-tailwindcss-ts'

// Render HelpDesk (also available in Storybook)
// Make sure your data-name corresponds to the title of the tab

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
								label="Live Chat Support"
								onClick={() => action("Live chat initializer if wanted")()}
								externalAction
							>
								<MessageSquare width="20" height="20" />
							</HelpDesk.Widget>
						</HelpDesk.Widgets>
						<FAQ json={faqData} />
					</div>
					<div data-name="tutorials">
						<HelpDesk.Header title="Tutorials" />
						<Tutorials walkthroughs={tutorials} />
					</div>
				</HelpDesk.Content>
			</HelpDesk>
```

In the example used in Storybook, the categories and articles comes from a JSON file.

```json
{
	"categories": [
		{
			"title": "General",
			"articles": [
				{
					"title": "What is React Help Desk?",
					"body": "React Help Desk is a set of React components using TailwindCSS and TypeScript designed to be the building blocks of a help desk and self-support system for web apps."
				},
				{
					"title": "What do I do if I don't know what to do?",
					"body": "Just do it!"
				}
			]
		},
		{
			"title": "Tray",
			"articles": [
				{
					"title": "What widgets are available?",
					"body": "Right now, there is an FAQ tab and a Tutorials tab.<br /><br />The FAQ tab accepts an object of categories and/or articles that are shown in a collapsible, searchable view.<br /><br />The Tutorials tab has of now been made so that it supports video tutorials or whatever you might feel like to replace it with."
				}
			]
		},
		{
			"title": "Live chat",
			"articles": [
				{
					"title": "What is live chat?",
					"body": "Live chat is a feature that allows you to chat with a support agent in real-time. There a many ways to implement this. <strong><a href='https://www.google.com/search?q=live+chat' target='_blank'>Google live chat</a></strong> and se apps from Zendesk, LiveChat, LiveAgent and many more."
				}
			]
		}
	]
}

```

### Features

- Help Center tray
- Searchable FAQ Articles
- Scalable widgets and content
