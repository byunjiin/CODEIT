import Board from './Board';
import Button from './Button';
import { useState } from 'react';
import './App.css';

function random(n){
  return Math.ceil(Math.random() * n); // 올림
}

function App(){
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]); // state를 수정하는 방법
    setOtherHistory([...otherHistory, nextOtherNum]); // state를 수정하는 방법
  };

  const handleClearClick = () => {
    setMyHistory([]); // 빈배열
    setOtherHistory([]); // 빈배열
  };

  return (
    <div className='App'>
      <div>
        <Button className='App-button' onClick={handleRollClick}>던지기</Button>
        <Button className='App-button' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory}/>
        <Board name="상대" color="red" gameHistory={otherHistory}/>
      </div>
    </div>
  );
}

export default App;