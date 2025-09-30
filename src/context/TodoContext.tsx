/* eslint-disable react-refresh/only-export-components */
import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { IChildren } from '../components/Layout/types';
import type { TodoType } from '../components/Todos/types';
import { useLocalStorage } from '../utils/useLocalStorage';

interface ITodoContext {
	todos: TodoType[];
	setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<ITodoContext>({
	todos: [],
	setTodos: () => {},
});

export const TodoContextProvider = ({ children }: IChildren) => {
	const [todos, setTodos] = useLocalStorage('todos', []);

	return (
		<TodoContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoContext.Provider>
	);
};
