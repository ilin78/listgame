import React from 'react';
import {MDCRipple} from '@material/ripple';
function Form() {
    return(
        <form className="signup-form mdc-theme--dark">
            <div className="mdc-textfield">
                <input type="text" name="firstname" className="mdc-textfield__input" placeholder="Имя"></input>
            </div>
            <input type="text" name="lastname" placeholder="Фамилия"></input>
            <input type="email" name="email" placeholder="Email"></input>
            <input type="password" name="password" placeholder="Пароль"></input>
            <button className="mdc-button mdc-button--primary mdc-button--raised">Зарегистрироваться</button>

            <button class="mdc-button">  <span class="mdc-button__ripple"></span> Learn More</button>
        </form>
    );
}


export default Form;