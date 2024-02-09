import HandIcon from './HandIcon';

const style = { //주의:속성명은 카멜표기법
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: `url('./assets/purple.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button style={style} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;