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
			<div className='center' >
				<img height="450" width="800" src='c.png' />
			</div>
			<br />
			<br />
			<h2>전체 게시판</h2>
			<table class="table">
				<thead>
					<tr className='table-dark'>
						<th scope="col">번호</th>
						<th scope="col">말머리</th>
						<th colSpan={5}>제목</th>
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
			<table>
    <thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Date of Birth</th>

    </tr>
    </thead>
    <tbody>
    <tr>
        <td>James</td>
        <td>Matman</td>
        <td>(713) 123-8965</td>
        <td><a href="mailto:jmatman@stewart.com">jmatman@stewart.com</a></td>
        <td>01/13/1979</td>
    </tr>
    <tr>
        <td>Johnny</td>
        <td>Smith</td>
        <td>(713) 584-9614</td>
        <td><a href="mailto:jsmith@stewart.com">jsmith@stewart.com</a></td>
        <td>06/09/1971</td>
    </tr>
    <tr>
        <td>Susan</td>
        <td>Johnson</td>
        <td>(713) 847-1124</td>
        <td><a href="mailto:sjohnson@stewart.com">sjohnson@stewart.com</a></td>
        <td>08/25/1965</td>
    </tr>
    <tr>
        <td>Tracy</td>
        <td>Richardson</td>
        <td>(713) 245-4821</td>
        <td><a href="mailto:trichard@stewart.com">trichard@stewart.com</a></td>
        <td>03/13/1980</td>
    </tr>
    </tbody>
</table>
			<br/>
			<br/>
			<h3 className='center'>{`1   2   3   4   5`}</h3>
		</div>
	);
}

export default BoardList;