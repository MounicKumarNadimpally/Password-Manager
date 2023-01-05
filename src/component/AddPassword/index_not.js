import {Component} from 'react'
import './index.css'

class AddPassword extends Component {
  state = {
    passwordList: [],
    webInput: '',
    nameInput: '',
    passwordInput: '',
    searchInput: '',
    showPassword: false,
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="main-img"
          />
        </div>
        <div className="form-container">
          <form className="form">
            <p className="desc">Add New Password</p>
            <div className="">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="website-image"
                alt="website"
              />
              <input className="web-input" placeholder="Enter Website" />
            </div>
            <div className="">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="username-image"
                alt="username"
              />
              <input className="name-input" placeholder="Enter Username" />
            </div>
            <div className="">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="password-image"
                alt="password"
              />
              <input className="password-input" placeholder="Enter Password" />
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="form-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="form-img"
              alt="password manager"
            />
          </div>
        </div>
        <div className="password-viewer">
          <div className="password-responsive">
            <h1 className="heading">Your Passwords</h1>
            <p className="password-count">0</p>
          </div>
          <div className="search-container">
            <div className="search-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-img"
                alt="search"
              />
            </div>
            <input type="Search" className="search-password" />
          </div>
          <hr />
          <div>
            <label>
              <input type="checkbox" placeholder="search" />
              Show Passwords
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPassword
