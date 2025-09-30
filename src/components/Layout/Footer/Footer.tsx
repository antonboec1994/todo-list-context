import type { IChildren } from '../types';
import styles from './Footer.module.scss';

const Footer = ({ children }: IChildren) => {
	return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
