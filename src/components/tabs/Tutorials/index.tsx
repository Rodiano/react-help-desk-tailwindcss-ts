// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import "../../../assets/main.css";
import ReactPlayer from "react-player";

interface Walkthrough {
	title: string;
	body: string;
	videoUrl?: string;
}

interface TutorialsProps {
	helpText?: string;
	walkthroughs?: { [key: string]: Walkthrough };
}

const Tutorials: React.FC<TutorialsProps> = ({
	helpText = "Learn how to use the app by seeing a video tutorial",
	walkthroughs,
}) => {
	return (
		<div className="help-desk__tutorials">
			{helpText && (
				<p className="flex flex-wrap max-h-full py-4 pb-4">{helpText}</p>
			)}
			<div className=" flex flex-wrap">
				{Object.keys(walkthroughs).map((name, i) => {
					const walkthrough = walkthroughs[name];
					let shortTitle = walkthrough.title;
					if (shortTitle.length > 43) {
						shortTitle = `${shortTitle.slice(0, 40)}...`;
					}

					return (
						<div
							key={i}
							className="h-full flex items-center justify-start p-2 text-base text-center basis-1/2 flex-grow"
						>
							<div>
								{walkthrough.videoUrl ? (
									<ReactPlayer
										width={"auto"}
										height={"auto"}
										url={walkthrough.videoUrl}
									/>
								) : (
									<div className="flex-grow flex flex-1">
										No URL for video provided
									</div>
								)}
								<p className="text-sm text-left text-gray-900">{shortTitle}</p>
								<p className="text-xs text-left text-gray-600">
									{walkthrough.body}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Tutorials;
