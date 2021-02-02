import React, { Component } from 'react';
import Pros from './Pros';
import Posts from './posts';
import Info from './Info';
import CustomizedTables from './Table';
import ReactPageScroller from "react-page-scroller";
import ShortSlider from './ShortSlider';
import Footer from './Footer';
import Menu from './Menu';
import AntdSlider from './antdSlider';
import PostSlider from './PostSlider'
import Animation from './Animation';
import {Pagination} from "react-bootstrap";

class links extends Component {
    render() {
        return (
            <>
               <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                  <div  className='postsandfooter' >
                
                          {this.state.mobile && <Posts/>}
                          {!this.state.mobile && <PostSlider/>}
                          <Footer/>
                        
                      </div>
                      </Route>
                      <Route path="/users">
                        <div  className='infoandpros'>
                            <Info/>
                            <Pros goToPage={this.goToPage}/>
                        </div>
                      </Route>
                      <Route path="/">
                        <AntdSlider />
                      </Route>
                    </Switch>
                  </div>
              </Router>
             
            </>
        );
    }
}

export default links;


