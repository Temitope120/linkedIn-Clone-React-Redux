import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import { logout } from "./userSlice";
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

//  to make the registered userr stay logged in // 
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      // const userAuth = userAuth.user;

      if (userAuth) {
        // user is logged in
        dispatch(
          login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.name,
              photoUrl: userAuth.photoURL,
          }))

      }else{
         // user is logged out
         dispatch(logout());
      }
    })
  }, [dispatch])


  return (
    <div className="App">
      {/* header */}
      <Header />

      {!user ? <Login /> :
        <div className="app_body">
          {/* Sidebar */}
          <Sidebar />

          <div className="feed__section">
            <Feed />
          </div>

          <div className="right_widgets">
            <Widgets />
          </div>

        </div>
      }




    </div>
  );
}

export default App;
