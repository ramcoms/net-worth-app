import { useState } from 'react';
import './Form.css';

const GroupForm = ({ groups }) => {
  const [userChoice, setUserChoice] = useState();

  return (
    <div className='add-group-form'>
      <form>
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
                value={userChoice}
                onChange={(e) => setUserChoice(e.target.id)}
              />
            </div>
          </div>
        ))}

        <button className='next-btn'>></button>
      </form>
    </div>
  );
};

export default GroupForm;
