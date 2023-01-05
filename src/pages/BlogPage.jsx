import React from 'react';
import {Link} from "react-router-dom";
import blogData from "../fixtures/blockData";
function BlogPage() {
    return (
        <React.Fragment>
            <h1>Blog Page</h1>
            <ul>
                {blogData.map(post => (
                    <BlogLink post={post}/>
                ))}
            </ul>

        </React.Fragment>
    );
}

function BlogLink({post}) {
    return (
        <React.Fragment>
            <li><Link to={`/blog/${post.slug}`}>{post.title}</Link></li>
        </React.Fragment>
    );
}

export {BlogPage};