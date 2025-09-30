import type { IChildren } from '../types';
import styles from './Content.module.scss';

const Content = ({ children }: IChildren) => {
	return <div className={styles.content}>{children}</div>;
};

export default Content;
