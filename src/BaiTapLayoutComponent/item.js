import React from 'react'

export default function Item() {
  return (
    <div id='item' className='row'>
      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
          <i class="fa-regular fa-window-restore bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">Fresh new layout</h4>
          <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
        </div>
      </div>

      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
          <i class="fa-solid fa-cloud-arrow-down bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">Free to download</h4>
          <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
        </div>
      </div>

      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
          <i class="fa-solid fa-newspaper bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">Jumbotron hero header</h4>
          <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
        </div>
      </div>

      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
        <i class="fa-brands fa-bootstrap bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">Feature boxes</h4>
          <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
        </div>
      </div>

      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
        <i class="fa-solid fa-code bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">Simple clean code</h4>
          <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
        </div>
      </div>

      <div className="card col-4" style={{ width: 400 }}>
        <div className='Item-logo p-3'>
        <i class="fa-regular fa-circle-check bg-primary p-3"></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">A name you trust</h4>
          <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
        </div>
      </div>
    </div>
  )
}
