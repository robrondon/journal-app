import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaveOutlined, UploadFileOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal'

export const NoteView = () => {
  const dispatch = useDispatch()
  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(activeNote)
  const fileInputRef = useRef()

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [dispatch, formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Updated note', messageSaved, 'success')
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return
    console.log('Subiendo archivos')
    dispatch(startUploadingFiles(target.files))
  }

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>
      <Grid>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color='primary'
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container size={12}>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Add a title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What happened today?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery images={activeNote.imageUrls} />
    </Grid>
  )
}
