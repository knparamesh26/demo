import { h } from 'preact';
import { Link } from 'preact-router';

const Header = () => (
	<header class='m-0 fs-1 text-center' style='background-color: #9f23c3a8'>
		<Link class='text-light text-decoration-none' href='/'>Pokemon App</Link>
	</header>
);

export default Header;
