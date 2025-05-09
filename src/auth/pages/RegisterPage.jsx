import { Link as RouterLink } from 'react-router'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react';
import { startUserRegister } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [
    [(value) => value.trim().length > 1, 'Full name is required.']
  ],
  email: [
    [(value) => emailRegex.test(value), 'Invalid email address.']
  ],
  password: [
    [(value) => value.trim().length >= 6, 'Password must be have at least 6 characters.'],
    [(value) => /[A-Z]/.test(value), 'Password must contain at least one uppercase letter.'],
    [(value) => /[a-z]/.test(value), 'Password must contain at least one lowercase letter.'],
    [(value) => /\d/.test(value), 'Password must contain at least one number.'],
    [(value) => /[^A-Za-z0-9]/.test(value), 'Password must contain a special character.'],
  ]
}

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formErrors,
    isFormValid,
    onInputBlur,
    touchedFields
  } = useForm(formData, formValidations)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(startUserRegister({ displayName, email, password }))
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid
            size={{ xs: 12 }}
            sx={{ marginTop: 2 }}
          >
            <TextField
              label="Full name"
              type='text'
              placeholder='Full name'
              fullWidth
              name='displayName'
              onChange={onInputChange}
              value={displayName}
              error={!!formErrors.displayName && (!!touchedFields.displayName || formSubmitted)}
              helperText={(touchedFields.displayName || formSubmitted) && formErrors.displayName}
              onBlur={onInputBlur}
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{ marginTop: 2 }}
          >
            <TextField
              label="Email"
              type='email'
              placeholder='email@email.com'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
              error={!!formErrors.email && (!!touchedFields.email || formSubmitted)}
              helperText={(touchedFields.email || formSubmitted) && formErrors.email}
              onBlur={onInputBlur}
            />
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{ marginTop: 2 }}
          >
            <TextField
              label="Password"
              type='password'
              placeholder='Password'
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
              error={!!formErrors.password && (!!touchedFields.password || formSubmitted)}
              helperText={(touchedFields.password || formSubmitted) && formErrors.password}
              onBlur={onInputBlur}
            />
          </Grid>

          <Grid
            container
            size={12}
            spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            {(errorMessage && formSubmitted) && (
              <Grid size={{ xs: 12, sm: 12 }}>
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>
            )}
            <Grid size={{ xs: 12, sm: 12 }}>
              <Button
                disabled={isCheckingAuthentication}
                variant='contained'
                fullWidth
                type='submit'
              >
                <Typography sx={{ ml: 1 }}> Create Account </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}> Already have an account? </Typography>
            <Link
              color='inherit'
              to={'/auth/login'}
              component={RouterLink}
            >
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
