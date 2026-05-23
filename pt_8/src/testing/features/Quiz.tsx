import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { quiz } from "../quizData";
import Matching from "./Matching";
import Sorting from "./Sorting";
import Choice from "./Choice";

function Quiz() {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const [results, setResults] = useState<number[] | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleCheck = () => {
    const newResults = quiz.map((item, index) => {
      let correct = 0;
      const currentList = lists[index];
      
      if (!currentList) return 0;

      if (item.type === 'M') {
         if (item.tasks) {
           item.tasks.forEach((task, i) => {
             if (task.answer === currentList[i]) {
               correct++;
             }
           });
         }
      } else if (item.type === 'S') {
         if (item.answer) {
             const answerArr = item.answer as string[];
             answerArr.forEach((ans, i) => {
                 if (ans === currentList[i]) {
                     correct++;
                 }
             });
         }
      } else if (item.type === 'C') {
         if (item.multiple) {
            const correctAnswer = item.answer as string[];
            const userAnswer = currentList as string[];
            // check if length is the same and every selected answer is in the correct answer array
            if (correctAnswer.length === userAnswer.length && userAnswer.every(ans => correctAnswer.includes(ans))) {
                correct = 1;
            }
         } else {
             if (currentList[0] === item.answer) {
                 correct = 1;
             }
         }
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
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 600 }}>
        Проверка знаний
      </Typography>
      {quiz.map((item, index) => (
        <Box key={`${item.id}-${resetKey}`} component="section" sx={{ m: 2, p:3, bgcolor: '#f5f5f7', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
                {index + 1}. { item.title }
          </Typography>
          {item.type === 'M' && item.tasks && <Matching index={index} tasks={item.tasks} />}
          {item.type === 'S' && item.tasks && <Sorting index={index} tasks={item.tasks} />}
          {item.type === 'C' && item.options && <Choice index={index} options={item.options} multiple={item.multiple} />}
        </Box>
        ))}
      <Box sx={{ display: 'flex', justifyContent:'center', gap: 3, mt: 4 }}>
        <Button variant="contained" size="large" onClick={handleCheck} sx={{ bgcolor: '#1d1d1f' }}>Проверить</Button>
        <Button variant="outlined" size="large" onClick={handleRestart} sx={{ color: '#1d1d1f', borderColor: '#1d1d1f' }}>Начать снова</Button>
      </Box>

      {results && (
        <Box sx={{ mt: 4, textAlign: 'center', bgcolor: '#e8e8ed', p: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>Результаты теста</Typography>
          {results.map((score, index) => {
             const maxScore = quiz[index].type === 'M' || quiz[index].type === 'S' ? quiz[index].tasks?.length || 1 : 1;
             const allCorrect = score === maxScore;
             return (
               <Typography key={index} variant="body1" sx={{ color: allCorrect ? 'success.main' : 'error.main', mb: 1 }}>
                 Задание {index + 1}. {allCorrect ? 'Верно.' : (quiz[index].type === 'C' ? 'Неверно.' : `Верных ответов: ${score} из ${maxScore}.`)}
               </Typography>
             );
          })}
        </Box>
      )}
    </Container>
  );
}

export default Quiz;
