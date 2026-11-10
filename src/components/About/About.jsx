import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/work_logo/profile_new.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[6vw] md:px-[7vw] lg:px-[12vw] xl:px-[18vw] font-sans mt-10 sm:mt-16 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am 
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Muhammad Safi
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I developed my web development skills at Nextech Academy, where I gained practical experience by working on real-world websites and business projects. The hands-on learning approach helped me strengthen my development skills and build the confidence to create professional digital products.

          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1hmRQ15kmgrorHNMrM4CiaVK0zUWSBmhy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-2 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] max-w-full border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Muhammad Safi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
