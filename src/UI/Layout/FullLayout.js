import React, {Components} from 'react';
import Header from './../Header';
import Footer from './../Footer';

const fulllayout = (props) => {
    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default fulllayout;