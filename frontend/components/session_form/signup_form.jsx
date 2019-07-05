import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      zip_code: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  handleErrors(string){
    let idx = this.props.errors.session.findIndex(error => error.includes(string))
    return <p>{this.props.errors.session[idx]}</p>;
  }

  render() {
    return (
      <div className="signup-page">
      <div className="signup-form-container center-div">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br/>
          <div className="signup-form">
            <div className="signup-form-logo">
            <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9151d6578f32165ee641db37cc2f3322/taskrabbit.jpg" width="200" height="124" />
            </div>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
              />
              {this.handleErrors("Email")}
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
              />
              {this.handleErrors("Password")}
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
                placeholder="First Name"
              />
              {this.handleErrors("First")}
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
                placeholder="Last Name"
              />
              {this.handleErrors("Last")}
              <input type="number"
                value={this.state.zip_code}
                onChange={this.update('zip_code')}
                className="signup-input"
                placeholder="Zip Code"
              />
              {this.handleErrors("Zip")}
            <input className="session-submit" type="submit" value="Create Account" />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignupForm;