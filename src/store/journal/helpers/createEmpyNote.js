import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../../firebase/config"

export const createEmptyNote = async (uid = '') => {
  if (!uid) throw new Error('The user uid does not exist')

  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime()
  }

  const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
  await setDoc(newDoc, newNote)

  newNote.id = newDoc.id

  return newNote
}