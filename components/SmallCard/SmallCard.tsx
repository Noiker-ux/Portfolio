import style from './SmallCard.module.css';
import ISmallCard from './SmallCard.props';
import classNames from 'classnames';
import More from './MORE.svg';

export const SmallCard = ({
	type = 'column',
	theme = 'light',
	topRow = false,
	className,
	...props
}: ISmallCard) => {
	return (
		<div
			className={classNames(style.smallCard, className, {
				[style.themeDark]: theme === 'dark',
				[style.themeLight]: theme === 'light',
				[style.row]: type === 'row',
				[style.column]: type === 'column',
			})}
			{...props}>
			<div
				className={classNames(style.header, {
					[style.swap]: type === 'row',
				})}>
				<p className={style.date}>12 SEPTEMBER 24</p>
				<More />
			</div>
			{topRow && type === 'column' && <hr className={style.line} />}
			<p className={style.title}>
				A SELECTION OF INTERESTING APIS FOR YOUR EDUCATIONAL PROJECTS
			</p>
		</div>
	);
};
