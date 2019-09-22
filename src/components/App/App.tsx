import React from 'react';
import Button from '../Button';

import './App.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Button
        onClick={() => console.log('click')}
        label="default"
        className="custom-class"
      />

      <Button
        onClick={() => console.log('click')}
        label="active"
        active={ true }
      />

      <Button
        onClick={() => console.log('click')}
        label="href"
        href="https://www.google.com"
        target="_blank"
      />

      <Button
        onClick={() => console.log('click')}
        label="href"
        disabled
      />

      <Button
        onClick={() => console.log('click')}
        label="disabled"
        disabled
      />

      <Button
        onClick={() => console.log('click')}
        label="data"
        data-action="add"
      />
    </React.Fragment>
  );
};

export default App;
