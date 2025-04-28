import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => { 
  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2>私が大事にしていること</h2>
          <p>
            私が大事にしていることは、いつも学び続けることと、<br/>
            他の人と協力して成長することです。<br/>
            デザインや開発では、使う人が使いやすいものを作ることを大切にしています。<br/>
            そして、フィードバックをもらって改善することが、<br/>
            より良いものを作るために必要だと思っています。
          </p>
        </motion.div>

        <motion.div
          className="image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/myphoto.svg" alt="photo of me" />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
