// utils/useClickOutside.ts
import { useEffect, type RefObject } from 'react';

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;

			// Если клик внутри рефа — выходим
			if (ref.current?.contains(target)) return;

			// Если клик по кнопкам управления — тоже выходим
			const isControlClick = (target as Element).closest(
				'[data-role="save-btn"], [data-role="edit-btn"], [data-role="delete-btn"]'
			);

			if (isControlClick) return;
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, callback]);
};
