import React, { useState, useEffect,lazy,Suspense } from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';
import HOC from './Hoc'
const InfinityScroll = lazy(()=> import('./InfinityScroll.js'));

function App() {
  return (
    <>
      <HOC />
      <UserList />
      <Suspense fallback={<div>Loading...</div>}>
          <InfinityScroll/>
      </Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
