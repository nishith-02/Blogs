import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from 'react';
import Blogs from './Blogs'
import DetailBlog from './DetailBlog'
import NewBlog from './NewBlog'
function App(){
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Blogs}/>
          <Route path="/newblog" component={NewBlog}/>
          <Route path="/:id" component={DetailBlog}/>
        </Switch>
      </div>
    </Router>
  )
}
export default App