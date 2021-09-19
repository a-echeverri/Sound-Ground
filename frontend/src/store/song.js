import { csrfFetch } from './csrf';

const CREATE_SONG = 'song/CREATE_SONG';
const SET_SONG = 'song/SET_SONG';
const EDIT_SONG = 'song/EDIT_SONG';
const REMOVE_SONG = 'song/REMOVE_SONG';
const SET_SONGS = 'song/SET_SONGS';


const createSong = song => {
	return {
		type: CREATE_SONG,
		payload: song
	}
};

const setSong = song => {
	return {
		type: SET_SONG,
		payload: song
	}
};

// const editSong = (song) => {
// 	return {
// 		type: EDIT_SONG,
// 		payload: song
// 	}
// };

// const removeSong = (song) => {
// 	return {
// 		type: REMOVE_SONG,
// 		payload: song
// 	}
// };

const setSongs = (songs) => {
	return {
		type: SET_SONGS,
		payload: songs
	}
}

// const remove = song => {
// 	return {
// 		type: DELETE_SONG,
// 		payload: song,
// 	};
// };

export const addSong = song => async(dispatch) => {
	let response = await csrfFetch('/api/songs', {
		method: 'POST',
		body: JSON.stringify(song),
		headers: { 'Content-Type': 'application/json'}
		
	})

	response = await response.json();
	dispatch(createSong(response));
	return response;
	// if(response.ok) {
	// 	const song = await response.json();
	// 	dispatch(createSong(song));
	// 	return song;
	// }
}

export const getSong = (id) => async(dispatch) => {
	const response = await csrfFetch(`/api/songs/${id}`);

	if(response.ok) {
		const song = await response.json();
		dispatch(setSong(song))
		
	}
	return response;

}

// export const updateSong = song => async(dispatch) => {
// 	const response = await csrfFetch(`/api/songs/${song.id}`, {
// 		method: 'PUT',
// 		body: JSON.stringify(song)
// 	});
// 	dispatch(editSong(song));
// 	return response;
// }

// export const deleteSong = () => async (dispatch) => {
// 	const response = await csrfFetch('/api/songs/:songId')
	
// 	if(response.ok) {
// 		const song = await response.json();
// 		dispatch(removeSong(song))
// 	}
// };

export const getSongs = () => async (dispatch) => {
	const response = await csrfFetch('/api/songs');
	const songs = await response.json();
	dispatch(setSongs(songs));
	return response;
}

// export const getUserSongs = (id) => async(dispatch) => {
//     const response = await csrfFetch(`/api/users/${id}/songs`)

//     if(response.ok) {
//         const songs = await response.json()
//         dispatch(load(songs))
//     }
// }


let initialState = {}
const songReducer = (state = initialState, action) => {
	
	let newState = { ...state };

	switch (action.type) {
		case CREATE_SONG:
			newState.song = action.payload;
			return newState;
		case SET_SONG:
			newState.song = action.payload;
			return newState;
		case SET_SONGS:
			newState.songs = action.payload;
			return newState;
		default:
			return state;
	}
};

export default songReducer;