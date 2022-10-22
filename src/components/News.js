import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
   static defaultProps = {
    country: 'in', 
    pageSize: 6,
    category: 'general',
   }
   static defaultProps1 = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
   }
  //  const capitalizeFirstLetter = (string)=>{
        
  //  }
    constructor(props){
        super(props);
        this.state = {
           articles: [],
           loading: false,
           page: 1,
          //  totalResults:0
        }
        document.title = `${this.props.category}-NewsTime`;
    }
    async updateNews(){
      this.props.setProgress(36);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12267499e8724b1783637eacf5a5d4c3&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      // this.props.setProgress(36);
      let parsedData = await data.json();
      console.log(parsedData);
      // this.props.setProgress(76);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
       loading: false,
     })
     this.props.setProgress(100);

    }
   async componentDidMount(){
      this.updateNews();
    }
    handlePclick = async ()=>{
      console.log("prev");
      this.setState({page: this.state.page-1});
      this.updateNews();
    }
    handleNclick = async ()=>{
      console.log("next");
      this.setState({page: this.state.page+1});
      this.updateNews();
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Today's Top 20 Headlines</h2>
        {this.state.loading && <Spinner/>}
        {/* <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.lenghth!==this.state.totalResults}
            loader={<Spinner/>}
          > */}
            {/* <div className="container"> */}
        <div className='row'>
           {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
          <Newsitems title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
          </div>
          {/* </div> */}
          {/* </InfiniteScroll> */}
         <div className="container d-flex justify-content-between">
         {/* <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePclick} >&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNclick}>Next &rarr;</button> */}
         </div>
      </div>
      // </div>
      
    )
  }
}
