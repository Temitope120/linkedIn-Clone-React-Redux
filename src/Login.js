import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import { auth } from './firebase';


function Login() {
    // states
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    // end state

    // functions
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            const userAuth = userCredential.user;
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photoURL,

            }))
        }).catch(error => alert(error));

    }

    
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            console.log("User credential: ", userCredential);
            const userAuth = userCredential.user;


            userAuth.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
                .then(() => {
                    dispatch(
                        login({
                            email: userAuth.email,
                            uid: userAuth.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        }))
                }).catch((error) => {
                    console.error("Error updating profile: ", error);
                    alert(error.message);
                })
                .catch((error) => {
                    console.error("Error registering user: ", error);
                    alert(error.message);
                });
        })
    }
    // end functions

    return (
        <div className='login'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxjhkiDOUNi6D-1VCzvWPSWpwt0BkrOrVtw&s" alt="linkedin logo" />

            <form>

                <input type="text" value={name} placeholder='Full name (required if registering)' onChange={e => setName(e.target.value)} />
                <input type='text' value={profilePic} placeholder='Profile pic url (optional)' onChange={e => setProfilePic(e.target.value)} />

                <input type='email' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <input type='password' value={password} placeholder='Password ' onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={loginToApp}> Sign In</button>
                <p>
                    Not a Member? {""} <span className='login__register' onClick={register}>Register now</span>
                </p>
            </form>
        </div>
    )
}

export default Login
