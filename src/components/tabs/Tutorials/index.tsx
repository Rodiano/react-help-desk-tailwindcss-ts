// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface Walkthrough {
	title: string;
	thumbnail: string;
}

interface TutorialsProps {
	helpText?: string;
	walkthroughs?: { [key: string]: Walkthrough };
}

const Tutorials: React.FC<TutorialsProps> = ({
	helpText = "Learn how to use the app by playing an audio or text-based tutorial that will walk you through our system.",
	walkthroughs,
}) => {
	return (
		<div className="help-desk__tutorials">
			{helpText && <p className="help-desk__tutorials-help">{helpText}</p>}
			{Object.keys(walkthroughs).map((name, i) => {
				const walkthrough = walkthroughs[name];
				let shortTitle = walkthrough.title;
				if (shortTitle.length > 43) {
					shortTitle = `${shortTitle.slice(0, 40)}...`;
				}

				return (
					<button
						type="button"
						onClick={() => console.log("Play tutorial")}
						className="help-desk__tutorial"
						title={walkthrough.title}
						key={i}
					>
						<div className="help-desk__tutorial-thumbnail">
							<img src={walkthrough.thumbnail} alt={walkthrough.title} />
							<svg
								className="help-desk__tutorial-play"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<title>play</title>
								<polygon points="5 3 19 12 5 21 5 3" />
							</svg>
						</div>
						<p>{shortTitle}</p>
					</button>
				);
			})}
		</div>
	);
};

export default Tutorials;
