import axios from "axios";

function Login() {
  let userCred = {};
  function handleSignInChange(e) {
    userCred[e.target.name] = e.target.value;
  }

  function signIn() {
    axios
      .post(`http://localhost:8070/users/signin`, userCred)
      .then(function (response) {
        console.log(response);
        if (response.data !== null && response.data.status) {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userid", response.data.id);
          sessionStorage.setItem("userrole", response.data.role);
          sessionStorage.setItem("username", userCred.username);

          let role = response.data.role;
          if (role === "student") {
            window.location = "/home";
          } else if (role === "supervisor") {
            window.location = "/home";
          } else if (role === "co-supervisor") {
            window.location = "/home";
          } else if (role === "panel-member") {
            window.location = "/pm-evaluations";
          } else if (role === "admin") {
            window.location = "/users";
          } else {
            window.location = "/home";
          }
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className='login-form m-auto border border-1 border-dark rounded rounded-4 p-4'>
      <h4>Please sign in</h4>
      <hr />
      <div className='form-group'>
        <label>Username:</label>
        <input
          className='form-control'
          type='text'
          name='username'
          onChange={handleSignInChange}
        />
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          className='form-control'
          type='password'
          name='password'
          onChange={handleSignInChange}
        />
      </div>
      <br />
      <input
        className='btn btn-primary w-100'
        type='button'
        name='btnSignUp'
        onClick={signIn}
        value='Sign In'
      />
    </div>
  );
}

export default Login;
