import { Icon } from '@iconify/react'
// import { useTranslation } from 'next-i18next'

export default function TheFooter() {
  // const { t } = useTranslation('common')

  return (
    <footer className="footer section">
      <div className="pb-10 footer__container bd-grid">
        <div className="footer__data">
          {/* <h2 className="footer__title">{t('footer.title')}</h2> */}
          {/* <p className="footer__text">{t('footer.subtitle')}</p> */}
        </div>

        <div className="footer__data">
          {/* <h2 className="footer__title">{t('footer.nav.navTitle')}</h2> */}
          <ul>
            <li>
              <a href="#home" className="footer__link">
                {/* {t('footer.nav.home')} */}
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                {/* {t('footer.nav.about')} */}
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                {/* {t('footer.nav.skills')} */}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                {/* {t('footer.nav.portfolio')} */}
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                {/* {t('footer.nav.contact')} */}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__data">
          {/* <h2 className="footer__title">{t('footer.social.socialTitle')}</h2> */}

          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/RyanNorooz"
              // title={t('footer.social.github')}
              className="footer__social"
            >
              <Icon icon="bx:bxl-github" />
              {/* {t('footer.social.github')} */}
            </a>

            <a
              href="https://t.me/RyanNorooz"
              // title={t('footer.social.telegram')}
              className="footer__social"
            >
              <Icon icon="bx:bxl-telegram" />
              {/* {t('footer.social.telegram')} */}
            </a>

            <a
              href="https://discord.com/users/701974919864385577"
              // title={t('footer.social.discord')}
              className="footer__social"
            >
              <Icon icon="bx:bxl-discord-alt" />
              {/* {t('footer.social.discord')} */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
