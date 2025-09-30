import { useContext } from 'react';
import styles from './TodosCounter.module.scss';
import { TodoContext } from '../../../context/TodoContext';
import type { TodoType } from '../types';

const TodosCounter = () => {
	const { todos } = useContext(TodoContext);

	const activeTasks = todos.filter((item: TodoType) => item.isActive);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.text}>
				{activeTasks.length > 0
					? 'Осталось активных задач:'
					: 'Активных задач нет'}
			</h2>
			<span className={styles.count}>
				{activeTasks.length > 0 && activeTasks?.length}
			</span>
		</div>
	);
};

export default TodosCounter;
