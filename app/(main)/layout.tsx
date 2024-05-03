import { BeforeAfter } from '@/components/BeforeAfter/BeforeAfter';
import { Header } from '@/components/Header/Header';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<BeforeAfter />
			<div className={'container'}>
				<Header />
				{children}
			</div>
		</>
	);
}
