"use client"
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function Home() {
    let[articles,setArticles]=useState([])
    let[totalResults,setTotalResults]=useState(0)

    useEffect(()=>{
        (async()=>{
            let response = await fetch(`https://newsapi.org/v2/everything?q=cricket&language=hi&sortBy=publishedAt&apiKey=9f3b0ac013fe40b5b53ec4e640691cab`)
            // let response = await fetch(`https://newsapi.org/v2/everything?q=circket&language=hi&sortBy=publishedAt&apiKey=API_KEY`)
            response = await response.json()
            if(response.status==="ok"){
                setArticles(response.articles)
                setTotalResults(response.totalResults)
            }
        })()
    },[])
    console.log(articles)
  return (
    <>
    <h5 className='background text-center text-light p-2 mt-2'>Cricket News Articles</h5>
    <div className="container-fluid">
        <div className="row">
            {
                articles.map((item,index)=>{
                    return <NewsItem
                     key={index}
                     source = {item.source?.name}
                     title={item.title}
                     description={item.description}
                     date ={item.date}
                     pic={item.urlToImage}
                     url={item.url}
                     
                     />
                })
            }
        </div>
    </div>
    </>
  )
}
