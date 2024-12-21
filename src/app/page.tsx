import styles from "./page.module.scss";
import { Metadata } from "next";
import Subtitle from "@/components/subtitle";
import ActivitiesCard from "@/components/activities-card";

export const metadata: Metadata = {
  title: "早稲田中学校・高等学校 PCプログラミング部",
  description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
  keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ", "競プロ", "W-PCP", "PCP"]
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1><span>早稲田中学校・高等学校</span> <span>PCプログラミング部</span></h1>
      <Subtitle>W-PCP</Subtitle>
      <h2>概要</h2>
      <p>
        楽しく、役に立つ、好きなことをする。<br />
        早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。
      </p>
      <h2>活動内容</h2>
      <p>詳しくはカードをクリックしてください。</p>
      <ActivitiesCard />
      <h2>実績</h2>
      <ul>
        <li>JOI 2022/2023 春合宿進出</li>
        <li>JOI 2023/2024 本戦進出</li>
        <li>AtCoder Junior League 2023 中学校 6位・高校 11位・その他個人成績</li>
        <li>AtCoder Junior League 2024 Summer アルゴリズム部門 中学校 10位・その他個人成績</li>
        <li>AtCoder Junior League 2024 Summer ヒューリスティック部門 中学校 9位・その他個人成績</li>
        <li>パソコン甲子園 プログラミング部門 本戦進出</li>
        <li>その他の資格等</li>
      </ul>
      <h2>その他</h2>
      <ul>
        <li><a href="/admins-tweet">管理者のつぶやき</a></li>
      </ul>
    </div>
  );
}
