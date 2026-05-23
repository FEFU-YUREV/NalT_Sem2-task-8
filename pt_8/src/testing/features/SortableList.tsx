import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import List from '@mui/material/List';
import { SortableItem } from '../components/SortableItem';
import { useDispatch, useSelector } from 'react-redux';
import { setDraggedItems } from './quizSlice';
import { RootState } from '../../store';

interface ComponentProps {
    index: number;
    answers: string[];
  }

function SortableList({ index, answers }: ComponentProps ) {
  const dispatch = useDispatch();
  const arr = useSelector((state: RootState) => state.lists.lists[index]);
  const draggedItems = (arr as string[]) || []; 

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
       const oldIndex = draggedItems.indexOf(active.id);
       const newIndex = draggedItems.indexOf(over.id);
       const newList = arrayMove(draggedItems, oldIndex, newIndex);
       dispatch(setDraggedItems({ index, items: newList }));
    } 
  };
 
    return (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ draggedItems } 
                         strategy={verticalListSortingStrategy}>
          <List sx={{ p: 0 }}>
            {draggedItems.map((item) => (
              <SortableItem key={ item } item={ item } />
            ))}
          </List>
        </SortableContext>
      </DndContext>
    );
}

export default SortableList;
