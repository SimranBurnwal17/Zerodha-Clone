import React from 'react';
function Brokerage() {
    return (
        <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className='text-muted mt-3 fs-5'>Free equity investments and flat 20 traday and F&O trades</h3>
        </div>
        <div className="row p-5 text-center border-top">
        <div className="col-8 p-4">
            <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
            <ul className='text-muted' style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of Rs50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged Rs20 per contract note. Courier charges apply.</li>
                <li>For NRI account(non-PIS), 0.5% or Rs 100 per executed order for equity(whichever is lower).</li>
                <li>For NRI account(PIS), 0.5% or Rs 200 per executed order for equity(whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged Rs 40 per executed order instead of Rs20 per executed order.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
            <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
        </div>
      </div>
    </div>
    );
}

export default Brokerage;