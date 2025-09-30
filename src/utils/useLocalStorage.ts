import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: []) => {
	const [value, setValue] = useState(() => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
