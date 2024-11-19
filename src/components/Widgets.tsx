// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface WidgetsProps {
	children: React.ReactNode;
}

const Widgets: React.FC<WidgetsProps> = ({ children }) => (
	<div className="help-desk__widgets">{children}</div>
);

export default Widgets;
