import React from 'react'
function DetailBlog(){
    return(
        <div className="Details">
            <h1 className="Title">{window.localStorage.getItem("title")}</h1>
            <p className="desc">{window.localStorage.getItem("body")}</p>
        </div>
    )
}
export default DetailBlog