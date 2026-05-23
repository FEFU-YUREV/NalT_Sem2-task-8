import { Box } from '@mui/material';
import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tTasks } from "../quizData";
import SortableList from "./SortableList";
import { addList } from './quizSlice';

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function Sorting({index, tasks}: ComponentProps) {
  const dispatch = useDispatch();

  const answers = useMemo(() => {
    const arr = tasks.map(task => task.answer);
    return arr.sort(() => Math.random() - 0.5);
  }, [tasks]);

  useEffect(() => {
     dispatch(addList({ index, items: answers }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ mt: 2 }}>
       <SortableList index={index} answers={answers} />
    </Box>
  );
}

export default Sorting;
