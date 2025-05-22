import { deleteDoc, doc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../../firebase/config"

export const deleteNote = async (uid = '', noteID = '') => {
  if (!uid) throw new Error('The user uid does not exist')

  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${noteID}`)
  await deleteDoc(docRef)
}