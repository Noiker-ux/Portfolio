import Link from 'next/link';
import style from './MediumCard.module.css';
import IMediumCard from './MediumCard.props';
import classNames from 'classnames';

export const MediumCard = ({
	theme = 'light',
	className,
	...props
}: IMediumCard) => {
	return (
		<div
			className={classNames(style.card, {
				[style.dark]: theme === 'dark',
				[style.light]: theme === 'light',
			})}
			{...props}>
			<div className={style.header}>
				<div className={style.header__info}>
					<p className={style.tag}>Education</p>
					<div className={style.yearMonth}>
						<p>2024</p>
						<p>October</p>
					</div>
				</div>
				<p className={style.date}>21</p>
			</div>
			<div className={style.body}>
				<p className={style.title}>Learning the framework Next.js</p>
				<p className={style.anons}>
					What is 'Next.js 14'? What is it for? What problems does it solve?
				</p>
				<div className={style.more}>
					<Link className={style.detail} href={'#'}>
						Read more
					</Link>
					<button title='Share' className={style.plus}></button>
				</div>
			</div>
		</div>
	);
};
