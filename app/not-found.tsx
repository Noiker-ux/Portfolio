import style from './not-found.module.css';

export default function Error() {
	return (
		<div className={style.bg}>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
		</div>
	);
}
