import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './index.css';
function Blogs() {
  const [blogs, setblogs] = useState([])
  const [loading,setloading]=useState(true)
  const apis = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const items = await data.json();
    const item = await items.slice(3, 7)
    item[0].image = "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    item[1].image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    item[2].image = "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
    item[3].image = "https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg"
    item[0].finalBody = item[0].body.substring(0, 100);
    item[1].finalBody = item[1].body.substring(0, 100);
    item[2].finalBody = item[2].body.substring(0, 100);
    item[3].finalBody = item[3].body.substring(0, 100);
    var lesgo=window.localStorage.getItem("newBlog");
    if(lesgo!=null)
    {
      var kamp=JSON.parse(lesgo);
      kamp.map(Blog=>
      item.push(Blog)
    )
    }
    setblogs(item);
    setloading(false);
  }
  const Details = (blog) => {
    window.localStorage.setItem("title", blog.title)
    window.localStorage.setItem("body", blog.body)
  }
  useEffect(() => {
    apis();
  },[])
  return (
    <div>
      {loading?(<h1 className="loading">Loading...</h1>):(
        <div>
      <h1 className="heading">Blogs</h1>
      <div className="blogs">
        {
          blogs.map(blog => (<Card>
            <Image alt="image" src={blog.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {blog.title}
              </Card.Header>
              <Card.Description>
                <h4>{blog.finalBody}<Link to={`/${blog.id}`} onClick={() => Details(blog)}> read more</Link></h4>
              </Card.Description>
            </Card.Content>
          </Card>
          ))
        }
        <Link to={'/NewBlog'}>
          <Card>
            <Image class="add" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg" />
          </Card>
        </Link>
      </div>
      </div>)}
    </div>
  )
}
export default Blogs