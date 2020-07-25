import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Ian Tucker" avatar="https://randomuser.me/api/portraits/men/0.jpg" online />
      <Contact name="Chad Vargas" avatar="https://randomuser.me/api/portraits/men/60.jpg" online={false} />
      <Contact name="Beverly Brown" avatar="https://randomuser.me/api/portraits/women/59.jpg" online />
    </div>
  );
}

export default App;
