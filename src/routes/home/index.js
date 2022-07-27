import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router';
import pokemon from '../../assets/images/pokemon.jpeg'


const Home = () => (
	<div class='container'>
		<Link href='/pokemon' >
			<img class='image-fluid' src={pokemon} alt='Pokemon'/>
		</Link>
	</div>
);

export default Home;
