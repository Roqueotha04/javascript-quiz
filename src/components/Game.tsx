import {Typography, Card, List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { type Question as QuestionType } from "../types.d"
import { green } from "@mui/material/colors"

const Question = ({info} : {info: QuestionType}) =>{
    const selectAnswer = useQuestionsStore (q => q.selectAnswer)

    const createHandleClick = (answerIndex : number) => () =>{
        selectAnswer(info.id, answerIndex)
    }

    const getBackgroundColor = (index: number) =>{
        const {userSelectedAnswer, correctAnswer} = info

        if(userSelectedAnswer==null) return 'transparent'
        if(index!=correctAnswer && index != userSelectedAnswer) return'transparent'
        if(index===correctAnswer) return 'green'
        if (index=== userSelectedAnswer) return 'red'

        return 'transparent'
    }

    return (
        <Card variant="outlined">

        <Typography variant='h5'>
            {info.question}
        </Typography>

            {info.code}
        
        <List sx={{bgcolor: '#333'}}>
            {info.answers.map((answer, index) =>(
                <ListItem key={index}>
                    <ListItemButton onClick={createHandleClick(index)}
                    disabled={info.userSelectedAnswer!=null}
                    sx={{
                        backgroundColor : getBackgroundColor (index)   
                    }} >
                        <ListItemText primary={answer}>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Card>
    )
}

export const Game = () =>{
    const questions = useQuestionsStore((state) => state.questions)
    const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
    const questionInfo = questions[currentQuestion]
    return (
        <>
        <Question info={questionInfo} ></Question>
        </>
    )
}