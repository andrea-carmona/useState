import React from 'react'
import './App.css';

const FACTOR = 20

function App() {
  const [showHide, setShowHide] = React.useState(false);
  const [inputClear, setInputClear] = React.useState('');
  const [reversedStr, setReversedStr] = React.useState('');
  const [stringsToReverse, setStringToReverse] = React.useState('');
  const [fontSize, setFontSize] = React.useState(10);
  const increaseFontSize = () => {
    setFontSize(fontSize + FACTOR);
  }
  const decreaseFontSize = () => {
````
    setFontSize(fontSize - FACTOR);
  }
  const onShowHide = () => {

    setShowHide(!showHide);
  }
  const shPosition = showHide ? 'Hide' : 'Show';

  const handleInputClear = () => {

    setInputClear('');
  }
  const handleStrToReverse = (e) => {

    const {value} = e.target;
    const reverse = value.split('').reverse().join('');

    setStringToReverse(value)
    setReversedStr(reverse)
  }

  return (
    <div className="App">
      <div className="container">
      <div>
        <button className= 'showhide' onClick={onShowHide}>
        {shPosition}
        </button>
        {showHide && <p>Mi manada</p>}
      </div>
      <br />
      <br />
      <div>
        <input type="text" value={inputClear} onChange={(e) => setInputClear(e.target.value)} />
        <button onClick={handleInputClear}>Clear</button>
      </div>
      <br />
      <br />
      <div>
        <input type="text" value={stringsToReverse} onChange={handleStrToReverse}/>
        <p>{reversedStr}</p>
      </div>
      <br />
      <br />
      <div>
        <button className='text-display-btn' onClick={increaseFontSize}>+ Bigger</button>
        <button className='text-display-btn' onClick={decreaseFontSize}>- Smaller</button>
        <p style={{fontSize: `${fontSize}px`}}> Change The Text Size </p>
      </div>
    </div>
    </div>
  );
}

export default App;







