import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1. Описываем тип состояния (какие данные будут лежать в хранилище)
interface CounterState {
  value: number;
}

// 2. Задаем начальное состояние
const initialState: CounterState = {
  value: 0,
};

// 3. Создаем "срез" (slice) состояния счетчика.
// Он автоматически создаст экшены (actions) и редьюсер (reducer).
const counterSlice = createSlice({
  name: 'counter', // уникальное имя слайса
  initialState,   // начальное состояние
  reducers: {
    // экшен для увеличения на 1
    increment: (state) => {
      state.value += 1;
    },
    // экшен для уменьшения на 1
    decrement: (state) => {
      state.value -= 1;
    },
    // экшен для сброса значения
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Экспортируем автоматически созданные экшены
export const { increment, decrement, reset } = counterSlice.actions;

// 4. Настраиваем и экспортируем глобальное хранилище (store)
const store = configureStore({
  reducer: {
    // Подключаем наш редьюсер счетчика под ключом "counter"
    counter: counterSlice.reducer,
  },
});

// Экспортируем типы для удобной работы с TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
