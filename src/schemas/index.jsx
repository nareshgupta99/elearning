import * as yup from 'yup';

export const signUpSchema=yup.object({
    name:yup.string().min(3).max(20).required("Please enter your name"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(9).required("Please enter your password"),
    confirmPassword:yup.string().required("Please enter your password").oneOf([yup.ref('password'),null,"password and confirm password must be same"])
})

export const loginSchema=yup.object({
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(9).required("Please enter your password"),
})