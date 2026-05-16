import {Container, Typography, Stack} from '@mui/material'
import { JavaScriptLogo } from './JavascriptLogo'
import { Start } from './components/Start'
import './App.css'
import { useQuestionsStore } from './store/questions'
import { Game } from './components/Game'

function App() {
  const questions = useQuestionsStore((state) => state.questions)
  console.log(questions)

  return (
    <>
    <Container maxWidth='sm'>
      <Typography variant='h2' component='h1'>
        <Stack direction='row' sx={{ gap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <JavaScriptLogo></JavaScriptLogo>
            <h1>Javascript Quiz</h1>
        </Stack>
        
      </Typography>
      
      {questions.length == 0 && <Start></Start>}
      {questions.length > 0 && <Game></Game>} 
    </Container>
    
      
    </>
  )
}

export default App
