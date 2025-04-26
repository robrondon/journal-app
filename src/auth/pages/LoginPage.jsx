import { Link as RouterLink } from 'react-router'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
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
            />
          </Grid>

          <Grid
            container
            size={12}
            spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                <Typography sx={{ ml: 1 }}> Login </Typography>
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
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
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
