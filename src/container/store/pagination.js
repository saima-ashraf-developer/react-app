import React from 'react';

const Pagination=({postsPerpage, totalposts})=>{
    const pagenumber= [];
    for(let i = 1; i <= Math.ceil(totalposts / postsPerpage); i++){
pagenumber.push(i)
    }

    return(
        <ul>
            {pagenumber.map(num=>(
                <li><a href='!#'>{num}</a></li>
            ))}
        </ul>
    )
}
export default Pagination;
