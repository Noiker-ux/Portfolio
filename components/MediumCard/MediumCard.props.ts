import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IMediumCard
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	theme: 'dark' | 'light';
}
