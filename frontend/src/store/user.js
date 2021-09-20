import { csrfFetch } from './csrf';

const SET_CURRENT_USER = 'user/setUser';
const SET_USERS = 'user/setUsers';

const setCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
		payload: user
	};
};

const setUsers = (users) => {
	return {
		type: SET_USERS,
		payload: users
	}
}

export const fetchUser = (user) => async (dispatch) => {
	const username = user;
	const response = await csrfFetch(`/api/users/${username}`, {
		method: 'GET',
	});
	const data = await response.json();
	dispatch(setCurrentUser(data));
	return data;
};

export const fetchUsers = (users) => async (dispatch) => {
	// const usernames = users;
	const response = await csrfFetch(`api/users`);

	const users = await response.json();
	dispatch(setUsers(users));
	return users;
}

const initialState = { user: null };

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, user: action.payload };
		case SET_USERS:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};

export default userReducer;