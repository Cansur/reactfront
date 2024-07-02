import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../Css/table.css'

const BoardList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const page = searchParams.get('page');
    const size = searchParams.get('size');

	useEffect(() => {
		axios.get(`http://localhost:8080/api/board/list?size=${size}`)
			.then(response => setPosts(response.data))
	})

	return (
		<div className='margin-left-20'>
			<div className='center'>
				<img className='border-radius-10' height="450" width="800" src='c.png' />
			</div>
			<br />
			<br />
			<h2>전체 게시판</h2>
			<table class="table">
				<thead>
					<tr className='table-dark'>
						<th scope="col">번호</th>
						<th scope="col">말머리</th>
						<th scope="col" colSpan="4">제목ojrgepgjoeprjgoperjgpo</th>
						<th scope="col">글쓴이</th>
						<th scope="col">작성일</th>
						<th scope="col">조회</th>
						<th scope="col">추천</th>
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
}

export default BoardList;