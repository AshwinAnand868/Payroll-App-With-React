import React, {Component} from 'react'; 
import getCurrentDate from './utils/getCurrentDate';
class Footer extends Component {

    constructor(props){
        super(props);

        this.state = {
            copyrightYear: 2022,
            dateUpdated: getCurrentDate()
        }
    }


    render(){
        return (
            <div>
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">
                        <p>&copy; {this.state.copyrightYear} Copyright: <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a></p>
                        <p>Updated on {this.state.dateUpdated}</p>
                    </div>
                </footer> 
            </div>

        );
    }
}

export default Footer;