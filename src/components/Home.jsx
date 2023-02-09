import { useState } from 'react';
import { useFetchDB } from './useFetchDB';
import GroupForm from './GroupForm';
import './Home.css';
import AccountForm from './AccountForm';

const Home = () => {
  const { documents } = useFetchDB('groups');
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    userChoice: '',
    name: '',
    amount: '',
  });

  const componentList = [
    <GroupForm
      groups={documents}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <AccountForm
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];

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

      {showForm && <div>{componentList[page]}</div>}

      {/* {showForm && (
        <GroupForm
          groups={documents}
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      )}
      {showForm && (
        <AccountForm
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      )} */}
    </div>
  );
};

export default Home;
