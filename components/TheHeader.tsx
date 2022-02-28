import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import faviconDark from '@/public/favicon-dark.ico'

function makeHeaderTransparent() {
  const headerBlurBackdrop = document.querySelector('.header-backdrop-blur')
  if (!headerBlurBackdrop) return
  window.scrollY > window.innerHeight - 30
    ? headerBlurBackdrop.classList.add('opaque')
    : headerBlurBackdrop.classList.remove('opaque')
}

function checkAndCloseHamburgerMenu(e: MouseEvent) {
  const menuWasClicked = (e.target as HTMLElement).matches(
    `.nav__menu, .nav__list, .nav__item, .nav__link,
    .nav__toggle, .nav__toggle svg, .nav__toggle svg path`
  )
  if (menuWasClicked) return
  document.getElementById('nav-menu')?.classList.toggle('show', false)
}

export default function TheHeader() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [currentPath] = useState(router.asPath)

  useEffect(() => {
    window.addEventListener('scroll', makeHeaderTransparent)
    window.addEventListener('click', checkAndCloseHamburgerMenu)
    return () => {
      window.removeEventListener('scroll', makeHeaderTransparent)
      window.removeEventListener('click', checkAndCloseHamburgerMenu)
    }
  }, [])

  return (
    <header className="l-header">
      <div className="header-backdrop-blur absolute w-full h-[var(--header-height)] pointer-events-none -z-10" />
      <nav className="nav bd-grid">
        <div className="flex items-center">
          <div className="mie-3 w-9 h-9">
            <Image src={faviconDark} alt="Ryan Norooz logo" />
          </div>
          <a href="#" className="nav__logo font-extrablack">
            {t('header.logoText')}
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                {t('header.nav.home')}
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                {t('header.nav.about')}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                {t('header.nav.skills')}
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                {t('header.nav.portfolio')}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                {t('header.nav.contact')}
              </a>
            </li>

            <li className="nav__item">
              <Link
                passHref
                href={currentPath}
                locale={router.locale === 'en' ? 'fa' : 'en'}
              >
                <div className="flex items-center gap-1 font-bold cursor-pointer">
                  <Icon icon="bx:bx-globe" />
                  {router.locale === 'en' ? 'فا' : 'EN'}
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() =>
            document.getElementById('nav-menu')?.classList.toggle('show')
          }
        >
          <Icon icon="bx:bx-menu" />
        </div>
      </nav>
    </header>
  )
}
