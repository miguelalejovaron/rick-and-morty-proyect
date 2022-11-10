import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import './Characters.css';
import { Search } from './Search';
import useCharacters from './hooks/useCharacters';

const initialState = {
	favorites: []
};
const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorites: [ ...state.favorites, action.payload ]
			};
		default:
			return state;
	}
};
export const Characters = ({ togglerCurrentStatus }) => {
	const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);
	const [ search, setSearch ] = useState('');
	const searchInput =useRef(null);
	const characters = useCharacters(API)

	const handleClick = (favorite) => {
		dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
	};
	const handleSearch = useCallback(() => {
		setSearch(searchInput.current.value);
	}, [])
	
	const filterUsers = useMemo(() =>
		characters.filter((user) => {
			return user.name.toLowerCase().includes(search.toLowerCase());
		}),
		[characters, search]
	)

	return (
		<div>
			<Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
			<div className="Characters">
				<ul>{favorites.favorites.map((favorite) => <li key={favorite.id}>{favorite.name}</li>)}</ul>
				<br />
				<br />

				{filterUsers.map((character) => (
					<div
						key={character.id}
						className={
							!togglerCurrentStatus ? (
								'characters-card__single-container--styles'
							) : (
								'characters-card-dark__single-container--styles'
							)
						}
					>
						<img src={character.image} alt="" />
						<h2>{character.name}</h2>
						<p>{character.status}</p>
						<button type="button" onClick={() => handleClick(character)}>
							Add to Favorites
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
