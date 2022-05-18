import React from 'react';
import "./SearchResult.css"

function SearchResult(props) {

  const {story_title, title, author, story_url, created_at, comment_text} = props.result;

  return (
    <div className='searchResult'>
      <h2 className='title'>{title || story_title}</h2>
      <p className='com_text'>{comment_text}</p>
      <p className='date'>Created on {new Date(created_at).toDateString()}</p>
      <p className='author'>{`Authored by ${author.toUpperCase()} `}</p>
    </div>
  )
}

export default SearchResult;