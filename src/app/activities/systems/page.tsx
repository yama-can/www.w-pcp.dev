import Subtitle from "@/components/subtitle";
import "katex/dist/katex.min.css"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "システムプログラミング / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "web"]
};

export default function Competitive() {

	return (
		<>
			<h1>システムプログラミング</h1>
			<Subtitle>Backend Engineering</Subtitle>
			<h2>概要</h2>
			<p>
				Webプログラミングを支えている縁の下の力持ちです。<br />
				バックエンドエンジニアリングとも呼ばれ、部内外のシステムにおいて、データの管理や処理を行っています。<br />
				たとえば、部内の出席管理システム、オンラインジャッジシステム、シフト管理システムの情報を管理しています。<br />
				他にも、ドメインに応じて適切なサービスに接続して、データとドメインの橋渡しをするシステムを開発しています。
			</p>
			<h2>作成したシステム</h2>
			<ul>
				<li>出席管理システム（部内用）</li>
				<li>オンラインジャッジシステム（競技プログラミング用）</li>
				<li>シフト管理システム（部外用）</li>
				<li>接続管理システム（サイト表示用）</li>
			</ul>
		</>
	)

}