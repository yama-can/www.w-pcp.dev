import { Center } from "@/components/align";
import Subtitle from "@/components/subtitle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "資格 / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "web"]
};

export default function Competitive() {

	return (
		<>
			<h1>資格</h1>
			<Subtitle>Qualifications</Subtitle>
			<h2>概要</h2>
			<p>
				力試し・スキルアップのために取得されたことのある資格です。<br />
				PCプログラミングでは、基本的に国家試験である <a href="https://www.ipa.go.jp" target="_blank">IPA</a> の FE（基本情報技術者試験）や、その上位資格である AP（応用情報技術者試験）を目指しています。<br />
				その他、IPA だけでなく AWS など、部員が個人で取得した資格もあります。
			</p>
			<h2>情報処理技術者試験</h2>
			<p>
				独立行政法人情報処理推進機構（IPA）が実施する、情報処理技術者の資格試験です。<br />
				PCプログラミング部では、まず FE（基本情報技術者試験）に合格し、その後 AP（応用情報技術者試験）を目指しています。<br />
				その後に、SC（情報処理安全確保支援士試験）など、その他の資格も取得している部員もいます。
			</p>
			<Center>
				<img src="https://www.ipa.go.jp/shiken/kubun/pkin3a0000007x81-img/pkin3a0000007xdp.png" />
				<p>（<a href="https://www.ipa.go.jp/shiken/kubun/list.html" target="_blank">独立行政法人情報処理推進機構 試験情報</a> より）</p>
			</Center>
		</>
	)

}