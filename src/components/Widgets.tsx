// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface WidgetsProps {
	children: React.ReactNode;
}

const Widgets: React.FC<WidgetsProps> = ({ children }) => (
	<div className="help-desk__widgets grid grid-cols-3 gap-4 my-4">
		{children}
	</div>
);

export default Widgets;
