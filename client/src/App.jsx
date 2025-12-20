import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/Auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

import Protect from './comp/Protect';
import Public from './comp/Public';

function App(){
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={
            <Public>
              <Login />
            </Public>
          } />
          <Route path="/register" element={
            <Public>
              <Register />
            </Public>
          } />
          <Route path="/" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/quiz/:subject" element={
            <Protect>
              <Quiz />
            </Protect>
          } />
          <Route path="/result/:id" element={
  <Protect>
    <Result />
  </Protect>
} />

        </Routes> 

      </AuthProvider>
    </Router>
  );

}

export default App;