import React from "react";
import style from "./style.module.scss";

export default function Card({ children }: { children: React.ReactNode }) {

	return (
		<div className={style.grid}>
			{children}
		</div>
	);

}
