import React from "react";

export default function Subtitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 style={{ textAlign: "center", lineHeight: 0 }}>{children}</h2>
	)
}