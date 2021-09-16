import { useState, useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Player from '../AudioPlayer';
import * as songActions from '../../store/song';

export default function SongPage() {
	const { songId } = useParams();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const currentSong = useSelector((state) => state.song);
	const [song, setSong] = useState(null);

	useEffect(() => {
		dispatch(songActions.fetchFeatured());
		setSong(currentSong);
	}, []);

	return (
		<div id="landing-page">
			<h1>Home Page</h1>
			<footer>
	  		<p>Follow me</p>
			</footer>
		</div>
);
}