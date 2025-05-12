import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { setActiveNote } from '../../store/journal'

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch()

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  const newBody = useMemo(() => {
    return body.length > 40 ? body.substring(0, 40) + '...' : body
  }, [body])

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }))
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
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
