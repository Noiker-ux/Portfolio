import IBeforeAfterMenuItem from '@/data/BeforeAfterMenu';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IBeforeAfterMenuProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	menuData: IBeforeAfterMenuItem[];
}
