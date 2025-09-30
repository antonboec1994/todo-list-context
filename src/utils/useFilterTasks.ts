import { useMemo } from 'react';
import type { TodoType } from '../components/Todos/types';

export const useFilterTasks = (todos: TodoType[], filter: string) => {
	return useMemo(() => {
		if (filter === 'active') {
			return todos.filter((item: TodoType) => item.isActive);
		} else if (filter === 'ready') {
			return todos.filter((item: TodoType) => !item.isActive);
		} else {
			return todos;
		}
	}, [todos, filter]);
};
