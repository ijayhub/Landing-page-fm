import React from 'react'
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../public/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
		<div className={styles.div}>
			<nav className={styles.navbar}>
				<header className={styles.header}>
					<Image src={logo} alt='logo' width={70} height={50} />
				</header>
				<div>
					<Link href='#features'>
						<a className={styles.links}>Features</a>
					</Link>
					<Link href='#team'>
						<a className={styles.links}>Team</a>
					</Link>
					<Link href='#testimonials'>
						<a className={styles.links}>Testimonials</a>
					</Link>
					<Link href='#Sign In'>
						<a className={styles.links }> Sign In</a>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar
