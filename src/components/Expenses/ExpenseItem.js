import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  //const [title, setTitle] = useState(props.title)

  const handleClick = () => {
    console.log('lalala')
  }
  
  return (
    <Card>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
      </div>
      <button onClick={handleClick}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;