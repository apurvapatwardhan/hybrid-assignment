import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  loadingAction,
  searchAction,
  searchResultAction,
} from '../../State/action/action'
import './Header.css'

function Header(props) {
  const searchValue = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        dispatch(loadingAction(true))
        const resp = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`,
        )
        const data = await resp.json()
        console.log(data)
        dispatch(loadingAction(false))
        dispatch(searchResultAction(data.hits))
      } catch (err) {
        dispatch(loadingAction(false))
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchValue])

  const searchHandler = (val) => {
    dispatch(searchAction(val))
  }

  return (
    <div className="header">
      <div className="header__left">
        <Link to ="/"><span>Hacker</span> <span>NEWS</span></Link>
      </div>
      <form className="header__form">
        <input
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
          value={searchValue}
          disabled={props.showInput}
        />
        <button type="button" onClick={(e) => searchHandler(searchValue)} disabled={props.showInput} >Search</button>
        <div className="icon">
          {props.showIcon ? <i class="fa fa-bomb red-color"></i> : null}
        </div>
      </form>
    </div>
  )
}

export default Header
