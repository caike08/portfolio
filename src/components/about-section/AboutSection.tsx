import { FC } from 'react'

import css from './style.module.scss'

const AboutSection: FC = () => {
  return (
    <section id='about' className={css.aboutSection}>
      <div className={css.container}>
        <h2 className={css.title}>/about</h2>

        <p className={css.description}>
          My name is Carlos Henrique Motta, and I&apos;m a Full-stack Developer/UX from Brazil (🇧🇷).
          I&apos;ve been working with web development since 2017.
        </p>

        <p className={css.description}>
          Experience-wise, I&apos;ve worked at <a href='https://www.solidaridadnetwork.org/' className={css.link}>Solidaridad Network</a>, 
          using technology to create a positive impact in people&apos;s lives, through technological inclusion.
        </p>

        <p className={css.description}>
          I&apos;ve also worked as a Front-end / UI Developer at <a href='https://www.emplifi.io/' className={css.link}>Emplifi</a>,
          creating new and maintaining existing UI components, cooperating with product development feature teams,
          coding across all product sections, and working closely with UI/UX design team.
        </p>

        <p className={css.description}>
          I aim to help develop a better world by using technology as a key to empowering people and help them to see technology as a life changer.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
