import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function AdminLogin() {

    const handleSubmit = async (event) => {

        event.preventDefault()

        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        }

        const JSONdata = JSON.stringify(data)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSONdata,
        }

        const response = await axios.post("login/check-login", options);

        // const result = await response.json()

        alert(`Is this your full name:`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <form onSubmit={ handleSubmit } action="/admin-login-check" method="POST" className="form-signin" data-bitwarden-watching="1">
                        <div className="text-center mb-4">
                            <h1 className="h3 mb-3 font-weight-normal">Admin Login { 'test'}</h1>
                        </div>

                        <div className="form-label-group">
                            <label htmlFor="inputEmail">Email address</label>

                            <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required
                                   autoFocus=""/>
                        </div>

                        <br/>

                        <div className="form-label-group">

                            <label htmlFor="inputPassword">Password</label>

                            <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password"
                                   required />

                        </div>

                        <div className="checkbox mb-3 mt-2">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}