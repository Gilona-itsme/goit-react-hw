import React, { Component } from "react";
import shortid from "shortid";

const Subscription = {
  FREE: "free",
  PRO: "pro",
  PREMIUM: "premium",
};

export default class SingUpForm extends Component {
  state = {
    email: "",
    password: "",
    age: "",
    agreed: false,
    subscription: null,
  };

  loginInputId = shortid.generate();

  handleFormChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleSubscriptionChange = (e) => {
    this.setState({ subscription: e.target.value });
  };

  handleAgreedChange = (e) => {
    this.setState({ agreed: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  render() {
    const { email, password, age, agreed, subscription } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.loginInputId}>
            Email
            <input
              type="email"
              value={email}
              onChange={this.handleFormChange}
              id={this.loginInputId}
              name="email"
            />
          </label>
          <br />
          <label htmlFor={this.loginInputId}>
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleFormChange}
              id={this.loginInputId}
              name="password"
            />
          </label>
          <br />
          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleAgeChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>
          <br />
          <div role="group">
            <label>
              <input
                type="radio"
                value={Subscription.FREE}
                checked={Subscription.FREE === subscription}
                onChange={this.handleSubscriptionChange}
              />
              Free
            </label>
            <label>
              <input
                type="radio"
                value={Subscription.PRO}
                checked={Subscription.PRO === subscription}
                onChange={this.handleSubscriptionChange}
              />
              Pro
            </label>
            <label>
              <input
                type="radio"
                value={Subscription.PREMIUM}
                checked={Subscription.PREMIUM === subscription}
                onChange={this.handleSubscriptionChange}
              />
              Premium
            </label>
          </div>
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleAgreedChange}
            />
            Соглашаюсь с чем-то ...
          </label>
          <br />
          <button type="submit" disabled={!agreed}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
}
