import React from 'react'

const UserItem = props => {
  return (
    <div>
      <ul>
        <li>
          {props.id}
        </li>
        <li>
          {props.name}
        </li>
        <li>
          <img src = {props.image} width='200px'/>
        </li>
        <li>
          {props.placeCount}
        </li>
      </ul>
    
    </div>
  );
}

export default UserItem;