"use client"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    // let searchParams = await req.searchParams
    // let q = Object.hasOwn(searchParams, "q") ? searchParams.q : "All"
    // let language = Object.hasOwn(searchParams, "language") ? searchParams.language : "All"
    // console.log(q,language)
    let[search,setSearch]=useState()
    let[q,setQ]=useState("All")
    let[language,setLanguage]=useState("hi")
    let params = useSearchParams()

    let navigate = useRouter()

    function postData(e){
        e.preventDefault()
        navigate.push(`/?q=${search}&language=${language}`)
    }

    useEffect(()=>{
        setQ(params.get("q")??"All")
        setLanguage(params.get("language")??"hi")
    },[params])
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href={`/?q=All&language=${language}`}>NewsAp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href={`/?q=All&language=${language}`}>Home</a>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Politics&language=${language}`}>Politics</Link> </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Crime&language=${language}`}>Crime</Link> </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Education&language=${language}`}>Education</Link> </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Science&language=${language}`}>Science</Link> </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Technology&language=${language}`}>Technology</Link> </li>
                            <li className="nav-item"><Link className="nav-link text-light" href={`/?q=Economics&language=${language}`}>Economics</Link> </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Options
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href={`/?q=Sports&language=${language}`}>Sports</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Circket&language=${language}`}>Circket</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Nature&language=${language}`}>Nature</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=World&language=${language}`}>World</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=India&language=${language}`}>India</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=Jokes&language=${language}`}>Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=hi`}>Hindi</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=en`}>Engish</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=fr`}>French</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=es`}>Spenish</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=zh`}>Chinese</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=jp`}>Japanese</Link></li>
                                    <li><Link className="dropdown-item" href={`/?q=${q}&language=de`}>German</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={postData}>
                            <input className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} list='searchList' name='search' value={search} type="search" placeholder="Search" aria-label="Search" />
                            {/* <datalist id='searchList'>
                                <option value="">Dhoni</option>
                                <option value="">Kohli</option>
                                <option value="">Delhi</option>
                                <option value="">Noida</option>
                                <option value="">Ghaziabad</option>
                                <option value="">Dhoni</option>
                                <option value="">Dhoni</option>
                            </datalist> */}
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
