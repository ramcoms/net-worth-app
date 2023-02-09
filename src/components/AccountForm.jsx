import { useState } from 'react';
import './Form.css';

const AccountForm = ({ page, setPage, formData, setFormData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='add-account-form'>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className='form-group'>
          <label>Amount</label>
          <input
            type='text'
            inputMode='decimal'
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>

        <button
          className='back-btn'
          onClick={() => {
            setPage(page - 1);
          }}
        >
          back
        </button>
        <button className='next-btn' onClick={(e) => handleClick()}>
          next
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
