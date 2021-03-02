import React, { useState } from 'react';
import { Link } from 'react-router-dom'
function NewBlog() {
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const ComeOn = () => {
        var newBlog = window.localStorage.getItem("newBlog");
        if (newBlog == null) {
            var newOne = [];
            var newObject =
            {
                title: Title,
                body: Body,
                image: imageUrl,
                id: Math.floor((Math.random() * 1000) + 1),
            }
            newObject.finalBody = newObject.body.substring(0, 100);
            newOne.push(newObject);
            var stem = JSON.stringify(newOne);
            window.localStorage.setItem("newBlog", stem);
        }
        else {
            var local = window.localStorage.getItem("newBlog");
            var p = JSON.parse(local);
            var Object = {
                title: Title,
                body: Body,
                image: imageUrl,
                id: Math.floor((Math.random() * 1000) + 1),
            }
            Object.finalBody = Object.body.substring(0, 100);
            p.push(Object);
            var heal = JSON.stringify(p);
            window.localStorage.setItem("newBlog", heal);
        }
    }
    return (
        <div className="new">
            <h1>Add Blog</h1>
            <div className="form">
            <div class="wrapper">
                <div class="input-data">
                    <input type="text" required value={Title} onChange={(e) => { setTitle(e.target.value) }}></input>
                    <div class="underline"></div>
                    <label>Title</label>
                </div>
            </div>
            <div class="wrapper">
                <div class="input-data">
                    <input type="text" required value={imageUrl} onChange={(e) => { setimageUrl(e.target.value) }}></input>
                    <div class="underline"></div>
                    <label>Image Url</label>
                </div>
            </div>
            <div class="wrapper">
                <div class="input-data">
                    <textarea id="largetext" required value={Body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                    <div class="underline"></div>
                    <label>Body</label>
                </div>
            </div>
            <Link to={"/"}><button className="ripple" type="submit" onClick={ComeOn}>Submit</button></Link>
            </div>
        </div>
    )
}
export default NewBlog