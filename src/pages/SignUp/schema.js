import { object, string, ref } from 'yup'

export const schema = object().shape({
  firstName: string(),
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  password: string()
    .min(6, 'Password is too short')
    .max(30, 'Password is too long')
    .matches(/[0-9]/u, 'Password should contain one number')
    .matches(/[a-z]/u, 'Password should contain at least one lowercase letter')
    .matches(/[A-Z]/u, 'Password should contain at least one uppercase letter')
    .matches(
      /[\W]/u,
      'Password should contain at least one non-alphanumeric character like !.,: etc.'
    )
    .required('Password is required'),
  passwordConfirm: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Must confirm password')
})
