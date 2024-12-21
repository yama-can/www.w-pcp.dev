import type { Metadata } from "next";
import styles from "./layout.module.scss";
import "./globals.scss";
import MBPC from "@/components/mobile-friendly";

export const metadata: Metadata = {
  title: "W-PCP / Waseda PC Programming Club",
  description: "早稲田中学校・高等学校のプログラミングに関する研究・開発を行うクラブです。",
  keywords: ["早稲田", "早稲田中学校", "プログラミング", "部活動", "クラブ"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">

      <head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=open_in_new" />

      </head>

      <body>

        <header className={styles.header}>
          <nav>
            <h2><MBPC pc={<>W-PCP / 早稲田中高PCプログラミング部</>} mobile={<>W-PCP</>} /></h2>
            <div>
              <a href="/">ホーム</a>
              <a href="/activities">活動</a>
            </div>
          </nav>
        </header>

        <div className={styles.page}>

          {children}

        </div>

        <footer className={styles.footer}>

          <h2><span>早稲田中学校・高等学校</span> <span>PCプログラミング部</span></h2>

          <p>
            © 2024 W-PCP All Rights Reserved.
          </p>

        </footer>

      </body>

    </html>
  );
}
