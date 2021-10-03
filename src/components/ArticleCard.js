import React from 'react'
import { imgError } from '../functions'
function ArticleCard({ data }) {
    let myDate = data.datePublished ? data.datePublished : ''
    let objDate = new Date(myDate)
    return (
        <div
            className="rounded overflow-hidden bg-white shadow cursor-pointer transform scale-100 transition ease-in hover:scale-103 hover:shadow-lg"
        >
            <img src={data.image.url} onError={(e) => imgError(e.target)} alt={data.title}
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
                    <span className="italic ">Provider</span>:<a href={data.url} target="blank"> {data.provider.name}</a></p>
            </div>

        </div>
    )
}

export default ArticleCard
