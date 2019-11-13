import React from 'react';

const News = ({item}) =>{

    return (
        <div>
            <h2>{item.title}</h2>   
            <div>
                 {item.feed}
            </div> 
        </div>
    )
}

export default News;