import React from "react";
import style from "./style.module.scss";

export function Right({ children }: { children: React.ReactNode }) {

	return (
		<div className={style.right}>
			{children}
		</div>
	);

}

export function Center({ children }: { children: React.ReactNode }) {
	
	return (
		<div className={style.center}>
			{children}
		</div>
	);

}
