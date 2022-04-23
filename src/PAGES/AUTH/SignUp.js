import React, { useState } from 'react'
import { registerApi } from '../../API'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { userInfoState } from '../../atoms/userInfo'
import { useSetRecoilState } from 'recoil'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function SignUp() {
  const setUserInfo = useSetRecoilState(userInfoState)
  const register = async (values, actions) => {
    const { username, email, password } = values
    const res = await registerApi(email, username, password)
    if (res) {
      if (res.status >= 400) {
        toast.error(res.data.msg || 'Something went wrong')
      } else if (res.status >= 200) {
        toast.success(res.data.msg || 'Something went wrong')
        setUserInfo((ps) => ({ ...ps, email: email }))
        actions.resetForm()
      }
    }
  }

  const Schema = yup.object().shape({
    username: yup
      .string()
      .required('Please Enter a username')
      .min(3, 'Username should be at least 3 characters long')
      .max(15, 'Username should be at most 15 characters long'),
    // TODO .test()
    email: yup.string().email().required('Please Enter your Email'),
    password: yup
      .string()
      .required('Please Enter your password')
      .min(8, 'Password should be at least 8 characters long')
      .max(15, 'Password should be at most 16 characters long')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm: yup
      .string()
      .required('Please enter confirm password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    <div className=" grid place-content-center">
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            register(values, actions)
            actions.setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-4 w-80 sm:w-96 card mt-20">
            <h3 className=" text-3xl mb-3">Register</h3>
            <div className="grid">
              <Field
                type="text"
                name="username"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2"
                placeholder="Enter username"
              />
            </div>
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
            <div className="grid">
              <Field
                type="password"
                name="passwordConfirm"
                className=" rounded-sm border-b-2 bg-transparent py-1 px-2"
                placeholder="Confirm password"
              />
            </div>
            <ul className="list-disc ml-2">
              <ErrorMessage
                name="username"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
              <ErrorMessage
                name="email"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
              <ErrorMessage
                name="password"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
              <ErrorMessage
                name="passwordConfirm"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
            </ul>
            <button type="submit" className="btn " disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className=" animate-spin btn-sm" />
                  Submiting...
                </span>
              ) : (
                <span>Register</span>
              )}
            </button>
            <div className="grid gap-1">
              <div>
                Already have a account?{' '}
                <a href="/signin" className=" text-red-500">
                  Login
                </a>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
