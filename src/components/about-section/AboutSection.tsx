import { FC } from 'react'

import css from './style.module.scss'

const AboutSection: FC = () => {
  return (
    <section id='about' className={css.aboutSection}>
      <div className={css.container}>
        <h2 className={css.title}>/about</h2>

        <p className={css.description}>
          My name is Carlos Henrique Motta, and I&apos;m a Front-end Developer/UX from Brazil (🇧🇷).
          I&apos;ve been working with web development since 2017.
        </p>

        <p className={css.description}>
          Experience-wise, I&apos;ve worked at <a href='https://www.solidaridadnetwork.org/' className={css.link}>Solidaridad Network</a>, 
          using technology to create a positive impact in people&apos;s lives through digital inclusion.
        </p>

        <p className={css.description}>
          I&apos;ve also worked as a Front-end / UI Developer at <a href='https://www.emplifi.io/' className={css.link}>Emplifi</a>,
          developing and maintaining UI components, collaborating with product development teams across all product sections, and 
          working closely with the UI/UX design team.
        </p>

        <p className={css.description}>
          Currently, at <a href='https://www.reply.com/en' className={css.link}>Reply</a>, I work on the Axulus platform, utilizing Angular, Jest, Karma, 
          and Jasmine to build and enhance robust user interfaces. Additionally, I contribute to AI-driven solutions for detecting ULDs and Trains, improving 
          the efficiency of airport transport unit management.
        </p>

        <p className={css.description}>
          I aim to help develop a better world by using technology as a tool for empowerment, helping people see it as a transformative force in their lives.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
