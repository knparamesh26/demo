import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router';
import pokemon from '../../assets/images/pokemon.png'


const Home = () => (
	<div class='container text-center' style='background-color: aqua'>
		<Link class='text-decoration-none' href='/pokemon' >
			<img class='w-50 p-5' src={pokemon} alt='Pokemon'/>

			<h2>View all character</h2>
		</Link>
	</div>
);

export default Home;