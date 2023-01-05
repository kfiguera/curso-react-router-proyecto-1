import React from 'react';
import { useParams} from "react-router";
import blogData from "../fixtures/blockData";

function BlogPost() {
    const {slug} = useParams();
    const blogPost = blogData.find(post => post.slug === slug);
    return (
        <React.Fragment>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.content}</p>
            <p>Author: {blogPost.author}</p>
        </React.Fragment>
    );
}

export {BlogPost};