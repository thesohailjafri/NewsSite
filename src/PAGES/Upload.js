import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, replace } from 'formik'
import * as yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { addArticleApi, myselfApi } from '../API'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
export default function Upload() {
  const history = useHistory()
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

  const addArticle = async (values, actions) => {
    console.log('hi')
    let { title, image, tags, content } = values
    tags = tags.toLowerCase().replaceAll(' ', '').split('#')

    const res = await addArticleApi(title, image, tags, content)
    if (res) {
      if (res.status === 201) {
        toast.success(res.data.msg || 'Something went wrong')
        actions.resetForm()
      } else {
        toast.error(res.data.msg || 'Something went wrong')
      }
    }
  }

  const Schema = yup.object().shape({
    title: yup
      .string()
      .required('Please enter title')
      .min(15, 'Title should be at least 15 characters long')
      .max(200, 'Title should be at most 200 characters long'),
    tags: yup.string().required('Please enter tags'),
    content: yup
      .string()
      .required('Please enter content')
      .min(500, 'Content should be at least 500 characters long'),
  })
  return (
    <div>
      <Formik
        initialValues={{
          image: '',
          title: '',
          tags: '',
          content: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          console.log('hi')
          setTimeout(() => {
            addArticle(values, actions)
            actions.setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-4 card mt-5">
            <h3 className=" text-3xl mb-3">Upload Article</h3>
            <div className="grid">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2 mt-1"
                placeholder="Enter article title"
              />
            </div>
            <div className="grid">
              <label htmlFor="image">Image</label>
              <Field
                name="image"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2 mt-1"
                placeholder="Enter article image url"
              />
            </div>
            <div className="grid">
              <label htmlFor="tags">
                Tags{' '}
                <small className=" opacity-50">
                  (Add # at the beginning of tags)
                </small>
              </label>
              <Field
                name="tags"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2 mt-1"
                placeholder="Enter article tags"
              />
            </div>
            <div className="grid">
              <label htmlFor="content">Content</label>
              <Field
                component="textarea"
                rows="15"
                name="content"
                className=" rounded-sm border-2 bg-transparent py-1 px-2 mt-1 overflow-auto"
                placeholder="Enter article content"
              />
            </div>

            <ul className="list-disc ml-2">
              <ErrorMessage name="title" component="li" />
              <ErrorMessage name="image" component="li" />
              <ErrorMessage name="tags" component="li" />
              <ErrorMessage name="content" component="li" />
            </ul>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className=" animate-spin btn-sm" />
                  Submiting...
                </span>
              ) : (
                <span>Post</span>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
