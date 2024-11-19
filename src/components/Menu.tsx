// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import classNames from "classnames";
import { useHelpDeskContext } from "../App";

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export const Menu: React.FC<MenuProps> = ({
	children,
	className,
	...props
}) => {
	const { onToggle } = useHelpDeskContext();

	return (
		<button
			title="Get help"
			onClick={onToggle}
			className={classNames("help-desk__menu", className)}
			{...props}
		>
			{children}
		</button>
	);
};
