import ActivitiesCard from "@/components/activities-card";
import Card from "@/components/card";
import Subtitle from "@/components/subtitle";
import "katex/dist/katex.min.css"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "活動内容 / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "活動内容"]
};

export default function Competitive() {

	return (
		<>
			<h1>活動内容</h1>
			<Subtitle>Activities</Subtitle>
			<h2>活動一覧</h2>
			<p>
				PCプログラミング部には、一部の分野に長けた部員や、幅広い分野に興味を持つ部員が在籍しています。<br />
				以下に、部内で行っている活動を紹介します。詳しくはカードをクリックしてください。
			</p>
			<ActivitiesCard />
		</>
	)

}