import { Right } from "@/components/align";
import Subtitle from "@/components/subtitle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "管理者のつぶやき / W-PCP",
	description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
	keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ"]
};

export default function AdminsTweet() {

	return (
		<>
			<h1>管理者のつぶやき</h1>
			<Subtitle>Admin's Tweet</Subtitle>

			<h2>はじめに</h2>

			<p>
				まず最初に、このサイトをご覧いただきありがとうございます。<br />
				このサイトは、早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブ「W-PCP」の公式サイトとして、部員の活動や成果を紹介したり、当クラブの知名度を上げるために作成されました。<br />
				実際、サイトというのは難しく、このサイトが有名になる確率は低いでしょう。<br />
				<s>そのため、あなたがこのページを見ているなら拡散してください。</s><br />
				しかし、このサイトを通じて、少しでも多くの方にプログラミングに興味を持っていただければ幸いです。<br />
				また、このサイトがあることにより、当部活について大きく告知する場所ができたことは喜ばしいことだと考えています。<br />
				このような話はこれくらいにして、このサイトの作成考えがあったのか、少し説明させていただきます。<br />
			</p>

			<h2>デザインについて</h2>

			<p>
				まず、このサイトをかっこよくするために、凝ったデザインにしようと考えていました。<br />
				しかし、実際お風呂で考えたデザイン案を実装してみるとあまり納得いかないものでした。<br />
				そのため、シンプルなデザインで作成してみました。<br />
				結果的には、シンプルなデザインは安定していて、見やすいという利点がありました。<br />
				結局、デザインというのは難しく、やはりプロの方々は経験の量が違うと感じました。<br />
				このサイトをよく見ないとこのリンクは見つからないと思うので、あなたがこれを見ているということはシンプルなデザインのおかげかもしれません。<br />
				でもやはり、余裕ができたら凝ったデザインにしてみたいですね。
			</p>

			<h2>やりたいこと</h2>

			<p>
				ある程度上級生になってきて、活動について問題点が見えてきました。<br />
				楽しく部活動を行えている部員が多いなら、やはり部活動に参加することが面倒だと考えている部員もいるでしょう。<br />
				全員が楽しく活動できるように、このサイトには様々な機能を追加していきたいと考えています。<br />
				例えば、部員が好きなタイミングで記事を投稿できる、などすれば部員の活動がより活発になるかもしれません。<br />
				部活について、学校について、趣味について。様々なことを書いていける場所があれば、部員の活動がより楽しくなるかもしれません。<br />
				全員が楽しく活動できる未来を目指して、このサイトを運営していきたいと考えています。
			</p>

			<h2>最後に</h2>

			<p>
				考えがとてもまとまっていない文章になってしまいましたが、このサイトを作成するにあたっての考えを書かせていただきました。<br />
				やはり、自分の考えを文章にすることは難しいですね。機会があれば自分の文章を見直そうと思います。<br />
				それはさておき、ここまで読んでくれて本当にありがとうございます。<br />
				さらに技術的な話はまだまだできるのですが、それはまたの機会にさせていただきたいと思います。<br />
				このサイトが少しでも多くの方にプログラミングに興味を持っていただくきっかけになれば幸いです。<br />
				では、このサイトを見て、見つけてくれて、本当にありがとうございました。
			</p>

			<Right>ー2024年 12月 20日 Yama.can.</Right>

		</>
	)

}