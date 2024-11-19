import { useState, useContext, createContext, type ReactNode } from "react";
import classNames from "classnames";
import Widgets from "./components/Widgets";
import Widget from "./components/Widget";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import Content from "./components/Content";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface HelpDeskProps {
	defaultTab: string;
	defaultExpanded?: boolean;
	expanded?: boolean;
	onClose?: () => void;
	onToggle?: () => void;
	placement?: string;
	children?: ReactNode;
}

interface HelpDeskContextProps {
	activeTab: string;
	defaultTab: string;
	onClose: () => void;
	onToggle: () => void;
	onSelectTab: (tab: string) => void;
}

const HelpDeskContext = createContext<HelpDeskContextProps | undefined>(
	undefined,
);

const HelpDesk: React.FC<HelpDeskProps> & {
	Content: typeof Content;
	Header: typeof Header;
	Menu: typeof Menu;
	Widgets: typeof Widgets;
	Widget: typeof Widget;
} = ({
	defaultTab,
	defaultExpanded = false,
	expanded,
	onClose,
	onToggle,
	placement,
	children,
}) => {
	const [activeTab, setActiveTab] = useState(defaultTab);
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	const handleSelectTab = (tab: string) => {
		setActiveTab(tab);
	};

	const handleToggleExpand = () => {
		if (typeof expanded === "undefined") {
			setIsExpanded(!isExpanded);
		} else {
			onToggle?.();
		}
	};

	const handleClose = () => {
		if (typeof expanded === "undefined") {
			setIsExpanded(false);
		} else {
			onClose?.();
		}
	};

	const contextValue = {
		activeTab,
		defaultTab,
		onClose: handleClose,
		onToggle: handleToggleExpand,
		onSelectTab: handleSelectTab,
	};

	return (
		<HelpDeskContext.Provider value={contextValue}>
			<div
				className={classNames("help-desk", {
					[`help-desk-${placement}`]: placement,
					"help-desk--expanded":
						typeof expanded !== "undefined" ? expanded : isExpanded,
				})}
			>
				{children}
			</div>
		</HelpDeskContext.Provider>
	);
};

HelpDesk.Content = Content;
HelpDesk.Header = Header;
HelpDesk.Menu = Menu;
HelpDesk.Widgets = Widgets;
HelpDesk.Widget = Widget;

export default HelpDesk;

export const useHelpDeskContext = () => {
	const context = useContext(HelpDeskContext);
	if (!context) {
		throw new Error("useHelpDeskContext must be used within a HelpDesk");
	}
	return context;
};
