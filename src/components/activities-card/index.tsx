import Card from "@/components/card";

export default function ActivitiesCard() {

	return (
		<Card>
			<a href="/activities/web">
				<div>
					<h3>Webプログラミング</h3>
					<p>
						部内外サイトの保守・運用を行っています。<br />
						出席管理等の部活動の中心となるシステムを開発しています。<br />
						また、他の委員会のシフト管理システム等を開発しました。
					</p>
				</div>
			</a>
			<a href="/activities/competitive">
				<div>
					<h3>競技プログラミング</h3>
					<p>
						AtCoderなどのオンラインジャッジを利用して、プログラミングコンテストに参加しています。<br />
						科学オリンピックの一つである情報オリンピック（JOI）にも参加しています。
					</p>
				</div>
			</a>
			<a href="/activities/game">
				<div>
					<h3>ゲームプログラミング</h3>
					<p>
						毎年文化祭である「興風祭」に向けてゲームを制作しています。<br />
						ぜひ、興風祭にて部員の作成したゲームを遊んでみてください。
					</p>
				</div>
			</a>
			<a href="/activities/systems">
				<div>
					<h3>システムプログラミング</h3>
					<p>
						Webプログラミングの補助として、システムプログラミングを行っています。<br />
						必要なユーザー情報などをWebアプリケーション側に提供したり、必要なデータを保存するプログラムを書いています。
					</p>
				</div>
			</a>
			<a href="/activities/qualification">
				<div>
					<h3>資格</h3>
					<p>
						部員は、基本情報技術者試験、応用情報技術者試験などの資格取得を目指しています。
					</p>
				</div>
			</a>
			<div>
				<h3>その他</h3>
				<p>
					その他にも、個人的にアプリケーションを開発したり、アセンブリ言語やOSの研究を行っている部員もいます。
				</p>
			</div>
		</Card>
	);

}