import { useState } from 'react';
import './Form.css';

const GroupForm = ({ groups, page, setPage, formData, setFormData }) => {
  const [userChoice, setUserChoice] = useState();

  return (
    <div className='add-group-form'>
      {groups.map((group) => (
        <div className='form-group' key={group.id}>
          <div className='card-left'>
            <label>{group.name}</label>
            <p className='info'>{group.info}</p>
          </div>
          <div className='card-right'>
            <input
              type='radio'
              name='group'
              id={group.name}
              value={formData.userChoice}
              onChange={(e) =>
                setFormData({ ...formData, userChoice: e.target.id })
              }
            />
          </div>
        </div>
      ))}

      <button
        className='next-btn'
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default GroupForm;
