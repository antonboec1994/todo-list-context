import { DeleteFilled } from '@ant-design/icons';
import type { TodoType } from '../types';
import styles from './TodoItem.module.scss';
import Checkbox, { type CheckboxProps } from 'antd/es/checkbox/Checkbox';
import { useContext, useRef, useState } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { useClickOutside } from '../../../utils/useClickOutside';

type TodoItemPropsType = {
	item: TodoType;
};

const TodoItem = ({ item }: TodoItemPropsType) => {
	const { setTodos } = useContext(TodoContext);
	const [flag, setFlag] = useState<boolean>(false);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const editRef = useRef<any>(null);

	const changeTaskStatus: CheckboxProps['onChange'] = e => {
		setFlag(e.target.checked);
		setTodos(prev =>
			prev.map(todo =>
				todo.id === item.id ? { ...todo, isActive: flag } : todo
			)
		);
	};

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const editTask = () => {
		setIsEdit(prev => !prev);
		setMessage(item.name);
	};

	const saveTask = () => {
		setIsEdit(prev => !prev);
		console.log(message);
		setTodos(prev =>
			prev.map(todo =>
				todo.id === item.id ? { ...todo, name: message } : todo
			)
		);
	};

	const deleteTask = () => {
		const isConfirm = window.confirm(
			`Вы уверены, что хотите удалить №${item.id} задачу`
		);
		if (isConfirm) {
			setTodos(prev => prev.filter(todo => todo.id !== item.id));
			alert('Задача успешно удалена');
		}
	};

	useClickOutside(editRef, () => {
		if (isEdit) setIsEdit(false);
	});

	return (
		<div className={`${styles.todoItem} ${!item?.isActive && styles.ready}`}>
			<div className={styles.label}>
				Задача № <span>{item.id}</span>
			</div>
			{!isEdit ? (
				<div className={styles.name}>{item.name}</div>
			) : (
				<div className={styles.name}>
					<textarea
						className={styles.textarea}
						value={message}
						onChange={handleMessageChange}
						ref={editRef}
					/>
				</div>
			)}
			<div className={styles.buttons}>
				{item?.isActive ? (
					<Checkbox className={styles.checkbox} onChange={changeTaskStatus}>
						Задача выполнена
					</Checkbox>
				) : (
					<div className={styles.taskReady}>Задача уже выполнена</div>
				)}
				{item?.isActive && (
					<>
						{!isEdit ? (
							<button
								className={styles.editBtn}
								data-role='edit-btn'
								onClick={editTask}
							>
								Редактировать
							</button>
						) : (
							<button
								className={styles.saveBtn}
								data-role='save-btn'
								onClick={saveTask}
							>
								Сохранить
							</button>
						)}
					</>
				)}
				<DeleteFilled
					className={styles.deleteBtn}
					data-role='delete-btn'
					onClick={deleteTask}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
