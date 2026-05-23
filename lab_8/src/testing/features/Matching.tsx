import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tTasks } from "../quizData";
import SortableList from "./SortableList";
import { addList } from './quizSlice';

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function Matching({index, tasks}: ComponentProps) {
  const dispatch = useDispatch();

  const answers = useMemo(() => {
    const arr = tasks.map(task => task.answer);
    // Простой алгоритм случайного перемешивания Фишера-Йетса или sort
    return arr.sort(() => Math.random() - 0.5);
  }, [tasks]);

  // Добавляем список ответов очередного задания в хранилище
  useEffect(() => {
     dispatch(addList({ index, items: answers }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <List>
          {tasks.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton 
              sx={{
                border: '1px solid gray',
                borderRadius: '5px',
                textAlign: 'right',
            }}>
              <ListItemText primary={item.question} />
           </ListItemButton>
          </ListItem> 
          ))}
        </List>
      </Grid>

      <Grid size={6}>
        <SortableList index={index} answers={answers} />
      </Grid>
    </Grid> 
  );
}

export default Matching
