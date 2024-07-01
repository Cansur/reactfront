import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8080/api/board/list")
			.then(response => setPosts(response.data))
	})
	return (
		<div className='margin-left-20'>
			<div className='center' >
				<img className='border-radius-10' height="450" width="800" src='a.png' />
			</div>
			<br />
			<br />
			<h2>메인</h2>
			<table class="table">
				<thead>
					<tr className='table-dark'>
						<th scope="col">#</th>
						<th scope="col">title</th>
						<th scope="col">content</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((item,index)=>
						<tr key={index} className='table-dark'>
							<th scope="row">{item.id}</th>
							<td>{item.title}</td>
							<td>{item.content}</td>							
						</tr>
					)}
				</tbody>
			</table>
			<br/>
			<br/>
			<h3 className='center'>{`1   2   3   4   5`}</h3>
		</div>
	);
};

export default Main;