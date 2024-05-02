'use client';
import Link from 'next/link';
import style from './Header.module.css';
import { IMenuLink, MenuLinks } from './MenuLinks';
import { motion, stagger } from 'framer-motion';
import { variantsMenu, variantsItemMenu } from './animation/Menu.animation';
import { variantsLogo } from './animation/Logo.animation';

export const Header = () => {
	return (
		<header className={style.header}>
			<motion.div variants={variantsLogo} initial='hidden' animate='visible'>
				<Link href={'/'}>Noiker</Link>
			</motion.div>
			<nav className={style.menu}>
				<motion.ul
					variants={variantsMenu}
					initial='hidden'
					animate='visible'
					className={style.menu__list}>
					{MenuLinks.map((MenuItem: IMenuLink) => (
						<motion.li variants={variantsItemMenu} key={MenuItem.link}>
							<Link href={MenuItem.link}>{MenuItem.label}</Link>
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</header>
	);
};
