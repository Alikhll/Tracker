import React , {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component{


    constructor(props){
        super(props);
        this.state = {
            username : '',
            password: '',
            usernameUpdated: false,
            passwordUpdated: false
        }
    }

    formValidate(){
        if(!this.state.username || !this.state.password){
            toast.error('Please fill all fields', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        }else {
            let loginValidate = this.props.store.loginValidation(this.state.username , this.state.password);
            if(!loginValidate){
            toast.error('Username or password is wrong', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
            }else{
                toast.success(`Hello ${loginValidate.username}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
            }
        }
    }

    render() {
        return (
            <div className="row justify-content-center main">
                        <ToastContainer />
                        <div className="col col-md-6 col-sm-8 col-xs-12 align-items-center">
                            <div className=" registration-main-box">
                                <h2 className="header">Log In</h2>
                                <div className="text-input-container">
                                    <input id="login-username" className={"text-input " + (this.state.username.length === 0 && this.state.usernameUpdated ? 'empty' : 'filled')} type="text" onChange={(e) => this.setState({username : e.target.value,usernameUpdated : true})} placeholder="Username or Email" autoComplete="off"/>
                                    <label htmlFor="login-username"></label>
                                </div>
                                <div className="text-input-container">
                                    <input id="login-password" className={"text-input " + (this.state.password.length === 0 && this.state.passwordUpdated ? 'empty' : 'filled')} type="password" onChange={(e) => this.setState({password : e.target.value,passwordUpdated: true})} placeholder="Password" autoComplete="off"/>
                                    <label htmlFor="login-password"></label>
                                </div>
                                <div className="text-input-container">
                                    <div className="row justify-content-center">
                                        <div className="col col-md-6 col-sm-6 col-xs-12 justify-content-center">
                                            <button className="primary-button" onClick={() => this.formValidate()}>Login</button>
                                        </div>
                                        <div className="col col-md-6 col-sm-6 col-xs-12 content-box">
                                            New user?
                                            <span className="internal-link" onClick={() => this.props.onUpdate()}> Create an account</span>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="another-login-ways-container">
                                <p>Login with social platforms</p>
                                <div className="row social-platforms-container">
                                    <div className="col">
                                        <span className="fa fa-google-plus"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-twitter"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-facebook"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-linkedin"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}