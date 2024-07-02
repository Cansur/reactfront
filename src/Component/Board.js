import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Board = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/board/list")
            .then(response => setPosts(response.data))
    })
    return (
        <div className='margin-left-20'>
            <br />
            <br />
            <br />
            <h2>글쓰기</h2>
            <hr />
            <br />
            <div className='padding-20 border-0_5 border-radius-10'>
                <div class="dropdown text-align-end">
                    <button class="btn btn-dark dropdown-toggle padding-lr-20" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        자유 게시판
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item active" href="#">자유 게시판</a></li>
                        <li><a class="dropdown-item" href="#">공지 사항</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control bg-dark color-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>
            <br/>
            <div className='padding-20 border-0_5 border-radius-10'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default Board;