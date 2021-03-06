import React,{Component} from 'react'
import { lstat } from 'fs';
function Photo(props){
    const post = props.post
    return <figure className ="figure" >
    <img className="photo" src={post.imageLink} alt = {post.description}/>
    <figcaption className="caption"><p>{post.description}</p></figcaption>
    <div className="button-container">
    <button className="button">Remove</button></div>
    </figure>
}

export default Photo