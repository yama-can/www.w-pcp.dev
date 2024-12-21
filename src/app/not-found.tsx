import { Center } from "@/components/align";

export default function NotFoundPage() {

	return (
		<>
			<h1>404 Not Found</h1>
			<Center>
				<span style={{ fontSize: "4em", color: "#ccc", margin: ".8em 0" }}>
					(´・ω・｀)
				</span>
				<p style={{ fontSize: "1.1em" }}>
					お探しのページが見つかりませんでした。
				</p>
			</Center>
			<ul>
				<li><a href="/">ホームへ戻る</a></li>
				<li><a href="/activities">活動紹介</a></li>
			</ul>
		</>
	)

}