import React from 'react';
import './home.css';
import Dashboard from './Dashboard/Dashboard.jsx';
import Myprojects from './Myprojects.jsx';
import Add from './Add.jsx';
import ContactUs from '../../Component/ContactUs/ContactUs.jsx';

function Home({ notes, previousYearQuestions,projects, auth }) {
  console.log(projects);

  return (
    <div className="home">
      <Dashboard notes={notes}  previousYearQuestions={previousYearQuestions}  auth={auth} />
      <Add />
      <Myprojects notes={notes} previousYearQuestions={previousYearQuestions} projects={projects}  auth={auth} />
      <ContactUs />
    </div>
  );
}

export default Home;
