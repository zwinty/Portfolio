import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css'; // Make sure your CSS is linked

const styles = {
  sectionSubText: 'text-lg font-medium text-gray-500',
  sectionHeadText: 'text-3xl font-semibold text-gray-800',
};

const textVariant = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
});

const About = () => {
  const experiences = [
    {
      date: '2016年〜2023年（卒業）',
      title: 'ヤンゴン大学',
      company_name: 'コンピューターサイエンス学科（学士）',
      description: 'ヤンゴン大学では、コンピューターサイエンスの基礎を学びました。特に、プログラミング、データベース管理やプロジェクトマネジメントなどを主に学びました。',
    },
    {
      date: '2024年〜2026年（卒業見込み）',
      title: '日本電子専門学校',
      company_name: 'Webデザイン科　（専門士）',
      description: '日本電子専門学校のWebデザイン科で勉強しています。Webデザイン科では、企画から実装まで一貫した課題制作や産学連携授業などを通じて、実践的なスキルを磨いています。',
    },
  ];

  return (
    <motion.div variants={textVariant()} initial="initial" animate="animate">
      <div className="section-header">
        <p className={styles.sectionSubText}>自己紹介</p>
        <h2 className={styles.sectionHeadText}>学歴</h2>
      </div>

      <div className="timeline-section">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              contentStyle={{
                background: '#367BDE',
                color: '#000000',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #367BDE' }}
              iconStyle={{ background: '#367BDE' }}
            >
              <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
              <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
              <p className="text-white text-[14px]">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default About;
