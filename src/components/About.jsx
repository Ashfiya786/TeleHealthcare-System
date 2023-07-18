import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "../assets/scss/index.scss";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // <Tilt >
  <Tilt className='xs:w-[250px] w-full'> 
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className='green-bluebackground'>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview:</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        This is a software that help doctors to create and manage staff, prescriptions, patients, drugs, advice, reports, appointments and many more things digitally.
        It includes a database of drugs,making it easy for doctors to prescribe the appropriate medication and track their patient's progress.
        With the software's appointment management feature, doctors can schedule appointments ,send reminder to patients,and keep track of their availability.
      </motion.p>

      <div className='mt-20 about-cards-exterior flex flex-wrap gap-10'>
        {services.map((service, index) => (
          // <ServiceCard key={service.title} index={index} {...service} />
  //         <a key={service.title + index} href={`${service.url}`}>
  //   <ServiceCard index={index} {...service} />
  // </a>
  <div className='about-cards' key={service.title + index}>
    <a href={`${service.url}`}>
      <ServiceCard index={index} {...service} />
    </a>
    {/* <a className='service_feature_button' href={`${service.url}`}>
    <button >click me</button>
    </a> */}
  </div>
        ))}
        {/* <button className='service_button'>Save airship</button>
        <button className='service_button'>Save airship</button>
        <button className='service_button'>Save airship</button>
        <button className='service_button'>Save airship</button> */}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
