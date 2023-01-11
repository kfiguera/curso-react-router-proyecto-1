import React from 'react';
import {Link, Outlet} from "react-router-dom";
import blogData from "../fixtures/blogData";

function BlogPage() {
    return (
        <React.Fragment>
            <h1>Blog Page</h1>
            <Outlet/>
            <ul>
                {blogData.map(post => (
                    <BlogLink key={post.slug} post={post}/>
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