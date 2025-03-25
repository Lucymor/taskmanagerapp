import './App.scss';
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import NewTask from './pages/NewTask';
import OngoingTask from './pages/OngoingTask'
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Content from './components/Content';
import { UserContext } from './contexts/UserContext'
import { useState } from 'react';

function App() {

  const [tasklist, setTaskList] = useState([])

  const pages = [
    { name: 'Feladatok', path: '/ongoingtask', menubar: true, element: <OngoingTask tasklist={tasklist} setTaskList={setTaskList}/>, icon: 'task', needsLogin: true },
    { name: 'Új Feladat', path: '/newtask', menubar: true, element: <NewTask tasklist={tasklist} setTaskList={setTaskList} />, icon: 'plus', needsLogin: true },
    { name: 'Belépés', path: '/', menubar: false, element: <Login />, icon: 'user', needsLogin: false },
    { name: 'NotFound', path: '*', menubar: false, element: <PageNotFound />, icon: null, needsLogin: false }
  ];

  const [user, setUser] = useState(null)
  const userValue = {user, setUser}

  return (
    <UserContext.Provider value={userValue}>
      <div className="App">
        <Router>
          <Header menu={pages} />
          <Content routes={pages} />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
