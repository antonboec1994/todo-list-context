import styles from './TodoFilters.module.scss';
import FilterBtn from './FilterBtn/FilterBtn';

const TodoFilters = () => {
	return (
		<div className={styles.wrapper}>
			<FilterBtn value=''>Все</FilterBtn>
			<FilterBtn value='active'>Активные</FilterBtn>
			<FilterBtn value='ready'>Выполненные</FilterBtn>
		</div>
	);
};

export default TodoFilters;
