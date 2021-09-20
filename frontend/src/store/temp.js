import { csrfFetch } from './csrf';

const CREATE_SONG = 'song/CREATE_SONG';
const SET_SONG = 'song/SET_SONG';
const EDIT_SONG = 'song/EDIT_SONG';
const REMOVE_SONG = 'song/REMOVE_SONG';
const SET_SONGS = 'song/SET_SONGS';
// const LOAD = 'song/LOAD';
// const ADD = 'song/ADD';


// const setSong = song => ({
// 	type: SET_SONG,
// 	song,
// });

// const load = song => {
// 	return {
// 		type: LOAD,
// 		payload: song
// 	}
// };

const createSong = newSong => {
	return {
		type: CREATE_SONG,
		payload: newSong
	}
};

const setSong = song => {
	return {
		type: SET_SONG,
		payload: song
	}
};

const editSong = song => {
	return {
		type: EDIT_SONG,
		payload: song
	}
};

const removeSong = song => {
	return {
		type: REMOVE_SONG,
		payload: song
	}
};

const setSongs = songs => {
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

export const addSong = newSong => async(dispatch) => {
	const response = await csrfFetch('/api/songs', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(newSong)
	})

	if(response.ok) {
		const newSong = await response.json();
		dispatch(createSong(newSong));
		return newSong;
	}
}

export const getSong = () => async(dispatch) => {
	const response = await csrfFetch('/api/songs');
	// const song = await response.json();

	if(response.ok) {
		const song = await response.json();
		dispatch(setSong(song))
	}

}

export const updateSong = song => async(dispatch) => {
	const response = await csrfFetch(`/api/songs/${song.id}`, {
		method: 'PUT',
		body: JSON.stringify(song)
	});
	dispatch(editSong(song));
	return response;
}

export const deleteSong = () => async (dispatch) => {
	const response = await csrfFetch('/api/songs/:songId')
	
	if(response.ok) {
		const song = await response.json();
		dispatch(removeSong(song))
	}
};

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

let initialState = {}
const songReducer = (state = initialState, action) => {
	
	let newState = { ...state };

	switch (action.type) {
		case CREATE_SONG:
			return { ...state, [action.payload.id]: action.payload };
		case SET_SONG:
			newState = {...state}
			newState.song = action.song
			return newState;
		case EDIT_SONG:
			newState.song = newState.song.map(song => {
				if (song.id === action.payload.id) {
					return action.payload;
				} else {
				  return song;
				}
			});
			return newState;
		case REMOVE_SONG:
			newState.song = newState.song.filter(song => song.id !==action.payload.id);
			return newState;
		case SET_SONGS:
			return { ...state, song:action.payload};
		default:
			return {state};
	}
};

export default songReducer;