import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ISmallCard
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	theme: 'dark' | 'light';
	type: 'row' | 'column';
	topRow: boolean;
}
