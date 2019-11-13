import React from 'react';
import News from './news_items';

const NewsItem = (props) => {
    
    const items = props.news.map((item)=>{
        return(
              <News key={item.id} item={item} />
        )
    });
    return (
        <div>
            <h1>{items}</h1>
            <h2>{props.children}</h2>
       </div>
       )
} 

export default NewsItem;