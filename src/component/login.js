import React from 'react'

export default function login() {
  return (
    <form className="login-form">
        <label className="">E E C - D a s h b o a r d</label>

        <div className="username loginBlock">
          <label>Username</label>
          <input type="text" placeholder="Username"></input>
        </div>

        <div className="password loginBlock">
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>

        <input type="submit" value="Login" href="www.google.com/" target="_blank" className="loginBlock"></input>

        <div className="loginBlock">
          <label>Don't have an Account?</label>
          <a href="contactAdmin">Contact Administrator</a>
        </div>
      </form>
  )
}
