import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Biz Kim?
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Biziň maksatymyz ýokary hilli, ygtybarly we çalt işleýän synag
          platformasyny döretmekdir. Ulanyjylaryň has gowy tejribe almagy üçin
          UI/UX, frontend we backend ulgamlaryna uly ähmiýet berýäris.
        </motion.p>

        <div className="grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2>🌟 Esasy Aýratynlyklarymyz</h2>
            <ul>
              <li>Çalt we ygtybarly backend (Go, MongoDB)</li>
              <li>Interaktiw we amatly UI/UX dizaýny</li>
              <li>Hasaplama netijeleri we statistika</li>
              <li>Howpsuzlyk we maglumat goragy</li>
            </ul>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2>👨‍💻 Dörediji</h2>
            <p>
              Backend: <b>Kuwwat Hydyrow</b> (dJango, SQL) <br />
              UI/UX & Frontend: <b>Siz</b> (React.js, CSS)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
