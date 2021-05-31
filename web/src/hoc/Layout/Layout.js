
import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import classes from './Layout.module.css'



class Layout extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    {this.props.children}
                </div>
            </React.Fragment>

        )
    }
}

export default Layout