import Scrollable from "@/components/scrollable"
import "katex/dist/katex.min.css"
import { InlineMath } from "react-katex"
import { Metadata } from "next";
import Subtitle from "@/components/subtitle";

export const metadata: Metadata = {
	title: "競技プログラミング / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "競プロ"]
};

export default function Competitive() {

	return (
		<>
			<h1>競技プログラミング</h1>
			<Subtitle>Competitive Programming</Subtitle>
			<h2>概要</h2>
			<p>
				プログラミングの技術、数学の知識、論理的思考力を用いて、与えられた問題を速く解けるプログラムを書くことを目指す競技です。<br />
				例えば、日本の人口のような大きなデータを管理するためには莫大な計算が必要で、時間がかかってしまします。<br />
				そこで、競技プログラミングの技術を用いることで、そのような問題を効率的に解くことができます。<br />
				そのような知識をみにつけるため、我々はAtCoderなどのオンラインジャッジを利用して、プログラミングコンテストに参加しています。<br />
				科学オリンピックの一つである情報オリンピック（JOI）にも参加しています。
			</p>
			<h2>例題</h2>
			<p>
				では、具体的にどのような問題が出題されるのか、例題を紹介します。<br />
				以下の問題を解いてみましょう。<br />
				コンピューターは、1秒に約<InlineMath>10^8</InlineMath>回の計算ができます。<br />
				2秒以内に、<InlineMath>10^7</InlineMath>までの素数をすべて求めるプログラムを書いてください。
			</p>
			<details>
				<summary>解答</summary>
				<h3>解法</h3>
				<p>
					まず、1から<InlineMath>10^7</InlineMath>までの数を順番に調べていくプログラムを考えます。<br />
					このとき、毎回素数かどうか判定するためには、その数までの数で割り切れるかどうかを調べる必要があるので、数字 n に対しては約 <InlineMath>{"\\sqrt{n}"}</InlineMath> 回の計算が必要です。<br />
					そこで、「エラトステネスの篩」というアルゴリズムを用いることで、素数かどうかを高速に判定することができます。<br />
					エラトステネスの篩とは、最初に数列を用意し、そのうちの素数を順番に取り出して、その倍数のうち自分以外をすべて取り除くという操作を繰り返すことで、素数を求めるアルゴリズムです。<br />
					これにより、毎回の判定にかかる計算の回数を 1 回に抑えることができます。<br />
					ただし、<InlineMath>n</InlineMath> の倍数を取り除く操作には <InlineMath>{"\\frac{10^7}{n}"}</InlineMath> 回の計算が必要となります。<br />
					しかし、素数の個数は少ないため、<InlineMath>n</InlineMath>までの素数を求めるのに必要な計算の回数はだいたい <InlineMath>{"n \\log \\log n"}</InlineMath> 回となります。<br />
					これに <InlineMath>10^7</InlineMath> を代入すると、大体 <InlineMath>4 \times 10^7</InlineMath> となり、<InlineMath>10^8</InlineMath> より小さいので 1 秒以内に計算できます。<br />

				</p>
				<h3>例</h3>
				<p>
					100までの素数を求めるときのエラトステネスの篩の動きを考えます。<br />
					まず、100までの数列を用意します。<br />
					次に、2を取り出して、2以外の2の倍数をすべて取り除きます。<br />
					そうすると、2, 3, 5, 7, 9, ... と奇数のみが残りますが、次に小さい3を取り出して、3以外の3の倍数をすべて取り除きます。<br />
					そうすると、2, 3, 5, 7, 11, ... が残ります。今度は5に対して同じ操作を行えばよいです。<br />
					これを繰り返すと、2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 が残ります。<br />
					これが100までの素数です。<br />
					下の画像は、上の枠に数字、下の枠にその数字が消された倍数を示しています。<br />
					（はみ出ている際は、スクロールしてご覧ください。）
				</p>
				<Scrollable minWidth={500}>
					<img src="/img/activities/competitive-example.svg" alt="エラトステネスの篩の動き" />
				</Scrollable>
			</details>
			<p>
				このように、競技プログラミングは指定通りのプログラムを書くと間に合わない問題を、高速に解くための技術を披露する競技です。<br />
				このような技術は、プログラミングコンテストだけでなく、実際の開発でも役立ちます。<br />
				興味のある方は、実際に問題を解いてみることをおすすめします。<br />
				ページ下部の関連サイトより、AtCoder などのオンラインジャッジで過去問を解いてみると面白いでしょう！<br />
				それでは、読んでいただきありがとうございました。
			</p>
			<h2>関連サイト</h2>
			<ul>
				<li><a href="https://atcoder.jp" target="_blank">AtCoder株式会社</a></li>
				<li><a href="https://www.ioi-jp.org/" target="_blank">一般社団法人情報オリンピック日本委員会</a></li>
			</ul>
		</>
	)

}