import React, { useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import CalendarviewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { useState } from 'react';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Feed() {
  const user = useSelector(selectUser);
  
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  // if empty array is passed, that would make this hook called just once
  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  }, []);


  const sendPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");

  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendPost} type="submit"> Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#7205F9" />

          <InputOption Icon={SubscriptionIcon} title="Event" color="#7205F9" />

          <InputOption Icon={CalendarviewDayIcon} title="Write Article" color="#7205F9" />
        </div>
      </div>
      {/* posts */}

      {/* <Post name='Adedoyin Funminiyi' description='This is a test post' message='Wow! This works.' /> */}

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}          // Always use a unique key when rendering a list of components
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed


