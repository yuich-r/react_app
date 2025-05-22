import React from 'react';
import './css/Sidebar.css';

function Sidebar(props) {
  console.log(props)
  return (
    <aside>
      <h3>目次</h3>
      <ol>
        {props.titledata.map(item => (
          < li key={item.id} >
            <a href={"#" + item.titleid}>{item.title}</a>
          </li>
        ))}
      </ol>
    </aside >
  );
}

export default Sidebar;