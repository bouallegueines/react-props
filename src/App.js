import './App.css';

import React from 'react'
import photo from './ines.jpg'
import Profile from './profile/profile'
function App() {
  const handleName = (fullName) => alert(fullName);
  console.log(photo)
    return (
    <div className="App">
     <Profile  fullName={"Bouallegue Ines"}
      profession ={"Web Developer"}
      bio={"Profession hautement technique, le développeur informatique est avant tout un expert des langages informatiques codés. Il est aussi bien capable de concevoir et créer des logiciels, applications et/ou sites web, que de tester et améliorer ceux qui sont déjà existants "}
      handleName={handleName}

      >
       
        {photo}
        </Profile>
   </div>
  );
}

export default App;
