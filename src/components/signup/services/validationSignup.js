import * as Yup from 'yup';

export const signupScheme = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  username: Yup.string()
    .required('Username is required')
    .matches(/^\S*$/, 'Username cannot contain spaces'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
});
