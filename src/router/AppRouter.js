import React, { useContext } from 'react'
import { BrowserRouter as Router, 
         Routes, 
         Route, 
         Navigate,
         Outlet,
         useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MovieDetail from '../pages/MovieDetail';
import { AuthContext } from '../context/AuthContext'

const AppRouter = () => {
  const currentUser = useContext(AuthContext);
  
  function PrivateRouter() {
    let location = useLocation();
    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route element={<PrivateRouter />}>
            <Route path="/details/:id" element={<MovieDetail/>} />
          </Route>
          
          {/* <Route path="/details/:id" 
          element={
            currentUser 
            ? <MovieDetail/> 
            : <Navigate to="/login" replace/>}
          /> */}

        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
