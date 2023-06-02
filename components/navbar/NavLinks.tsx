'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const NavLinks = (props: any) => {
  return (
    <div>
      <div className={styles.navLinksWrapper}>
        {/* <Link
            className={styles.navItem}
            href=""
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <h2 className={styles.navHeader}>Drink</h2>

            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: '#ffffff' }}
            >
              <path d="M 18 1 C 15.699219 1 13.613281 2.101563 12.3125 4 C 11.3125 3.398438 10.199219 3 9 3 C 5.699219 3 3 5.699219 3 9 C 3 10.800781 3.800781 12.398438 5 13.5 L 5 21 L 24.1875 21 C 24.585938 19.699219 25 17.988281 25 15.6875 C 25 13.789063 23.789063 12.511719 23.1875 11.8125 L 23 11.59375 C 22.800781 11.394531 22.613281 11.3125 22.3125 11.3125 C 22.011719 11.3125 21.792969 11.394531 21.59375 11.59375 C 20.59375 12.492188 19.300781 13 18 13 C 16.398438 13 15 12.300781 14 11 C 13.800781 10.699219 13.488281 10.59375 13.1875 10.59375 C 12.886719 10.59375 12.605469 10.792969 12.40625 11.09375 C 11.707031 12.292969 10.398438 13 9 13 C 6.800781 13 5 11.199219 5 9 C 5 6.800781 6.800781 5 9 5 C 10.101563 5 11.113281 5.386719 11.8125 6.1875 C 12.011719 6.386719 12.386719 6.5 12.6875 6.5 C 12.988281 6.398438 13.304688 6.207031 13.40625 5.90625 C 14.304688 4.105469 16.101563 3 18 3 C 19.800781 3 21.414063 3.90625 22.3125 5.40625 C 22.414063 5.605469 22.707031 5.804688 22.90625 5.90625 C 23.207031 6.007813 23.488281 5.886719 23.6875 5.6875 C 24.386719 5.289063 25.199219 5 26 5 C 27.300781 5 28.386719 5.59375 29.1875 6.59375 C 29.585938 7.09375 30.414063 7.09375 30.8125 6.59375 C 31.613281 5.59375 32.699219 5 34 5 C 36.199219 5 38 6.800781 38 9 C 38 11.199219 36.199219 13 34 13 C 32.699219 13 31.613281 12.40625 30.8125 11.40625 C 30.414063 10.90625 29.585938 10.90625 29.1875 11.40625 C 29.085938 11.507813 29.011719 11.707031 28.8125 11.90625 C 28.113281 12.707031 27 13.988281 27 15.6875 C 27 17.988281 27.3125 19.699219 27.8125 21 L 37 21 L 37 14.1875 C 38.800781 13.085938 40 11.199219 40 9 C 40 5.699219 37.300781 3 34 3 C 32.5 3 31.101563 3.601563 30 4.5 C 28.898438 3.5 27.5 3 26 3 C 25.101563 3 24.207031 3.195313 23.40625 3.59375 C 22.105469 1.992188 20.101563 1 18 1 Z M 41 17 C 40.300781 17 39.601563 17.085938 39 17.1875 L 39 19.1875 C 39.601563 19.085938 40.300781 19 41 19 C 43.398438 19 45 20.601563 45 23 C 45 28.5 42.800781 34.09375 39 35.59375 L 39 37.6875 C 44.199219 36.289063 47 29.5 47 23 C 47 19.5 44.5 17 41 17 Z M 5 23 L 5 42.40625 C 5 46.707031 7.394531 49 11.59375 49 L 30.40625 49 C 34.707031 49 37 46.605469 37 42.40625 L 37 23 L 28.5 23 C 28.800781 23.800781 29 24.398438 29 25 C 29 26.699219 27.699219 28 26 28 C 24.300781 28 23 26.699219 23 25 C 23 24.398438 23.199219 23.800781 23.5 23 Z"></path>
            </svg>
          </Link>

          <Link
            className={styles.navItem}
            href=""
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <h2 className={styles.navHeader}>Eat</h2>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: '#ffffff' }}
            >
              <path d="M 48 26.539063 L 48 22.582031 C 48.632813 22.335938 49.242188 22.019531 49.800781 21.597656 C 50.015625 21.4375 50.15625 21.195313 50.191406 20.929688 C 50.226563 20.664063 50.152344 20.394531 49.988281 20.183594 L 47.980469 17.632813 C 47.78125 11.1875 42.492188 6 36 6 L 14 6 C 7.5 6 2.203125 11.199219 2.019531 17.65625 L 0.1875 20.21875 C -0.128906 20.660156 -0.0351563 21.273438 0.398438 21.601563 C 0.898438 21.972656 1.441406 22.257813 2 22.496094 L 2 26.539063 C 0.800781 27.222656 0 28.492188 0 30 C 0 31.507813 0.800781 32.777344 2 33.460938 L 2 39 C 2 41.757813 4.242188 44 7 44 L 43 44 C 45.757813 44 48 41.757813 48 39 L 48 33.460938 C 49.199219 32.777344 50 31.507813 50 30 C 50 28.492188 49.199219 27.222656 48 26.539063 Z M 17.5 9 C 18.328125 9 19 9.671875 19 10.5 C 19 11.328125 18.328125 12 17.5 12 C 16.671875 12 16 11.328125 16 10.5 C 16 9.671875 16.671875 9 17.5 9 Z M 15.5 13 C 16.328125 13 17 13.671875 17 14.5 C 17 15.328125 16.328125 16 15.5 16 C 14.671875 16 14 15.328125 14 14.5 C 14 13.671875 14.671875 13 15.5 13 Z M 12.5 10 C 13.328125 10 14 10.671875 14 11.5 C 14 12.328125 13.328125 13 12.5 13 C 11.671875 13 11 12.328125 11 11.5 C 11 10.671875 11.671875 10 12.5 10 Z M 4.25 18 L 45.769531 18.019531 L 47.726563 20.542969 C 45.847656 21.492188 43.527344 21.296875 41.800781 20 C 41.480469 19.761719 41.054688 19.734375 40.710938 19.929688 L 39.089844 20.839844 C 37.25 21.929688 35.015625 21.953125 33.191406 20.828125 L 31.589844 19.929688 C 31.300781 19.765625 30.949219 19.757813 30.652344 19.90625 L 27.671875 21.394531 C 26.074219 22.152344 24.109375 22.144531 22.546875 21.40625 L 19.546875 19.90625 C 19.40625 19.835938 19.253906 19.800781 19.101563 19.800781 C 18.929688 19.800781 18.761719 19.84375 18.609375 19.929688 L 16.992188 20.839844 C 15.148438 21.929688 12.910156 21.953125 11.089844 20.828125 L 9.488281 19.929688 C 9.144531 19.734375 8.71875 19.761719 8.398438 20 C 6.660156 21.304688 4.3125 21.496094 2.429688 20.519531 Z M 46 32 L 4 32 C 2.859375 32 2 31.140625 2 30 C 2 28.859375 2.859375 28 4 28 L 46 28 C 47.140625 28 48 28.859375 48 30 C 48 31.140625 47.140625 32 46 32 Z"></path>
            </svg>
          </Link>

          <Link
            className={styles.navItem}
            href=""
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <h2 className={styles.navHeader}>Specials</h2>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: '#fff' }}
            >
              <path d="M 23.59375 1.03125 C 22.125 1.03125 21.097656 2.199219 20.375 3.21875 C 19.707031 4.15625 18.621094 4.1875 16.59375 4.1875 C 15.515625 4.1875 14.132813 4.289063 13.28125 4.90625 C 14.550781 7.035156 16.207031 8.621094 17.71875 9.03125 C 18.519531 9.25 19.164063 9.105469 19.75 8.625 C 20.722656 7.703125 21.800781 6.710938 23.125 6.8125 C 24.066406 6.878906 24.898438 7.457031 25.875 8.6875 C 26.050781 8.902344 26.300781 9.011719 26.59375 9.03125 C 27.113281 9.066406 27.757813 8.757813 28.3125 8.25 C 28.898438 7.726563 29.574219 7.191406 30.28125 6.625 C 31.425781 5.707031 33.457031 4.085938 33.78125 3.3125 C 33.484375 3.132813 33.074219 3 32.5 3 C 31.707031 3 30.9375 3.195313 30.1875 3.375 C 29.546875 3.527344 28.949219 3.65625 28.4375 3.65625 C 27.984375 3.65625 27.652344 3.558594 27.40625 3.3125 C 25.867188 1.710938 24.734375 1.03125 23.59375 1.03125 Z M 34.34375 5.78125 C 33.574219 6.554688 32.589844 7.339844 31.53125 8.1875 C 30.863281 8.722656 30.203125 9.265625 29.65625 9.75 C 28.691406 10.632813 27.515625 11.105469 26.4375 11.03125 C 25.597656 10.972656 24.886719 10.589844 24.34375 9.9375 C 23.578125 8.96875 23.148438 8.796875 22.96875 8.78125 C 22.53125 8.769531 21.738281 9.515625 21.09375 10.125 C 20.289063 10.789063 19.371094 11.125 18.40625 11.125 C 18.003906 11.125 17.609375 11.050781 17.1875 10.9375 C 16.371094 10.714844 15.566406 10.261719 14.78125 9.65625 C 15.765625 10.703125 17.160156 12.5625 17.40625 15.15625 C 19.476563 16.4375 24.285156 18.601563 29.90625 15.4375 C 30.222656 15.257813 30.589844 15 31 14.71875 C 31.03125 14.695313 31.058594 14.679688 31.09375 14.65625 C 30.820313 10.941406 33 8.070313 33.28125 7.71875 L 33.375 7.59375 C 33.714844 7.058594 34.105469 6.425781 34.34375 5.78125 Z M 38.21875 12 C 36.261719 11.910156 34.515625 12.585938 33.09375 13.375 C 33.066406 13.683594 33.078125 13.988281 33.09375 14.3125 C 33.542969 14.496094 33.988281 14.722656 34.4375 14.9375 C 36.53125 15.945313 38.582031 17.324219 40.4375 19 C 40.460938 19.003906 40.476563 19 40.5 19 C 40.746094 19 40.992188 18.902344 41.1875 18.71875 C 41.589844 18.339844 41.597656 17.714844 41.21875 17.3125 C 39.496094 15.492188 37.371094 14.691406 35.28125 14.53125 C 36.929688 13.867188 38.859375 13.683594 41.03125 14.875 C 41.515625 15.140625 42.109375 14.953125 42.375 14.46875 C 42.640625 13.984375 42.453125 13.390625 41.96875 13.125 C 40.632813 12.394531 39.394531 12.054688 38.21875 12 Z M 32.4375 16.15625 C 32.332031 16.226563 32.226563 16.304688 32.125 16.375 C 31.664063 16.691406 31.269531 16.949219 30.90625 17.15625 C 28.445313 18.542969 26.097656 19.0625 24 19.0625 C 20.359375 19.0625 17.46875 17.574219 16.03125 16.65625 C 9.6875 19.375 4 27.308594 4 34.09375 C 4 45 11.070313 47 25 47 C 38.929688 47 46 45 46 34.09375 C 46 26.015625 39.257813 18.878906 32.4375 16.15625 Z M 23.5 22 L 25.3125 22 L 25.3125 24.09375 C 27.914063 24.59375 28.8125 26.40625 29.3125 28.40625 L 27.5 28.40625 C 27.199219 27.007813 26.304688 25.8125 24.40625 25.8125 C 21.707031 25.8125 21.40625 27.605469 21.40625 28.40625 C 21.40625 30.304688 23.195313 30.6875 25.09375 31.1875 C 27.492188 31.789063 29.90625 32.59375 29.90625 35.59375 C 29.90625 39.195313 26.710938 40.210938 25.3125 40.3125 L 25.3125 42 L 23.5 42 L 23.5 40.3125 C 22 40.011719 19.300781 39.085938 19 35.1875 L 20.8125 35.1875 C 20.8125 36.386719 21.605469 38.59375 24.40625 38.59375 C 27.105469 38.59375 27.8125 37.3125 27.8125 35.8125 C 27.8125 31.414063 19.40625 34.394531 19.40625 28.59375 C 19.40625 25.394531 22 24.199219 23.5 24 Z"></path>
            </svg>
          </Link>

          <Link
            className={styles.navItem}
            href=""
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <h2 className={styles.navHeader}>Donation</h2>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: '#fff' }}
            >
              <path d="M 25 5 C 14.351563 5 5.632813 13.378906 5.054688 23.890625 C 5.007813 24.609375 5.347656 25.296875 5.949219 25.695313 C 6.550781 26.089844 7.320313 26.132813 7.960938 25.804688 C 8.601563 25.476563 9.019531 24.828125 9.046875 24.109375 C 9.511719 15.675781 16.441406 9 25 9 C 29.585938 9 33.699219 10.925781 36.609375 14 L 34 14 C 33.277344 13.988281 32.609375 14.367188 32.246094 14.992188 C 31.878906 15.613281 31.878906 16.386719 32.246094 17.007813 C 32.609375 17.632813 33.277344 18.011719 34 18 L 40.261719 18 C 40.488281 18.039063 40.71875 18.039063 40.949219 18 L 44 18 L 44 8 C 44.007813 7.460938 43.796875 6.941406 43.414063 6.558594 C 43.03125 6.175781 42.511719 5.964844 41.96875 5.972656 C 40.867188 5.988281 39.984375 6.894531 40 8 L 40 11.777344 C 36.332031 7.621094 30.964844 5 25 5 Z M 43.03125 23.972656 C 41.925781 23.925781 40.996094 24.785156 40.953125 25.890625 C 40.488281 34.324219 33.558594 41 25 41 C 20.414063 41 16.304688 39.074219 13.390625 36 L 16 36 C 16.722656 36.011719 17.390625 35.632813 17.753906 35.007813 C 18.121094 34.386719 18.121094 33.613281 17.753906 32.992188 C 17.390625 32.367188 16.722656 31.988281 16 32 L 9.71875 32 C 9.507813 31.96875 9.296875 31.96875 9.085938 32 L 6 32 L 6 42 C 5.988281 42.722656 6.367188 43.390625 6.992188 43.753906 C 7.613281 44.121094 8.386719 44.121094 9.007813 43.753906 C 9.632813 43.390625 10.011719 42.722656 10 42 L 10 38.222656 C 13.667969 42.378906 19.035156 45 25 45 C 35.648438 45 44.367188 36.621094 44.945313 26.109375 C 44.984375 25.570313 44.800781 25.039063 44.441406 24.636719 C 44.078125 24.234375 43.570313 23.996094 43.03125 23.972656 Z"></path>
            </svg>
          </Link>

          <Link
            className={styles.navItem}
            href=""
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <h2 className={styles.navHeader}>Apply</h2>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              style={{ fill: '#fff' }}
            >
              <path d="M 6 2 C 4.9045455 2 4 2.9045455 4 4 L 4 20 C 4 21.095455 4.9045455 22 6 22 L 18 22 C 19.095455 22 20 21.095455 20 20 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6 2 z M 6 4 L 18 4 L 18 20 L 6 20 L 6 4 z M 8 6 L 8 8 L 12 8 L 12 6 L 8 6 z M 14 6 L 14 8 L 16 8 L 16 6 L 14 6 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 15.970703 L 8 17.970703 L 16 17.970703 L 16 15.970703 L 8 15.970703 z"></path>
            </svg>
          </Link> */}
      </div>
    </div>
  )
}

export default NavLinks
