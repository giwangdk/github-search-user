/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import './App.css'
import { Search, Header, CardResult } from './components'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';


function App() {

  const [data, setData] = useState(null);

  const getDefaultData = async () => {
    try {
      const res = await axios.get('https://api.github.com/users/giwangdk')
      setData(res.data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDefaultData()
  }, []);

  console.log("data", data);
  
  return (
    <div class="App">
      <div className="  sm:my-20 w-auto  p-5 sm:w-2/3 lg:w-7/12 md:m-auto m-5">
      <Header/>
      <Search/>
        <CardResult data={data}/>
      </div>
      </div>
  );
}

export default App;
