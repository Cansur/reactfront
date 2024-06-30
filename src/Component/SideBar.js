import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul className='ulSide'>
                <li><Link to="/boardlist?size=30" className='text-decoration-line-none color-white'>전체 게시판</Link></li>
                <li><Link to="/product" className='text-decoration-line-none color-white'>생산 게시판</Link></li>
                {/* <li><Link to="/" className='text-decoration-line-none color-white'>전체 게시판</Link></li> */}
            </ul>
        </div>
    );
};

export default SideBar;