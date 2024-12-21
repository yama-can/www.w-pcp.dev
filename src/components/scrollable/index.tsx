import React from "react";

export default function Scrollable({ minWidth, children }: { minWidth?: number, children: React.ReactNode }) {

	return (
		<div style={{ overflowX: "auto" }}>
			<div style={{ minWidth }}>
				{children}
			</div>
		</div>
	)

}