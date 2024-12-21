import { Center } from "@/components/align";
import Scrollable from "@/components/scrollable";
import Subtitle from "@/components/subtitle";
import "katex/dist/katex.min.css"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "ゲームプログラミング / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "web"]
};

export default function Competitive() {

	return (
		<>
			<h1>ゲームプログラミング</h1>
			<Subtitle>Game Programming</Subtitle>
			<h2>概要</h2>
			<p>
				興風祭で展示するためのゲームを制作しています。<br />
				興風祭では、部員が作成したゲームを遊ぶことができます。<br />
				また、毎年ゲームの配布を行っています。<br />
				興風祭にお越しいただいた際に面白いゲームを見つけたら、ぜひ家でも遊んでみてください。
			</p>
			<h2>使用しているフレームワーク</h2>
			<ul>
				<li>Unity</li>
				<li>Unreal Engine</li>
				<li>Siv3D</li>
				<li>Flutter</li>
			</ul>
			<h2>ゲームの画像</h2>
			<p>
				興風祭で展示されたゲームの一部を紹介します。
			</p>
			<h3>Chu-Try-All</h3>
			<p>
				興風祭で展示されたゲームの一つです。<br />
				音ゲーと避けゲーを組み合わせた、独自のゲームです。<br />
				Unityで制作されています。<br />
				下の画像は、ゲームの画面です。
			</p>
			<Center>
				<img src="/img/activities/game-chutryall.png" alt="Chu-Try-All" style={{ width: "min(100%, 700px)" }} />
			</Center>
			<p>
				他にも多くのゲームがあります。<br />
				ぜひ、興風祭にお越しいただいた際に遊んでみてください。
			</p>
		</>
	)

}