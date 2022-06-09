import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const articleComp = posts.map(({id,title,date,preview,minutes}) =>{
       return( <Article key={id} title={title} date={date} preview={preview} minutes={minutes} />)
    })
    return(
        <main>{articleComp}</main>
    )
}

export default ArticleList