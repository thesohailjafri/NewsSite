import React from 'react'
function ArticleCard({ data }) {
    let myDate = data.datePublished ? data.datePublished : ''
    let objDate = new Date(myDate)
    return (
        <div
            className="rounded overflow-hidden bg-white shadow"
        >
            <img src={data.image.url ? data.image.url :
                'https://www.thehindu.com/static/theme/default/base/img/og-image.jpg'} alt={data.title}
                className="h-28 w-full object-cover bg-no-repeat"
            />
            <div className="p-4">
                <p
                    className='h-16 overflow-ellipsis'
                >{data.title}</p>
                <span
                    className="italic "
                >Pub. Date : </span>
                <span>{`${objDate.getDate()}-${objDate.getMonth()}-${objDate.getFullYear()}`}</span>
            </div>

        </div>
    )
}

export default ArticleCard
