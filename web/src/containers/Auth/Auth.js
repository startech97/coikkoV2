import React,{Component} from 'react'
import classes from './Auth.module.css'
import axios from 'axios'
import {connect} from'react-redux'

class Auth extends Component {
    state={
        formControl: {
            code_ou: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    }
    loginHandler= async() =>{
        const authData = {
            code_ou: this.state.formControl.code_ou,
            password: this.state.formControl.password
        }
        axios.post('http://10.0.0.156:3030/login', authData)
        .then(function(response){
            console.log(response.data)
        })
    }
    onChangeHandler=(event) => {
        console.log(`${event.target.name}: `,event.target.value)
        const formControl = {...this.state.formControl}
        const control = {...formControl[event.target.name]}
        control.value = event.target.value
        formControl[event.target.name] =  control
        this.setState({
            formControl
        })

    }
    submitHandler =(event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div className={classes.Auth}>
            <div className="row">
                <div id="login" className="col s12 offset-s0 m6 offset-m3 l4 offset-l4 xl4 offset-xl4">
                <form onSubmit={this.submitHandler}>
                    <div className="input-field">
                    <input  onChange={this.onChangeHandler} className="center" id="code_ou" name="code_ou" type="text" class="validate"  required/>
                    <label for="code_ou" className="center">Код учреждения</label>
                    <span className="helper-text" data-error="Введите код учреждения"></span>
                    </div>
                    <div className="input-field">
                    <input onChange={this.onChangeHandler} className="center" id="password" name="password" type="password" class="validate"  required/>
                    <label className="center" for="password">Пароль</label>
                    <span className="helper-text" data-error="Введите пароль"></span>
                    </div>
                    <button className={classes.btn} onClick={this.loginHandler} type="submit">Войти</button>
                </form>
                </div>
            </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect()(Auth)