import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { artItems } from "../constants";

const FeedbackCard = ({
  index,
  name,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-0 rounded-3xl xs:w-[320px] xs:h-[320px] '
  >
    <img
          src={image}
          alt={`Art-Item-${name}`}
          className='w-full rounded-md object-cover'
        />
  </motion.div>
);

const Gallery = () => {
  return (
    <div className={`mt-12 bg-secondary-text rounded-[20px]`}>
      <div
        className={`bg-[#0a0a0a] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>SOME RENDER</p>
          <h2 className={styles.sectionHeadText}>Gallery.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap place-content-evenly gap-3`}>
        {artItems.map((artItem, index) => (
          <FeedbackCard key={artItem.name} index={index} {...artItem} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "");
