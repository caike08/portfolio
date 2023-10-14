import css from './style.module.scss'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <small className={css.copyright}>
          © {year}
          <a
            className={css.link}
            href='https://caike08.github.io/cv.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Carlos Henrique Motta
          </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
