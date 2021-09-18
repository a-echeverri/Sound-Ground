import { React } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import * as songActions from '../../store/song';
// import { render } from 'react-dom';
import './HomePage.css';

export default function HomePage() {

	return (
		<div className="home-page">
			<div>
				<h1>SoundGround</h1>
			</div>	
			<p className="homepage-text">What's next in music is first on SoundGroud </p>
			<p className="homepage-text2">Upload your first track and begin your journey. SoundGround gives you space to create, find your fans, and connect with other artists.</p>
		</div>
	);
};