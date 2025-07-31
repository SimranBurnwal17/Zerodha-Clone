import React from 'react';

function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>

        <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Algo & strategy platform</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Options trading platform</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Asset Management</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Bonds trading platform</p>
          </div>

        <div className="col-lg-4 col-md-4 col-sm-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{ width: '100%', height: 'auto' }} />
            <p className="text-small text-muted">Insurance</p>
          </div>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "20%", margin: "0 auto" }} >Signup now</button>
      </div>
    </div>
  );
}

export default Universe;
