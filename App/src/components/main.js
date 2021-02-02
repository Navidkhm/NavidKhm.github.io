import React, { Component, ReactDOM } from 'react';
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class Main extends Component {
    
    constructor(props){
        super(props);
        this.state = { currentPage: null };
        this._pageScroller = null;
      }
    

    state={
      mobile:false,
      
    }

    handlePageChange = number => {
      this.setState({ currentPage: number });
    };
  
    handleBeforePageChange = number => {
      console.log(number,'num');
      console.log(this.state.currentPage,'cur')
    };


    componentWillMount(){
      if (window.innerWidth >= 768){
        this.setState({
          mobile: true
        })
        
      }
      console.log(window.innerWidth)
    }  

    getPagesNumbers = () => {
      const pageNumbers = [];
  
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(
          <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
            {i}
          </Pagination.Item>,
        );
      }
  
      return [...pageNumbers];
    };
  
    check=(e)=>{
      console.log(e.target.innerHTML)
      this.setState({
        currentPage:0
      })
    }
    

    render() {

        
        const pagesNumbers = this.getPagesNumbers();
        return (
          <>
            <ShortSlider />
            
            <ReactPageScroller 
             ref={c => this._pageScroller = c}
             pageOnChange={this.handlePageChange}
             onBeforePageScroll={this.handleBeforePageChange}
             customPageNumber={this.state.currentPage}
            >

              {/* <a className='zero' href='#one'>1</a> */}
              
              <AntdSlider/>
              <div className='table'>
                <CustomizedTables />
              </div>
              
             
              <div  className='infoandpros'>
                <Info/>
                <Pros/>
              </div>
              <div  className='postsandfooter' >
                
                {this.state.mobile && <Posts/>}
                {!this.state.mobile && <PostSlider/>}
                <Footer/>
                        
              </div>
             
             
            </ReactPageScroller>
            {/* <div className='zero'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              
            </div> */}
            

            
          </>
          
                
                
           

        );
    }
}

export default Main;