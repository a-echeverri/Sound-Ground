import { csrfFetch } from './csrf';

const SET_SONG = 'song/SET_SONG';
const LOAD = 'song/LOAD';
const ADD_SONG = 'song/ADD_SONG';
const ADD = 'song/ADD';
const DELETE_SONG = 'song/DELETE_SONG';
const UPDATE_SONG = 'song/UPDATE_SONG';


const setSong = song => ({
	type: SET_SONG,
	song,
});

const load = songs => ({
	type: LOAD,
	songs
});

const addSong = newSong => ({
	type: ADD,
	newSong
});

const remove = song => {
	return {
		type: DELETE_SONG,
		payload: song,
	};
};

export const getSongs = () => async(dispatch) => {
	const response = await csrfFetch('/api/songs');

	if(response.ok) {
		const songs = await response.json();
		dispatch(load(songs))
	}

}

export const createSong = data => async(dispatch) => {
	const response = await csrfFetch('/api/songs', {
		method: "POST",
		headers: { "Content-Type": "application/json"},
		body: JSON.stringify(data)
	})

	if(response.ok) {
		const newSong = await response.json();
		dispatch(addSong(newSong));
		return newSong;
	}
}

export const deleteSong = () => async (dispatch) => {
	const response = await csrfFetch('/api/songs/:songId')
	
	if(response.ok) {
		const song = await response.json();
		dispatch(remove(song))
	}
};

export const getUserSongs = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/songs`)

    if(response.ok) {
        const songs = await response.json()
        dispatch(load(songs))
    }
}

// export const uploadSong = (song) => async (dispatch) => {
// 	const { userId, albumId, url, title, songUrl, imageUrl, songId } = song;
// 	const response = await csrfFetch('/api/songs', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			userId,
// 			albumId,
// 			url,
// 			title,
// 			songUrl,
// 			imageUrl,
// 			songId,
// 		}),
// 	});
// 	dispatch(setSong(data));
// 	const data = await response.json();
// 	return response;
// };


const songReducer = (state, action) => {
	
	let newState;

	switch (action.type) {
		case LOAD:
			newState = {...state}
			newState.songs = action.songs
			return newState;
		case DELETE_SONG:
			return { ...state, [action.payload.song]: action.payload };
		case ADD:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};

export default songReducer;