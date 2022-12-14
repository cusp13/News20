import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,author,date} = this.props
    return (
      <div className='my-3'>
          <div className="card">
          <img src={!imageUrl?"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          {/* <span class="badge text-bg-info">{source}</span> */}
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">KnowMore..</a>
    </div>
       </div>
      </div>
    )
  }
}

export default Newsitems