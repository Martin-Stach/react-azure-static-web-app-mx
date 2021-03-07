import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var today = new Date();
var birthDay = new Date(2020, 8, 7) // month is indexed with 0
var calcBirthDay = new Date(2020, 8, 17)
// var ageMonth = new Vue({
//     el: '#age-month',
//     data: {
//         // message: 'Alter in Monaten ' + (new Date.UTC() - new Date(2020, 09, 17)).toLocaleString()
//         // getTime in milliseconds
//         message:
//             Math.floor((today - birthDay) / (1000 * 3600 * 24)) + " taged seid Geburt. " +
//             ((today - birthDay) / (1000 * 3600 * 24 * 7)).toPrecision(2) + " wochen seid Geburt. " +
//             ((today - birthDay) / (1000 * 3600 * 24 * 30)).toPrecision(2) + " monate seid Geburt. " +
//             Math.floor((today - calcBirthDay) / (1000 * 3600 * 24)) + " tage von errechnetem Termin " +
//             ((today - calcBirthDay) / (1000 * 3600 * 24 * 7)).toPrecision(2) + " wochen von errechnetem Termin " +
//             ((today - calcBirthDay) / (1000 * 3600 * 24 * 30)).toPrecision(2) + " monate von errechnetem Termin "
//     }
// })
