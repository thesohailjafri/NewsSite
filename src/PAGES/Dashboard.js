import React, { useCallback, useEffect, useState } from 'react'
import { myselfApi, deleteArticleApi } from '../API'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { userInfoState } from '../atoms/userInfo'
import { useHistory } from 'react-router-dom'
import { readMyArticlesApi } from '../API/articleApi'
import dumImg from '../static/images/dummyNews.jpg'
import { imgError } from '../functions'

export default function Dashboard() {
  const history = useHistory()
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  // const userInfo = useRecoilValue(userInfoState)
  const [myArticles, setMyArticles] = useState([])
  useEffect(() => {
    const fetchMyself = async () => {
      const res = await myselfApi()
      console.log({ res })
      if (res && res.status !== 200) {
        history.push('/')
      }
    }
    fetchMyself()
  }, [])

  useEffect(() => {
    const fetchMyArticles = async () => {
      const res = await readMyArticlesApi()
      console.log({ res })
      if (res && res.status === 200) {
        setMyArticles(res.data.articles)
      }
    }
    fetchMyArticles()
  }, [])
  const deleteArticle = useCallback(
    async (id) => {
      const res = await deleteArticleApi(id)
      if (res && res.status === 200) {
        const newArticles = myArticles.filter((article) => article._id !== id)
        setMyArticles(newArticles)
      }
    },
    [myArticles],
  )

  return (
    <div className="grid gap-4 mt-5">
      <h3 className="text text-3xl">Welcome, {userInfo.username}</h3>
      <div className="text flex items-end gap-2">
        <a href="/upload" className="btn">
          Add New Article
        </a>
      </div>
      <div>
        <h4 className="text text-2xl">Past Articles</h4>
        <hr />
        <div
          className="grid grid-cols-4 gap-4 my-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1"
        >
          {myArticles.map((article) => {
            let myDate = article.createdAt ? article.createdAt : ''
            let objDate = new Date(myDate)
            return (
              <div
                className="rounded overflow-hidden bg-white shadow cursor-pointer transform scale-100 transition ease-in hover:scale-103 hover:shadow-lg
									 dark:bg-gray-700 dark:text-gray-50"
              >
                <img
                  src={article.image ? article.image : dumImg}
                  onError={(e) => imgError(e.target)}
                  alt={article.title}
                  className="h-28 w-full object-cover bg-no-repeat"
                />
                <div className="p-4">
                  <p className=" h-24 overflow-hidden ">{article.title}.</p>

                  <p className="my-1">
                    <span className="italic ">Published Date</span>
                    <span>
                      :{' '}
                      {`${objDate.getDate()}-${objDate.getMonth()}-${objDate.getFullYear()}`}
                    </span>
                  </p>
                  <button
                    onClick={() => deleteArticle(article._id)}
                    className="btn  "
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
