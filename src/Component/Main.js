import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts' // 가짜 API
		}).then(response => setPosts(response.data))
	}, []);

	return (
		<div className='margin-left-20'>
			<img height="450" width="800" src='a.png' />
			<br />
			<ul>
				{posts.map((item, index) => <li key={index}>{item.title}</li>)}
			</ul>
		</div>
	);
};

export default Main;