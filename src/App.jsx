
import './App.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
function App() {

  return (
    <>
      <h1>Material ui</h1>
      <Button variant="text">Outlined</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="outlined" endIcon={<SendIcon />}>send</Button>
    </>
  )
}

export default App
