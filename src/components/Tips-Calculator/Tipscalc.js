import React from 'react';
import "./Tipscalc.css";
import Backbtn from '../Backbtn/Backbtn';

function Tipscalc() {
  return (
    <>
      <Backbtn/>
      <body className='calc-body'>
          <div className="calc-container">
    <h1>SPLI<br/>TTER</h1>
    <div className="calc-main">
      <div className="calc-content">

        <div className="calc-content-left">
          <div className="calc-bill">Bill</div>
          <input type="text"></input>
          <div className="calc-select-tip">
            Select Tip %
          </div>
          <div className="calc-content-grid">
            <div className="calc-grid-item">5%</div>
            <div className="calc-grid-item">10%</div>
            <div className="calc-grid-item">15%</div>
            <div className="calc-grid-item">25%</div>
            <div className="calc-grid-item">50%</div>
            <div className="calc-custom-item"><input type="text" placeholder="Custom"></input></div>
          </div>
          <div className="calc-num-people">Number of People</div>
          <div className="calc-people">
           <input type="text"></input>
          </div>
        </div>

        <div className="calc-content-right">
          <div className="calc-tip-amount">
            <div className="calc-tip-left">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="calc-tip-right">
            $4.27
          </div>
          </div>
          <div className="calc-total-amount">
            <div className="calc-total-left">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="calc-total-right">
            $32.79
          </div>
          </div>
          <div className="calc-btn-reset">
            reset
          </div>
        </div>
      </div>
    </div>
</div>
      </body>
    </>
  )
}

export default Tipscalc