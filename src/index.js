import React from 'react';
import { render } from 'react-dom';
//import Hello from './Hello';
import Book from './book.component.js';
import './style.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    {/*<Hello name="CodeSandbox" />
    // <h2>Example {'\u2728'}</h2>*/}
    <form className='fr-main'>
      <field>
      <label className='fr-label'>Book Name </label>
      <input className='fr-input' type='text'/>
      </field>
      <field>
        <label className='fr-label'>Author Name </label>
        <input className='fr-input' type='text' />
      </field>

      <button type='button'> ADD </button>
    </form>
  </div>
);

render(<App />, document.getElementById('root'));
