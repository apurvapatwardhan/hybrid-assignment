import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { articleAction, loadingAction } from '../../State/action/action'
import Header from '../Header/Header'
import { Loading } from '../Home/Home';
import "./Detail.css";
import parser from "html-react-parser";

const Comment = (props) => {
  return <div className='comments'>
    
    <h3>{props.author}</h3>
    {props.text ? parser(props.text): ''}
  </div>
}

const Article = (props) => {
  const {title, points, url, author, children} = props.article;
  console.log(props.article, 'ch')
  const tags = props._tags
  let comments = children;
  if(children && children.length > 10) {
    comments = children.slice(0, 10);
  }
  return (
    <div className="article">
      <h2>{title}</h2>
      <p className='author'>Author: {author}</p>
      <p className='points'>Points: {points}</p>
      <a href={url} target='_blank'>For more info Click Here</a>
      <h3>Comments</h3>
      {
        comments && comments.map(comment => <Comment author={comment.author} text={comment.text} />)
      }
    </div>
  )
}

const fetchData = async (objId) => {
  const resp = await fetch(`http://hn.algolia.com/api/v1/items/${objId}`)
  const data = await resp.json()
  console.log(data, 'article')
  return data
}

function Detail() {
  const loading = useSelector((state) => state.loading)
  const article = useSelector((state) => state.article)
  const dispatch = useDispatch()
  const location = useLocation()

  const { objectID } = location.state

  useEffect(() => {
    dispatch(loadingAction(true))
    fetchData(objectID)
      .then((res) => {
        dispatch(loadingAction(false))
        dispatch(articleAction(res))
      })
      .catch((err) => dispatch(loadingAction(false)))
  }, [objectID])
  console.log(location)
  return (
    <>
      <Header showInput={true} showIcon={true} />
      {loading ? <Loading mid = {true}/> : <Article article={article} _tags={location.state._tags}/>}
    </>
  )
}

export default Detail
