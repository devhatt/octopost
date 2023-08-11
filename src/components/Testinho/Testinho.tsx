import React, { useState } from 'react';

const Testinho = ({ name = 'World' }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Testinho;
