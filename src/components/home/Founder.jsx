import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/avatar.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Harshit gaur</h3>

        <p>
          Hey, Everyone I am Harshit gaur, the founder of TadkaTreats.
          <br />
          Our aim is to create the most tasty FOOD  on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
