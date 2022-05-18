import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import SearchResult from '../SearchResult/SearchResult'
import './Home.css'

const Loading = (props) => {
  return (
    <>
      <div className={`spin ${props.mid ? 'mid': null}`}></div>
    </>
  )
}

function Home() {
  const searchResults = useSelector((state) => state.searchResult)
  console.log(searchResults)
  const loading = useSelector((state) => state.loading)
  return (
    <div className="home">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className='result__parent'>
          {searchResults?.map((sr) => (
            <Link to = "/detail" state={sr}><SearchResult result={sr} key={sr.objectId} /></Link>
          ))}{' '}
        </div>
      )}
    </div>
  )
}

export {Home, Loading}
