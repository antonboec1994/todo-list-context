import { useContext } from 'react';
import styles from './TodoForm.module.scss';
import { TodoContext } from '../../../context/TodoContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ITodoFormInputs {
	name: string;
}

const TodoForm = () => {
	const { todos, setTodos } = useContext(TodoContext);
	const navigate = useNavigate();
	const {
		register,
		formState: { isSubmitting },
		handleSubmit,
		reset,
	} = useForm<ITodoFormInputs>({
		mode: 'onSubmit',
	});

	const onSubmit = async (data: ITodoFormInputs) => {
		const maxId =
			todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
		const newTast = {
			id: maxId + 1,
			name: data.name,
			isActive: true,
		};
		setTodos([...todos, newTast]);
		reset();
		navigate('/');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				className={styles.input}
				placeholder='Введите название задачи'
				{...register('name')}
				disabled={isSubmitting}
				required
			/>
			<button className={styles.btn} type='submit' disabled={isSubmitting}>
				{isSubmitting ? 'Сохраняем...' : 'Добавить'}
			</button>
		</form>
	);
};

export default TodoForm;
