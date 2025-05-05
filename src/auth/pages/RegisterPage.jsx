import { Link as RouterLink } from 'react-router'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  displayName: 'Rob Rondon',
  email: 'robrondon@aptugo.com',
  password: '123456'
}

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange } = useForm(formData)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ displayName, email, password })
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
            />
          </Grid>

          <Grid
            container
            size={12}
            spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid size={{ xs: 12, sm: 12 }}>
              <Button
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
