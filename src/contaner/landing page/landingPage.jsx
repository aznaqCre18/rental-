import React, {Component} from 'react';

import './landingPage.css';
import {Modal} from 'react-bootstrap';
import Login from './../../component/login modal/login';
import Register from './../../component/register modal/register';


class LandingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show : false,
            showReg : false
        }
    }

    handleShow = () => {
        this.setState({show: !this.state.show})
    }

    handleShowReg = () => {
        this.setState({showReg: !this.state.showReg})
    }

    render() {
        return (
            <>
                <div className="background">
                    <div className="menu">
                        <span className="rent">rent</span>
                        <span className="brand">brand</span>
                        <span className="testi">testimoni</span>
                        <span className="about">about us</span>
                    </div> 

                    <div className="button">
                        <div className="login text-center" onClick={() => this.handleShowReg()}>
                            Join
                        </div>
                        <div className="signin text-center" onClick={() => this.handleShow()}>
                            Sign In
                        </div>
                    </div>

                    <Modal show={this.state.show} onHide={() => this.handleShow()}  aria-labelledby="contained-modal-title-vcenter" centered animation >
                        <Login />
                    </Modal>
                    <Modal show={this.state.showReg} onHide={() => this.handleShowReg()}  aria-labelledby="contained-modal-title-vcenter" centered animation >
                        <Register />
                    </Modal>

                    <div className="card-pack">
                        <div className="week">
                            <div className="row">
                                <div className="col name-pack">1 week</div>
                                <div className="col number">01</div>
                            </div>
                            <div className="title-card">starter rental package</div>
                            <div className="row price-section">
                                <span className="col price-card">Price</span>
                                <span className="col nominal">Rp.2Jt</span>
                            </div>
                            <div className="row button-section-card">
                                <div className="col">
                                    <div className="button-more text-center">
                                        more
                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="button-toBegin text-center">
                                        to begin
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week">
                            <div className="row">
                                <div className="col name-pack">2 week</div>
                                <div className="col number">02</div>
                            </div>
                            <div className="title-card">starter rental package</div>
                            <div className="row price-section">
                                <span className="col price-card">Price</span>
                                <span className="col nominal">Rp.3Jt</span>
                            </div>
                            <div className="row button-section-card">
                                <div className="col">
                                    <div className="button-more text-center">
                                        more
                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="button-toBegin text-center">
                                        to begin
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="week">
                            <div className="row">
                                <div className="col name-pack">3 week</div>
                                <div className="col number">03</div>
                            </div>
                            <div className="title-card">starter rental package</div>
                            <div className="row price-section">
                                <span className="col price-card">Price</span>
                                <span className="col nominal">Rp.4Jt</span>
                            </div>
                            <div className="row button-section-card">
                                <div className="col">
                                    <div className="button-more text-center">
                                        more
                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="button-toBegin text-center">
                                        to begin
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slogan-section">
                        <div className="slogan-title">Car Rental</div>
                        <div className="slogan-inner">
                            Make your Dreams Come True. Start Today
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LandingPage