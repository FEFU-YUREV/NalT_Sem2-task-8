import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, increment, decrement, reset } from './store';

function App() {
  // 1. Получаем значение счетчика из Redux Store с помощью useSelector.
  // Мы обращаемся к state.counter, так как при настройке store указали ключ counter.
  const count = useSelector((state: RootState) => state.counter.value);

  // 2. Получаем функцию dispatch. Через нее мы отправляем экшены в store.
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Простой кликер на Redux</h1>
      
      {/* Выводим текущее значение счетчика из хранилища */}
      <div style={{ fontSize: '64px', fontWeight: 'bold', margin: '30px' }}>
        {count}
      </div>

      {/* Кнопки управления отправляют экшены через dispatch */}
      <div>
        <button 
          onClick={() => dispatch(decrement())} 
          style={{ fontSize: '24px', padding: '10px 20px', margin: '10px', cursor: 'pointer' }}
        >
          - 1
        </button>
        
        <button 
          onClick={() => dispatch(reset())} 
          style={{ fontSize: '24px', padding: '10px 20px', margin: '10px', cursor: 'pointer' }}
        >
          Сбросить
        </button>

        <button 
          onClick={() => dispatch(increment())} 
          style={{ fontSize: '24px', padding: '10px 20px', margin: '10px', cursor: 'pointer' }}
        >
          + 1
        </button>
      </div>
    </div>
  );
}

export default App;
