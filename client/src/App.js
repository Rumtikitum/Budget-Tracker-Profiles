import React, { useState } from 'react';
import Nav from './components/Nav';
import Budget from './components/Budget';
import Goal from './components/Goal';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Budget',
      description: 'Initial budget entered to create status for goal',
    },
    { name: 'Goal', description: 'Status of budget to set goal' },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Goal currentCategory={currentCategory}></Goal>
            <Budget></Budget>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
