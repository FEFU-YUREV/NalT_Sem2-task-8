import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { quiz } from "../quizData"
import Matching from "./Matching"

function Quiz() {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const [results, setResults] = useState<number[] | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleCheck = () => {
    const newResults = quiz.map((item, index) => {
      let correct = 0;
      const currentList = lists[index];
      if (currentList) {
        item.tasks.forEach((task, i) => {
          if (task.answer === currentList[i]) {
            correct++;
          }
        });
      }
      return correct;
    });
    setResults(newResults);
  };

  const handleRestart = () => {
    setResults(null);
    setResetKey(prev => prev + 1);
  };
   
  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={`${item.id}-${resetKey}`} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
                {index + 1}. { item.title }
          </Typography>
          <Matching index={index} tasks={item.tasks} />
        </Box>
        ))}
      <Box sx={{ display: 'flex', justifyContent:'space-around', mt: 4 }}>
        <Button variant="contained" onClick={handleCheck}>Проверить</Button>
        <Button variant="contained" onClick={handleRestart}>Начать снова</Button>
      </Box>

      {results && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Результаты теста</Typography>
          {results.map((score, index) => {
             const allCorrect = score === quiz[index].tasks.length;
             return (
               <Typography key={index} variant="body1">
                 Задание {index + 1}. {allCorrect ? 'Все ответы верные.' : `Верных ответов: ${score}.`}
               </Typography>
             );
          })}
        </Box>
      )}
    </Container>
  );
}

export default Quiz
