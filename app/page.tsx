import { NewsList } from '@/components/NewsList/NewsList';
import style from './page.module.css';

export default function MainPage({}) {
	return (
		<div className={style.blog}>
			<NewsList />
		</div>
	);
}
