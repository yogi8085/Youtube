import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar';
import Feed from '../../Components/Navbar/Feed/Feed';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState('0'); // Initialize with a valid category ID as a string

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
