'use client';

import { useSelector } from 'react-redux';
import style from './BeforeAfter.module.css';
import { BeforeAfterRange } from './BeforeAfterRange/BeforeAfterRange';
import { RootState } from '@/store/store';
import { BeforeAfterMenu } from './BeforeAfterMenu/BeforeAfterMenu';

export const BeforeAfter = () => {
	const { after, before } = useSelector(
		(RootState: RootState) => RootState.percentAfterBefore,
	);

	return (
		<>
			<div className={style.wrapper}>
				<div
					className={style.before}
					style={{
						background: `linear-gradient(to left, #21202000 ${after}%, #212020 ${after}%)`,
					}}>
					<div className={style.beforeContent}>
						<BeforeAfterMenu />
					</div>
				</div>
				<div
					className={style.after}
					style={{
						background: `linear-gradient(to right, #f0f0f000 ${before}%, #f0f0f0 ${before}%)`,
					}}>
					<div className={style.afterContent}>Back</div>
				</div>
			</div>
			<BeforeAfterRange />
		</>
	);
};
