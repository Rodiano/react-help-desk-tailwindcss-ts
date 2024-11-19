import classNames from "classnames";
import { Children, isValidElement } from "react";
import { useHelpDeskContext } from "../App";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
	const { activeTab } = useHelpDeskContext();

	// Adjust activeTab to show top-level tab (e.g., "faq" if activeTab is "faq.article")
	const topLevelTab = activeTab.includes(".")
		? activeTab.split(".")[0]
		: activeTab;

	return (
		<div className={classNames("help-desk__content", className)} {...props}>
			{Children.map(children, (tab) => {
				return isValidElement(tab) && tab?.props["data-name"] === topLevelTab
					? tab
					: null;
			})}
		</div>
	);
};

export default Content;
