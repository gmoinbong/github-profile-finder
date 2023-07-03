import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg'
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg'

import styles from './ThemeSwitcher.module.scss';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps { }

export const ThemeSwitcher = ({ }: ThemeSwitcherProps) => {
  const [isDarkTheme, setisDarkTheme] = useState(false)
  const themeText = isDarkTheme ? 'light' : 'dark'
  const ThemeIcon = isDarkTheme ? SunIcon : MoonIcon

  const handleClick = () => {
    setisDarkTheme(!isDarkTheme)
  }
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  return (
    <div className={styles.switcher} onClick={handleClick} >
      <span className={styles.themeText}>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
}

