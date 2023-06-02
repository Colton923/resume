import React from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/webdevsolutionsIcon.png'

const MobileNavigation = () => {
  return (
    <div className={styles.mobileNavigationWrapper}>
      <div className={styles.mobileNavigation}>
        <Link href="/">
          <Image
            src={logo}
            width={511}
            height={488}
            className={styles.brandImage}
            alt="webdev solutions llc"
          />
        </Link>
      </div>
    </div>
  )
}

export default MobileNavigation
