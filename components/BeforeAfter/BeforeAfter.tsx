'use client';

import { useDispatch, useSelector } from 'react-redux';
import style from './BeforeAfter.module.css';
import { RootState } from '@/store/store';
import { percentAfterBeforeActions } from '@/store/percentAfterBefore.slice/percentAfterBefore';
import classNames from 'classnames';
import { BeforeAfterMenu } from './BeforeAfterMenu/BeforeAfterMenu';
import { AfterMenu, BeforeMenu } from '@/data/BeforeAfterMenu';

export const BeforeAfter = () => {
	const { after, before } = useSelector(
		(RootState: RootState) => RootState.percentAfterBefore,
	);
	const dispatch = useDispatch();

	return (
		<div className={style.wrapper}>
			<div
				className={classNames(style.before, {
					[style.closeBefore]: before === 0,
				})}>
				<div
					className={classNames(style.beforeContent, {
						[style.beforeActive]: before === 100,
					})}>
					<BeforeAfterMenu menuData={BeforeMenu} />
					<button
						className={style.buttonBefore}
						onClick={() => {
							if (before <= 50) {
								dispatch(percentAfterBeforeActions.setPercents(100));
							} else {
								dispatch(percentAfterBeforeActions.setPercents(50));
							}
						}}>
						Front
					</button>
				</div>
			</div>
			<div
				className={classNames(style.after, {
					[style.closeAfter]: after === 0,
				})}>
				<div
					className={classNames(style.afterContent, {
						[style.afterActive]: after === 100,
					})}>
					<button
						className={style.buttonAfter}
						onClick={() => {
							if (before >= 50) {
								dispatch(percentAfterBeforeActions.setPercents(0));
							} else {
								dispatch(percentAfterBeforeActions.setPercents(50));
							}
						}}>
						Back
					</button>
					<BeforeAfterMenu menuData={AfterMenu} />
				</div>
			</div>
		</div>
	);
};
