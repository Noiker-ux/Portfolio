import { percentAfterBeforeActions } from '@/store/percentAfterBefore.slice/percentAfterBefore';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import style from './BeforeAfterRange.module.css';

export const BeforeAfterRange = () => {
	const Range = useSelector(
		(RootState: RootState) => RootState.percentAfterBefore.before,
	);
	const dispatch = useDispatch();

	return (
		<input
			className={style.range}
			onChange={(event) =>
				dispatch(
					percentAfterBeforeActions.setPercents(Number(event.target.value)),
				)
			}
			value={Range}
			type='range'
			title='range'
			max={100}
			min={0}
			step={1}
		/>
	);
};
