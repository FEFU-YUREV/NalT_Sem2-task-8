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
    return arr.sort(() => Math.random() - 0.5);
  }, [tasks]);

  useEffect(() => {
     dispatch(addList({ index, items: answers }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <List sx={{ p: 0 }}>
          {tasks.map((item, i) => (
          <ListItem key={i} sx={{ p: 0, mb: 1 }}>
            <ListItemButton 
              sx={{
                border: '1px solid #d2d2d7',
                borderRadius: '8px',
                bgcolor: '#fff',
                cursor: 'default',
                minHeight: '56px',
                '&:hover': { bgcolor: '#fff' }
            }}>
              <ListItemText primary={item.question} />
           </ListItemButton>
          </ListItem> 
          ))}
        </List>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <SortableList index={index} answers={answers} />
      </Grid>
    </Grid> 
  );
}

export default Matching;
