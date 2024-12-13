import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import srinidhiSmall from '../assets/srinidhi-small.webp';
import srinidhiMedium from '../assets/srinidhi-medium.webp';
import srinidhiLarge from '../assets/srinidhi-large.webp';
import srinidhiDefault from '../assets/srinidhi.webp';

import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Intro = ({ theme }: { theme: string }) => {
  return (
    <div className="w-4/5 container mx-auto pt-24 pb-10 px-6">
      {/* Top Section */}
      <div
        id="home"
        className={`flex flex-col md:flex-row items-center gap-12 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        {/* Left section: Text content */}
        <div className="md:flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-tight">Hi, I'm Prajwal M Hiremath</h1>
          <p className="text-xl font-medium mb-4">
            Software Engineer | Bachelours in Computer science
          </p>
          <p className="mt-4 text-md leading-relaxed">
          I specialize in building scalable data pipelines using a variety of tools and technologies that align with my experience. 
          However, I am always open to learning and adopting new technologies.
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="mailto:prajwalmh01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+919731485690"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaPhoneAlt />
            </a>
            <a
              href="https://github.com/Prajwal6111"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prajwal-m-hiremath/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1x2YMWLG9Qp3sIBJliHlSG_ELRdRHn944/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <LazyLoadImage
            src={srinidhiDefault}
            srcSet={`${srinidhiSmall} 480w, ${srinidhiMedium} 1024w, ${srinidhiLarge} 1600w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1600px"
            alt="Prajwal Hiremath"
            effect="blur"
            className="w-64 h-64 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className={`mt-20 text-center md:text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate Data Engineer with a strong foundation in building modern Data Pipelines.
          I am skilled in using Python, SQL, and other on prem tools like dbt, Snowflake, Apache Airflow and cloud(AWS).
          Including knowledge on Dimensional modelling, Documentation and Debugging.
        </p>
      </div>
    </div>
  );
};

export default Intro;
