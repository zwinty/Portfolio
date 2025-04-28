import { useScroll, useSpring } from 'framer-motion';
import Card from './Card';
import './CardList.css';

const projects = [
 
  {
    title: "「e☆イヤホン」EC サイト UI リニュアル",
    description: "この課題は、1年次後期の産学連携授業で取り組んだ作品です。実際に多くのユーザーが利用するECサイトのUIリニューアルをテーマに、外部クライアント様から直接課題をいただきました。企画・デザイン・実装のすべてを一人で担当し、Reactを用いてシンプルで使いやすいUIを目指して開発を進めました。また、企業様に対して4回のプレゼンテーションを行い、本プロジェクトではチームリーダーも務めました。",
    src: "/earphone.svg",
    url: "https://drive.google.com/file/d/18551JKzWEdjLEGmeChK2YDVppdtcYtpb/view?usp=drive_link",
    color: "/background2.svg"
  },
 
  {
    title: "「OSMO POCKET 3」SNS 連携サイト",
    description: "この課題は、サイト設計の授業でチームで作成したプロジェクトです。私はUI/UXデザインとプレゼンテーションを担当しました。プロジェクトの目的は、Osmo Pocket 3をSNSでバズらせるためのスペシャルサイトを作成することです。サイトでは、Osmo Pocket 3の特徴を魅力的に伝え、SNSでシェアしたくなるようなコンテンツを提供し、ユーザーの関心を引き、実際に購入へと導けるようなデザインと機能を取り入れました。",
    src: "/osmo.svg",
    url: "https://drive.google.com/file/d/1F9pmKnQcBxElmE67KryXGA-ZEBey41mj/view?usp=sharing",
    color: "/background3.svg"
  },
  {
    title: "ポートフォリオサイト",
    description: "このポートフォリオサイトは、自分のデザイン・開発スキルを紹介するために制作しました。各セクションでは過去に制作したプロジェクトや作品を詳しく紹介しています。レスポンシブデザインを意識し、スマホやタブレットでも見やすい構成にしています。",
    src: "/port.svg",
    url: "https://example.com",
    color: "/background2.svg"
  },
  {
    title: "Webデザイン科のスペシャルサイト",
    description: "この課題はWebデザイン科に入って初めての課題です。Webデザイン科のファンを増やすためのスペシャルサイトの作成に依頼され、企画からデザイン実装まで１人で作成し「PC、スマホ、タプレット」３つのレスポンシブデザインに挑戦しました。Webデザイン科の学全員の前にプレゼンテーションしました",
    src: "/specialsite.svg",
    url: "https://drive.google.com/file/d/1iTLooP6-P8pkEgaV4P1rZGLrYZpt9DWD/view?usp=drive_link",
    color: "/background3.svg"
  },
];

const CardList = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="cardList">
      {projects.map((project, index) => (
        <Card 
          key={index}
          i={index}
          {...project}
          progress={smoothProgress}
          range={[index * 0.25, 1]}
          targetScale={1 - (projects.length - index) * 0.05}
        />
      ))}
    </div>
  );
};

export default CardList;
