import style from './MediumCard.module.css';

export const MediumCard = () => {
	return (
		<div className={style.card}>
			<div className={style.header}>
				<div>
					<p>Education</p>
					<div className={style.date}>
						<p>2024</p>
						<p>October</p>
					</div>
				</div>
				<p className={style.dateNumber}>21</p>
			</div>
		</div>
	);
};
