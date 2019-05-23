//Import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
  const buttonText = { text: 'Click Me!' };
  const labelText = 'Enter Name: ';
  return (
    <div>
      <label htmlFor="name" className="label">{ labelText }</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{ buttonText.text }</button>
    </div>
  );
};

//Show react component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
