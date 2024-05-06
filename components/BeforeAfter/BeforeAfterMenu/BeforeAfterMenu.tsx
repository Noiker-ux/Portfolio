import Link from 'next/link';
import style from './BeforeAfterMenu.module.css';
import IBeforeAfterMenuProps from './BeforeAfterMenu.props';
import classNames from 'classnames';
import IBeforeAfterMenuItem from '@/data/BeforeAfterMenu';

export const BeforeAfterMenu = ({
	menuData,
	className,
	...props
}: IBeforeAfterMenuProps) => {
	return (
		<ul className={classNames(style.menu, className)} {...props}>
			{menuData.map((menuItem: IBeforeAfterMenuItem) => (
				<li>
					<Link className={style.link} href={menuItem.link}>
						{menuItem.label}
					</Link>
				</li>
			))}
		</ul>
	);
};
