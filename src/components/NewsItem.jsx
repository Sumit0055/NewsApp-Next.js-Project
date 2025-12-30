import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "14rem" }}>
                    <img src={props.pic} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary w-100 background">Read Full Article</a>
                    </div>
                </div>
            </div>
        </>
    )
}
