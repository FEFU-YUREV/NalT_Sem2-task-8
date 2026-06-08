import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ListsState {
  lists: (string | string[])[][]; 
}

const initialState: ListsState = {
   lists: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{index: number; items: any[]}>)=>{
      const { index, items } = action.payload;
      state.lists[index] = items; 
    },
    setDraggedItems: (state, action: PayloadAction<{ index: number; items: any[] }>) => {
        const { index, items } = action.payload;
        if (index >= 0 && index < state.lists.length) {
           state.lists[index] = items; 
        }
    },
    setChoiceAnswer: (state, action: PayloadAction<{ index: number; items: any[] }>) => {
       const { index, items } = action.payload;
       state.lists[index] = items;
    }
  },
});

export const { addList, setDraggedItems, setChoiceAnswer } = listsSlice.actions;
export default listsSlice.reducer;
