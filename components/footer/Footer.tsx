import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <div className={styles.inline}>
            <span>
              <Link
                style={{ fontSize: '0.5rem' }}
                className={styles.link}
                href="c.mcclin@webdevsolutionsllc.com"
              >
                c.mcclin@webdevsolutionsllc.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
