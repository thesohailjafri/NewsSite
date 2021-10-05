import React from 'react'
import { imgError } from '../functions'


import dumImg from '../static/images/dummyNews.jpg'

function ArticleCard({ data }) {
    let myDate = data.published_date ? data.published_date : ''
    let objDate = new Date(myDate)
    return (
        <div
            className="rounded overflow-hidden bg-white shadow cursor-pointer transform scale-100 transition ease-in hover:scale-103 hover:shadow-lg"
        >
            <img src={data.media ? data.media : dumImg} onError={(e) => imgError(e.target)} alt={data.title}
                className="h-28 w-full object-cover bg-no-repeat"
            />
            <div className="p-4">
                <p
                    className=' h-24 overflow-hidden '>
                    {data.title}.
                </p>

                <p className="my-1">
                    <span
                        className="italic ">Published Date</span>
                    <span>
                        : {`${objDate.getDate()}-${objDate.getMonth()}-${objDate.getFullYear()}`}
                    </span>
                </p>


                <p >
                    <span className="italic ">Provider</span>:<a href={data.link} target="blank"> {data.clean_url}</a></p>
            </div>

        </div>
    )
}

export default ArticleCard
