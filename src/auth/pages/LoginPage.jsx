import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: 'robrondon@aptugo.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('On Google SignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
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
              value={email}
              onChange={onInputChange}
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
              value={password}
              onChange={onInputChange}

            />
          </Grid>

          <Grid
            container
            size={12}
            spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                variant='contained'
                fullWidth
                type='submit'
                disabled={isAuthenticating}
              >
                <Typography sx={{ ml: 1 }}> Login </Typography>
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}> Google </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            direction='row'
            justifyContent='end'
          >
            <Link
              color='inherit'
              to={'/auth/register'}
              component={RouterLink}
            >
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
