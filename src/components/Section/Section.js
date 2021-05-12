import React from 'react';
import useStore from '../../useStore';

import SectionTitle from './SectionTitle';
import SectioneParagraph from './SectionParagraph';
import Article from '../Article/Article';

import '../../css/Section.css';


const Section = () => {
    const {articleList} = useStore();

    return(
        <div className = "section">
            <SectionTitle/>
            <SectioneParagraph/>
            {articleList.map(item=> <Article {...item} key={item.id}/>)}
        </div>
    )
}

export default Section;
