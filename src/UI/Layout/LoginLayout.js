import React, {Components} from 'react';
import Header from './../Header';
import Footer from './../Footer';

const loginlayout = (props) => {
    return (
        <div>
                Login Layout <hr />
                {props.children}
           
        </div>
    )
}

export default loginlayout;