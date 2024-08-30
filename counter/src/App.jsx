
import './App.css'
import CounterComponent from './components/Counter'
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>{count}</h1>
      <CounterComponent />
    </>
  )
}

export default App
