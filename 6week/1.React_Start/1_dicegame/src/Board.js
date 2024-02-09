import Dice from './Dice';

function Board({name, color, gameHistory}) {
  const num = gameHistory[gameHistory.length -1] || 1;
  const sum = gameHistory.reduce((a,b) => a+b,0); //reduce는 하나의 값으로 줄여서 리턴(a에 값 누적)
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num}/>
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(', ')}</p> {/*join은 따옴표 안의 문자로 값을 이어지게 함 */}
    </div>
  );
}

export default Board;
