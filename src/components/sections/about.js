import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import WhatIDo from './whatIDo'; // 🔹 Import What I Do section

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Express.js',
    'Node.js',
    'MongoDB',
    'MySQL',
    'AWS',
    'Docker',
    'Redis',
    'Tailwind',
    'Tensorflow',
  ];

  return (
    <>
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                Hey there! I'm Aditya Sharma, a developer who loves turning caffeine into code and
                bugs into features. My interest in development started back during covid 2020. While
                the world was adapting to challenges, I was diving deep into the world of code,
                debugging both my logic and my future.
              </p>

              <p>
                In 2022, I had the incredible opportunity to work with Microsoft as an Engage
                Mentee, where we were given multiple pathways among which we had to build an
                application solving a problem for the mass. Back then, my focus was on learning and
                pushing my limits as a budding developer.
              </p>

              <p>
                Fast forward to today, I’ve built high-performance platforms, including an Online
                Judge system that handles 10,000+ daily submissions and a faculty allocation system
                that automates scheduling for 500+ faculty members, significantly reducing manual
                effort by 95%.
              </p>

              <p>
                Recently, I completed a course on AWS Cloud Solutions, reinforcing my ability to
                architect scalable, cloud-first applications. I thrive on transforming complex
                challenges into seamless, high-impact solutions.
              </p>

              <p>Here are a few technologies I’ve been working with recently:</p>
            </div>

            <ul className="skills-list">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/me.jpg"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>

      {/* 🔹 Add What I Do Section Below */}
      <WhatIDo />
    </>
  );
};

export default About;
