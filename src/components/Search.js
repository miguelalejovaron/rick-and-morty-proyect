import React from 'react';

export const Search = ({search,searchInput, handleSearch}) => {
	return (
		<div>
			<div className="Search">
				<label>Write to look your favorite character</label>
				<input type="text" value={search} ref={searchInput} onChange={handleSearch} />
			</div>
		</div>
	);
};
