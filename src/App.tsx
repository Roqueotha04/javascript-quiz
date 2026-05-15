import {Container, Typography, Stack} from '@mui/material'
import { JavaScriptLogo } from './JavascriptLogo'
import './App.css'

function App() {

  return (
    <>
    <Container maxWidth='sm'>
      <Typography variant='h2' component='h1'>
        <Stack direction='row' sx={{ gap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <JavaScriptLogo></JavaScriptLogo>
            <h1>Javascript Quiz</h1>
        </Stack>
        
      </Typography>
      
    </Container>
      
    </>
  )
}

export default App
