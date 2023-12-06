import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '@theme/IdealImage';
import AboutCompany from '@site/src/components/AboutCompany';
import AboutTeam from '@site/src/components/AboutTeam';

export default function Intro() {
    return (
        <section id="intro" className="hero" style={{ backgroundImage: 'var(--hex-background)' }}>
            <div className="container" >
                <div className="row d-flex align-items-center">
                    <div className=" col-xxl-5  col-xl-6 col-lg-6 col-12">
                        <div className='wow animated fadeInLeft'>
                            <h1 className="display-2 fw-bold mb-3">
                                <u className="text-warning">
                                    <span style={{ color: 'var(--ifm-color-primary-dark)' }}>One-stop shop</span>
                                </u>
                                &nbsp;for your Technical Business Solutions 
                            </h1>
                            <p className="lead mb-4">
                                With solutions compatible with cloud and on-premise, we offer agile and focused 
                                solution to your IT business needs across telecommunication, Financial, production 
                                and many other industries
                            </p>
                            {/* <a href="#!" className="btn btn-dark btn-lg">
                                    Explore Online Courses
                                </a> */}
                        </div>
                    </div>
                    <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end">
                        <div className="mt-12 mt-lg-0 position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                                {/* <i className="fa-solid fa-trophy"></i> */}
                                <i className="fa-solid fa-arrow-up-right-dots fa-4x"></i>
                            </div>
                            <Image
                                img={useBaseUrl('/img/about/TechCoverage_woman_win.jpg')}
                                alt="online course"
                                className="img-fluid z-1 position-relative"
                                style={{'border-radius': '20px'}}
                            />
                            <div className="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                                <i className="fa-solid fa-wifi fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}