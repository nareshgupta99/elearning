import * as yup from 'yup';

export const signUpSchema=yup.object({
    firstName:yup.string().min(3).max(20).required("name can not be empty"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(9).required("Please enter your password"),
    confirmPassword:yup.string().required("Please enter your password").oneOf([yup.ref('password'),null,"password and confirm password must be same"])
})

export const loginSchema=yup.object({
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(9).required("Please enter your password"),
})

export const emailSchema=yup.object({
    email:yup.string().email().required("Please enter your email")
})

export const resetPasswordSchema=yup.object({
    password:yup.string().min(9).required("Please enter your password"),
})

export const addCourseSchema=yup.object({
    title:yup.string().min(8).max(60).required("title can not be empty"),
    about:yup.string().min(30).max(150).required("about can not be empty"),
    language:yup.string().min(4).required("language can not be empty"),
    level:yup.string().min(3).required("level can not be empty"),
    category:yup.string().min(3).required("category can not be empty"),
    subTitle:yup.string().min(8).max(40).required("subTitle can not be empty")
})

export const updateUserSchema=yup.object({
    firstName:yup.string().min(3).max(15).required(" first name can not be empty"),
    lastName:yup.string().min(3).max(10).required("last name can not be empty"),
    phone:yup.number().min(10).max(12).required("phone number  can not be empty")
})


export const changePasswordSchema=yup.object({
    oldPassword:yup.string().min(9).required("Please enter your password"),
    newPassword:yup.string().min(9).required("Please enter your password"),
    confirmPassword:yup.string().required("Please enter your password").oneOf([yup.ref('newPassword'),null,"password and confirm password must be same"])
})
