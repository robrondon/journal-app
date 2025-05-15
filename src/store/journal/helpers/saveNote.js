import { doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../../firebase/config"

export const saveNote = async (uid = '', note = {}) => {
  if (!uid) throw new Error('The user uid does not exist')

  const { id, ...newNote } = note

  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${id}`)
  await setDoc(docRef, newNote, { merge: true })
}