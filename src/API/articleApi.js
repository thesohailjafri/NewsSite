import axios from 'axios'
import endpoints from './endpoints'

export const addArticleApi = async (title, image, tags, content) => {
  try {
    const res = await axios.post(endpoints.article.index, {
      title,
      image,
      tags,
      content,
    })
    return res
  } catch (error) {
    return error.response
  }
}

export const readMyArticlesApi = async () => {
  try {
    const res = await axios.get(endpoints.article.my)
    return res
  } catch (error) {
    return error.response
  }
}

export const deleteArticleApi = async (id) => {
  try {
    const res = await axios.delete(endpoints.article.my + id)
    return res
  } catch (error) {
    return error.response
  }
}
