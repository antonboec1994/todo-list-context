import { useContext } from 'react';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { TodoContext } from '../../../context/TodoContext';
import { useFilterTasks } from '../../../utils/useFilterTasks';
import { useLocation } from 'react-router-dom';

const TodoList = () => {
	const { todos } = useContext(TodoContext);
	const { pathname } = useLocation();

	const filter = pathname.replace('/', '');
	const filteredTasks = useFilterTasks(todos, filter);

	if (todos.length === 0)
		return <h2 className={styles.title}>Список задач пуст</h2>;

	return (
		<div className={styles.wrapper}>
			<div className={styles.head}>
				<h2 className={styles.title}>Список задач</h2>
				<TodoFilters />
			</div>
			<div className={styles.list}>
				{filteredTasks.length > 0
					? filteredTasks?.map(item => <TodoItem item={item} key={item.id} />)
					: 'Список задач пустой'}
			</div>
		</div>
	);
};

export default TodoList;
