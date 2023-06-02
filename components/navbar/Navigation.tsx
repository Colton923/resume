import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navbar.module.scss'
import logo from '/public/webdevsolutionsIcon.png'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Image src={logo} alt="logo" width={511} height={488} className={styles.brandImage} />
      </Link>
      <NavLinks />
    </nav>
  )
}

export default Navigation
