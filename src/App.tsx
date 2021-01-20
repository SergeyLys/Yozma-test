import React from 'react';
import {Global, css} from "@emotion/react";
import {Dictionary} from "./components/Dictionary";
import Store from './store'

const store = new Store();

const App = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #f2f2f7;
        
            #root {
              padding-left: 15px;
              padding-right: 15px;
              position: relative;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          }
      `}
      />
      <Dictionary store={store} />
    </>
  );
}

export default App;
