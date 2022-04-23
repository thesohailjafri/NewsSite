import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Upload() {
  const login = async (values, actions) => {
    console.log('hi')
  }

  const Schema = yup.object().shape({
    email: yup.string().email().required('Please Enter your Email'),
    password: yup
      .string()
      .required('Please Enter your password')
      .min(8, 'Password should be at least 8 characters long')
      .max(15, 'Password should be at most 16 characters long')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          content: '',
          tags: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            login(values, actions)
            actions.setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-4 card mt-10">
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
              <label htmlFor="tags">Tags</label>
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
              <ErrorMessage
                name="title"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
              <ErrorMessage
                name="content"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
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
