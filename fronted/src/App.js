import './App.css';
import Form from './components/Form';
import {UserList} from './components/UserList';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
    // for storing perpose
    const [userDataFrDb, setUserDataFrDb] = useState(null)
    const bringUserData = async () => {
      const getRes = await axios.get("/getUser");
      console.log(getRes);

      /* If No users are there please don't set/send the value Note : prototype lectures*/
      if (getRes.data.nUser.length > 0) {
        setUserDataFrDb(getRes.data.nUser);
      }
    };
    // befour load refresh we've to use useEffect it's a way to use useEffect for showing edit,update,delete option
  
    useEffect(() => {
      bringUserData();
    }, []);
  
    /*This squere box(arrys) known as dependensis Arrys if we change there 
    it will automatically update bringUserData() */

  return (
    <div>
    <Form bringUserData = {bringUserData}/>
    <UserList usersInfo ={userDataFrDb} bringUserData={bringUserData}/>
    </div>
  );
}

export default App;
