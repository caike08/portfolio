import css from './style.module.scss'

const AboutSection = () => {
  return (
    <section id='about' className={css.aboutSection}>
      <div className={css.container}>
        <h2 className={css.title}>/about</h2>

        <p className={css.description}>
          My name is Carlos Henrique Motta, and I&apos;m a Senior Software Developer/UX from Brazil (🇧🇷).
          I&apos;ve been working with web development since 2017.
        </p>

        <p className={css.description}>
          I began my career with front-end internships at{' '}
          <a href='https://en.totvs.com/' className={css.link}>TOTVS</a>,{' '}
          <a href='https://www.b2ml.com.br/' className={css.link}>B2ML Sistemas</a> and <a href='https://www.amagafa.com.br/' className={css.link}>Amagafa TECH</a>,{' '}
          before joining <a href='https://www.solidaridadnetwork.org/' className={css.link}>Solidaridad Network</a> as my first
          full-time front-end role — using technology to create a positive impact in people&apos;s lives through digital
          inclusion, building mobile/hybrid apps that supported farmers and field extension officers on a global scale.
        </p>

        <p className={css.description}>
          At <a href='https://www.emplifi.io/' className={css.link}>Emplifi</a> (formerly Socialbakers), I developed and maintained
          UI components, managed a custom CSS UI library published as an npm package, and contributed to the Soul Design
          System — an initiative that unified the company&apos;s visual standards across its products.
        </p>

        <p className={css.description}>
          At <a href='https://www.reply.com/en' className={css.link}>Reply</a>, I worked on the <a href='https://www.reply.com/en/iot/axulus' className={css.link}>Axulus</a> platform
          and airport solutions for clients such as Fraport and Munich Airport, with Angular 15+, Tailwind CSS and PrimeNG —
          including an AI-based solution for detecting ULDs and trains.
        </p>

        <p className={css.description}>
          Currently, at <a href='https://www.zup.com.br/' className={css.link}>Zup Innovation</a>, I work as a Senior Angular Developer
          on a large digital transformation project for Itaú, building robust interfaces with Angular, AI-augmented spec-driven
          development workflows and Playwright end-to-end tests.
        </p>

        <p className={css.description}>
          My goal is to use technology as a tool for empowerment, helping people see it as a transformative force in their lives.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
