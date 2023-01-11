import React from 'react';
import { Link, useNavigate, useParams} from "react-router-dom";
import blogData from "../fixtures/blogData";

function BlogPost() {
    const navigate = useNavigate();
    const {slug} = useParams();
    const blogPost = blogData.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate('/blog');
    };
    return (
        <React.Fragment>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.content}</p>
            <p>Author: {blogPost.author}</p>
            <button onClick={returnToBlog}>Volver al blog</button>
        </React.Fragment>
    );
}

export {BlogPost};