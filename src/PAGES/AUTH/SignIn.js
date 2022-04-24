import React, { useState } from 'react'

import { loginApi, registerApi } from '../../API'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { userInfoState } from '../../atoms/userInfo'
import { useSetRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'
export default function SignIn() {
  const history = useHistory()
  const setUserInfo = useSetRecoilState(userInfoState)
  const login = async (values, actions) => {
    const { email, password } = values
    const res = await loginApi(email, password)
    if (res) {
      if (res.status >= 400) {
        toast.error(res.data.msg || 'Something went wrong')
      } else if (res.status === 200) {
        toast.success('Login Successful')
        localStorage.setItem('token', res.data.token)
        setUserInfo({ ...res.data.user })
        actions.resetForm()
        history.push('/dashboard')
      }
    }
  }

  const Schema = yup.object().shape({
    email: yup.string().email().required('Please enter your Email'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(8, 'Password should be at least 8 characters long')
      .max(15, 'Password should be at most 16 characters long')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

  return (
    <div className=" grid place-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
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
          <Form className="grid gap-4 w-80 sm:w-96 card mt-20">
            <h3 className=" text-3xl mb-3">Login</h3>
            <div className="grid">
              <Field
                type="email"
                name="email"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2"
                placeholder="Enter email"
              />
            </div>
            <div className="grid">
              <Field
                type="password"
                name="password"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2"
                placeholder="Enter password"
              />
            </div>

            <ul className="list-disc ml-2">
              <ErrorMessage name="email" component="li" />
              <ErrorMessage name="password" component="li" />
            </ul>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className=" animate-spin btn-sm" />
                  Submiting...
                </span>
              ) : (
                <span>Login</span>
              )}
            </button>

            <div className="grid gap-1">
              <a href="/signup">Forget password?</a>
              <div>
                Dont have a account?{' '}
                <a href="/signup" className=" text-red-500">
                  Register
                </a>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
