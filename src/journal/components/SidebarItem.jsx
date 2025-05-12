import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { useMemo } from 'react'

export const SidebarItem = ({ title = '', body }) => {

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  const newBody = useMemo(() => {
    return body.length > 40 ? body.substring(0, 40) + '...' : body
  }, [body])

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
