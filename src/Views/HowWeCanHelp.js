import '../Assets/Css/HowWeCanHelp.css';

function HowWeCanHelp() {

    return (
        <div>
            <section className="services-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="section-title text-center">
                                <h2>Our Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="single-serviecs-block">
                                <i className="fas fa-print"></i>
                                <h3><a href="services-details.html">Digital Printing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="single-serviecs-block">
                                <i className="far fa-lightbulb"></i>
                                <h3><a href="services-details.html">Design Services</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="single-serviecs-block">
                                <i className="far fa-envelope"></i>
                                <h3><a href="services-details.html">Mail Services</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HowWeCanHelp;