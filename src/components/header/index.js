import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router';

const Header = () => (
	<header class={style.header}>
		<h1><Link href='/'>Pokemon App</Link></h1>
	</header>
);

export default Header;
