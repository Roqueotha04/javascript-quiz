import {IconButton, Stack, Typography, Card, List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { type Question as QuestionType } from "../types.d"

const Question = ({info} : {info: QuestionType}) =>{
    return (
        <Card variant="outlined">

        <Typography variant='h5'>
            {info.question}
        </Typography>

            {info.code}
        
        <List sx={{bgcolor: '#333'}}>
            {info.answers.map((answer, index) =>(
                <ListItem key={index}>
                    <ListItemButton>
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