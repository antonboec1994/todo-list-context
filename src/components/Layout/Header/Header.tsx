import type { IChildren } from '../types';
import styles from './Header.module.scss';

const Header = ({ children }: IChildren) => {
	return <header className={styles.header}>{children}</header>;
};

export default Header;
