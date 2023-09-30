import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' ,top:'2px', marginRight:'2px'}}>
            <span className='badge rounded-pill bg-danger'>{source}</span>
          </div>
          <img src={!imgUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/19/1600x900/Rajinikanth-s-Jailer-was-released-over-the-weekend_1695094483358_1695094535793.png":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}  
            </h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By { !author?'Unknown':author } on { new Date(date).toGMTString() }</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
