import React, { useState } from 'react';

const Testinho = ({ name = 'World' }) => {
  const [clicked, setClicked] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleButtonClick = () => {
    if (!clicked) {
      setNewName(name);
    } else {
      setNewName('clicou');
    }
    setClicked(!clicked);
  };

  const Button = () => <button onClick={handleButtonClick}>Click Me</button>;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h1>{newName}</h1>
      <Button />
    </div>
  );
};

export default Testinho;
