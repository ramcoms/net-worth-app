import { useState } from 'react';
import { useFetchDB } from './useFetchDB';
import GroupForm from './GroupForm';
import './Home.css';

const Home = () => {
  const { documents } = useFetchDB('groups');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='home'>
      <div className='header'>
        <h2>net worth</h2>
        {showForm && (
          <button className='hide-btn' onClick={() => setShowForm(false)}>
            ^
          </button>
        )}
        {!showForm && (
          <button className='add-btn' onClick={() => setShowForm(true)}>
            +
          </button>
        )}
      </div>
      {showForm && <GroupForm groups={documents} />}
    </div>
  );
};

export default Home;
