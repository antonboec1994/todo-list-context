import styles from './Layout.module.scss';
import type { IChildren } from './types';

const Layout = ({ children }: IChildren) => {
	return <div className={styles.layout}>{children}</div>;
};

export default Layout;
