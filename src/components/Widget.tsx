// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useHelpDeskContext } from "../App";

interface WidgetProps {
	externalAction?: boolean;
	children: React.ReactNode;
	label: string;
	onSelectTab?: (tab: string) => void;
	onClick?: () => void;
	tab?: string;
}

const Widget: React.FC<WidgetProps> = ({
	externalAction,
	children,
	label,
	tab,
	onClick,
}) => {
	const { onClose, onSelectTab } = useHelpDeskContext();

	const handleClick = () => {
		if (tab) {
			onSelectTab(tab);
		} else if (externalAction !== undefined && externalAction !== false) {
			onClose();
		}

		onClick?.();
	};

	return (
		<button
			type="button"
			className="help-desk__widget flex justify-center flex-col items-center"
			onClick={handleClick}
		>
			<div className="box">{children}</div>
			<p>{label}</p>
		</button>
	);
};

export default Widget;
