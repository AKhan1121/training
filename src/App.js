import React from 'react';
// import logo from './logo.svg';
 import axios from 'axios';
import './App.css';
// const pstyle={
//    paddingright:'122px',
//   paddingleft:'124px'
//  }
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableItems: [
                { id: 1, name: 'course.jpg'},  
                { id: 2, name: 'Quiz title'},
                { id: 3, name: 'course.jpg'},
                { id: 4, name: 'untitled quiz'},
                { id: 5, name: 'course.jpg'},
                { id: 6, name: 'course.jpg'},
                { id: 7, name: 'untitled quiz'},
                { id: 8, name: 'course.jpg'},
                { id: 9, name: 'Quiz title' },
                { id: 10,name: 'Hello World!'},
                { id:11, name:'course.jpg'},
                { id:12, name:'Quiz title'},
                { id:13, name:'course.jpg'},
                { id:14, name:'Quiz title'},
                { id:15, name:'course.jpg'},
                { id:16, name:'Quiz title'},
                { id:17, name:'RecordRTC'},
                { id:18, name:'RecordRTC'},
                { id: 19, name: 'course.jpg'},  
                { id: 20, name: 'Quiz title'},
                { id: 21, name: 'course.jpg'},
                { id: 22, name: 'untitled quiz'},
                { id: 23, name: 'course.jpg'},
                { id: 24, name: 'course.jpg'},
                { id: 25, name: 'untitled quiz'},
                { id: 26, name: 'course.jpg'},
                { id: 27, name: 'Quiz title' },
                { id: 28,name: 'Hello World!'},
                { id:29, name:'course.jpg'},
                { id:30, name:'Quiz title'},
                { id:31, name:'course.jpg'},
                { id:32, name:'Quiz title'},
                { id:33, name:'course.jpg'},
                { id:34, name:'Quiz title'},
                { id:35, name:'RecordRTC'},
                { id:36, name:'RecordRTC'},
                { id: 37, name: 'course.jpg'},  
                { id: 38, name: 'Quiz title'},
                { id: 39, name: 'course.jpg'},
                { id: 40, name: 'untitled quiz'},
                { id: 41, name: 'course.jpg'},
                { id: 42, name: 'course.jpg'},
                { id: 43, name: 'untitled quiz'},
                { id: 44, name: 'course.jpg'},
                { id: 45, name: 'Quiz title' },
                { id: 46,name: 'Hello World!'},
                { id:47, name:'course.jpg'},
                { id:48, name:'Quiz title'},
                { id:49, name:'course.jpg'},
                { id:50, name:'Quiz title'},
                { id:51, name:'course.jpg'},
                { id:52, name:'Quiz title'},
                { id:53, name:'RecordRTC'},
                { id:54, name:'RecordRTC'},
            ],
            items: [],
            currentPage : 1,
            itemsPerPage : 18,
        }
       this.pagination = this.pagination.bind(this);
        this.doSearchFilter = this.doSearchFilter.bind(this);
    }
componentDidMount(){
  //  var config={
  //    headers:{
  //           'Content-Type':'application/json',
  //      'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxlZW1AZmFuYWRuZXR3b3JrLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJvcmdhbml6YXRpb25JZCI6MzcsImZpcnN0TmFtZSI6Ik1vaGFtZWQiLCJsYXN0TmFtZSI6IlNhbGVlbSIsInJvbGUiOiJPUkdfU1VQRVJfQURNSU4iLCJpZCI6MjEsImxvZ2luIjoic2FsZWVtQGZhbmFkbmV0d29yay5jb20iLCJlbWFpbCI6InNhbGVlbUBmYW5hZG5ldHdvcmsuY29tIiwiZXhwIjoxNTU5MTU2NTQ5fQ.A-SoeE14ClKxqzQ1uOisXpbe4qKsq24grfFlRdnm4jORYl8zPqldBuFssZ5xSeUWKGR_5toD6TNznfF7mAKNfw',
  //    }
  //  };
  axios.get("https://gateway.kloudlearn.com/assetmanager/api/assets?size=50", {headers:{
            'Content-Type':'application/json',
       'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxlZW1AZmFuYWRuZXR3b3JrLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJvcmdhbml6YXRpb25JZCI6MzcsImZpcnN0TmFtZSI6Ik1vaGFtZWQiLCJsYXN0TmFtZSI6IlNhbGVlbSIsInJvbGUiOiJPUkdfU1VQRVJfQURNSU4iLCJpZCI6MjEsImxvZ2luIjoic2FsZWVtQGZhbmFkbmV0d29yay5jb20iLCJlbWFpbCI6InNhbGVlbUBmYW5hZG5ldHdvcmsuY29tIiwiZXhwIjoxNTU5MTU2NTQ5fQ.A-SoeE14ClKxqzQ1uOisXpbe4qKsq24grfFlRdnm4jORYl8zPqldBuFssZ5xSeUWKGR_5toD6TNznfF7mAKNfw'}
     }).then((res)=>{
    console.log(res)
   }).catch((error)=>{
     console.log("error")
   });
}
    componentWillMount(){
        this.setState({
            ...this.state,
            items: this.state.availableItems
        });
    }
    doSearchFilter = (event) => {
        console.log('Event : ', event.target.value);
        this.setState({
            ...this.state,
            items: this.state.availableItems.filter(ai => 
                ai.name.toLowerCase().includes(event.target.value.toLowerCase()))
        });
    }
    pagination(event){
      console.log("Pagination : event - ",event);
      console.log("Pagination : event.target.id - ",event.target.id);
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
    render() {
         const {items, currentPage, itemsPerPage} = this.state;
      const lastItem = currentPage * itemsPerPage;
      const firstItem = lastItem - itemsPerPage;
      const currentItemsDisplay = items.slice(firstItem, lastItem);
      const renderItems = currentItemsDisplay.map((item, index) => {
          return (
          <div className="col-lg-2 " key={item.id}> 
              <div className="wid-panel">
                  <div className="wid-sub-1"><img src={require('../src/1.jpg')} alt="hello" width="155px" height="110"/>{item.text}</div>
                  <div className="wid-sub-2">{item.name}
                  <div><img src={require('../src/image.png')}alt="hurray" width="20" height="20"/>  Image  .  16May     <i class="fa fa-ellipsis-h"  ></i></div>
                  </div>
              </div>
          </div> 
        )
      });
      const pageNumbers = [];
      for(let i =1; i <= Math.ceil(items.length / itemsPerPage);i++){
        pageNumbers.push(i);
      }
      const renderPageNumbers = pageNumbers.map(pageNum => {
        return (
          <li key={pageNum} id={pageNum} onClick={this.pagination}> {pageNum} </li>
        )
      });
        return (
            <div className="App">
                <div className="container" >
                    <div className="row ">
                        <div className="col-lg-2 " >
                            <div className="search">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="search" onChange={this.doSearchFilter} />
                                    <span className="fa fa-search form-control-feedback" ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                    {renderItems}
                  </div>
                  <div id="page-numbers">      
                    <ul class = "pagination">
                      <li>&#60;</li>
                        {renderPageNumbers}<i class="fa fa-ellipsis-h"  ></i>
                      <li>&#62;</li>  
                    </ul>       
                  </div>     
                </div>
            </div>
            
        );
    }
   
}