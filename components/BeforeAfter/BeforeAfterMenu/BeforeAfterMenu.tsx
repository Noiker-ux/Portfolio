import Link from 'next/link';
import style from './BeforeAfterMenu.module.css';

export const BeforeAfterMenu = () => {
	return (
		<div className={style.menu}>
			<ul>
				<li>
					<Link className={style.link} href={'#'}>
						About
					</Link>
				</li>
				<li>
					<Link className={style.link} href={'#'}>
						Stack
					</Link>
				</li>
				<li>
					<Link className={style.link} href={'#'}>
						Projects
					</Link>
				</li>
			</ul>
		</div>
	);
};
