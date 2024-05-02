'use client';
import { motion } from 'framer-motion';
import { MediumCard } from '../MediumCard/MediumCard';
import { SmallCard } from '../SmallCard/SmallCard';
import { variantsList, variantsItem } from './animation/NewsList.anim';
import style from './NewsList.module.css';

export const NewsList = () => {
	return (
		<motion.div
			variants={variantsList}
			initial='hidden'
			animate='visible'
			className={style.NewsList}>
			<motion.div variants={variantsItem}>
				<MediumCard theme='light' />
			</motion.div>
			<motion.div variants={variantsItem}>
				<MediumCard theme='light' />
			</motion.div>
			<motion.div variants={variantsItem}>
				<MediumCard theme='dark' />
			</motion.div>
			<motion.div variants={variantsItem}>
				<SmallCard theme='dark' type='row' topRow={false} />
			</motion.div>
			<motion.div variants={variantsItem}>
				<SmallCard theme='light' type='column' topRow={false} />
			</motion.div>
			<motion.div variants={variantsItem}>
				<SmallCard theme='dark' type='column' topRow={false} />
			</motion.div>
			<motion.div variants={variantsItem}>
				<SmallCard theme='dark' type='column' topRow={true} />
			</motion.div>
		</motion.div>
	);
};
