import { NewsList } from '@/components/NewsList/NewsList';
import style from './page.module.css';
import { BeforeAfter } from '@/components/BeforeAfter/BeforeAfter';

export default function MainPage({}) {
	return (
		<div className={style.blog}>
			<NewsList />
		</div>
	);
}
