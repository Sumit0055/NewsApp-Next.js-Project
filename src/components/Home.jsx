"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setPage] = useState(1)

    let [q, setQ] = useState("All")
    let [language, setLanguage] = useState("hi")
    let params = useSearchParams()

    async function getApiData(q, language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=1&sortBy=publishedAt&apiKey=9f3b0ac013fe40b5b53ec4e640691cab`)
        // let response = await fetch(`https://newsapi.org/v2/everything?q=circket&language=hi&sortBy=publishedAt&apiKey=API_KEY`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }

    async function fetchData() {
        setPage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=9f3b0ac013fe40b5b53ec4e640691cab`)
        // let response = await fetch(`https://newsapi.org/v2/everything?q=circket&language=hi&sortBy=publishedAt&apiKey=API_KEY`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(articles.concat(response.articles))
            // setTotalResults(response.totalResults)
        }
    }

    useEffect(() => {
        let q = params.get("q") ?? "All"
        let language = params.get("language") ?? "hi"
        setQ(q)
        setLanguage(language)
        getApiData(q, language)
    }, [params])
    return (
        <>
            <h5 className='background text-center text-light p-2 mt-2 teext-capitalize'>{q} News Articles</h5>
            <div className="container-fluid" >

                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length < totalResults}
                    loader={<div className='m-5 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                >
                    <div className="row">
                        {
                            articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    source={item.source?.name}
                                    title={item.title}
                                    description={item.description}
                                    date={item.publishedAt}
                                    pic={item.urlToImage}
                                    url={item.url}

                                />
                            })
                        }
                    </div>
                </InfiniteScroll>

            </div>
        </>
    )
}
// 40:06 :- 27-12-2025