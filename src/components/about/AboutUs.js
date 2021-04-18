import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './AboutUs.css'
import picture from '../../img/img.png'
import Footer from "../footer/Footer";
import 'bootstrap/dist/js/bootstrap.min'
class AboutUs extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto text-center">
                                <h1>About Us</h1>
                                <p>some text some text some text </p>
                            </div>
                        </div>
                    </div>

                </header>

                <section id="about" className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>What We Do</h1>
                                <p> Hello world </p>
                                <p> some text some text some text some text some text some text
                                    some text some text some text some text some text some text
                                    some text some text some text some text some text </p>
                            </div>
                            <div className="col-md-6">
                                <img src={picture} alt=""
                                     className="about-img img-fluid rounded-circle  d-none d-md-block"/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;