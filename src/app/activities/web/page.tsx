import Scrollable from "@/components/scrollable"
import "katex/dist/katex.min.css"
import { InlineMath } from "react-katex"
import { Metadata } from "next";
import { Center } from "@/components/align";
import Subtitle from "@/components/subtitle";

export const metadata: Metadata = {
	title: "Webプログラミング / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "web"]
};

export default function Competitive() {

	return (
		<>
			<h1>Webプログラミング</h1>
			<Subtitle>Web Programming</Subtitle>
			<h2>概要</h2>
			<p>
				現代社会を支えているWebサイトを作るためのプログラミングです。<br />
				PCプログラミング部では、Next.js を用いで、部内外のサイトの保守・運用・デザインを行っています。<br />
				また、出席管理等の部活動の中心となるシステムを開発しています。<br />
				他の委員会のシフト管理システム等も開発しました。<br />
				このサイトもその活動の一部となっています。
			</p>
			<h2>作成したサイト</h2>
			<ul>
				<li>出席管理システム（部内用）</li>
				<li>オンラインジャッジシステム（競技プログラミング用）</li>
				<li>シフト管理システム（部外用）</li>
				<li><a href="https://ehrenfest.w-pcp.dev" target="_blank">エーレンフェストの定理の視覚化</a></li>
				<li>当サイト</li>
			</ul>
			<h2>画像</h2>
			<p>
				オンラインジャッジシステム「AtsuoCoder」の画面です。
			</p>
			<Center>
				<img src="/img/activities/web-example.png" alt="AtsuoCoder" style={{ width: "min(100%, 700px)" }} />
			</Center>
		</>
	)

}