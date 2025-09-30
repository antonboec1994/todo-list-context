import { useEffect, useState } from 'react';
import styles from './FIlterBtn.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

type FilterBtnPropsType = {
	children: React.ReactNode;
	value: string;
};

const FilterBtn = ({ children, value }: FilterBtnPropsType) => {
	const [activeBtn, setActiveBtn] = useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setActiveBtn(location.pathname === `/${value}`);
	}, [value, location]);

	const onChangeFilter = (value: string) => {
		navigate(`/${value}`);
	};

	return (
		<>
			<button
				className={`${styles.btn} ${activeBtn ? styles.active : ''}`}
				onClick={() => onChangeFilter(value)}
			>
				{children}
			</button>
		</>
	);
};

export default FilterBtn;
