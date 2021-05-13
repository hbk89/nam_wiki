import React from 'react';
import ArticleHead from './ArticleHead';
import ArticleContent from './ArticleContent';

import '../../css/Article.css'

const ArticleItem = (props) => {
    return (
        <div id = {props.head}>
        <h2><ArticleHead name = {props.head}/></h2>
        <hr/>
        <ArticleContent blahblah = {props.content}/>
        </div>
    )
}

export default ArticleItem;