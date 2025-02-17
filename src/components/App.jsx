import { Header } from "./Header"
import { Footer } from "./Footer"
import { Note } from "./Notes/Note"
import notes from '../notes'

const createNote = (note) =>{
  return (
    
    <Note 
      key = {note.key}
      title={note.title}
      content={note.content}  
    ></Note>
  )
}

function App() {
  return (
    <>
      <Header></Header>
      {notes.map(createNote)}
      <Footer></Footer>
    </>
  )
}

export default App
