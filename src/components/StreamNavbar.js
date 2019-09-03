
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

export default function StreamNavbar() {
  return (
    <div className="ui scondary pointing menu ">
      <Link to="/" className="item"> Stream</Link>
      <div className="right menu">
      <Link to="/" className="item"> All streams</Link>
      <GoogleAuth/>
      </div>
    </div>
  )
}
