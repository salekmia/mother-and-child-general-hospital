import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row text-start">
                    <div className="col-lg-4 col-md-8 p-3">
                        <h4 className="">MACGH</h4>
                        <p>Here we have skilled doctors for pregnant women. I do Caesarean section for less money. The female patient is treated by a female doctor.</p>
                        <p>There are many different types of treatment for children. Our expert doctor will be able to treat your child. I wish your child good health.</p>
                    </div>
                    <div className="col-lg-2 col-md-4 p-3">
                        <h4>ABOUT</h4>
                        <ul className="list-style-none footer-about">
                            <li><a className="text-white" href="/">CLINTES</a></li>
                            <li><a className="text-white" href="/">ABOUT US</a></li>
                            <li><a className="text-white" href="/">BLOGS</a></li>
                            <li><a className="text-white" href="/">AWARDS</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-8 p-3">
                        <h4>ADDRESS</h4>
                        <p><i class="fas fa-home"></i> Bhairab bazar, Bharab, Kishoregonj</p>
                        <p><i class="far fa-envelope"></i> bharabbari330@gmail.com</p>
                        <p><i class="fas fa-phone"></i> +88 01859650251</p>
                        <p><i class="fas fa-phone"></i> +88 01759611778</p>
                    </div>
                    <div className="col-lg-2 col-md-4 p-3">
                        <h4>FOLLOW US</h4>
                        <ul className="footer-social d-flex flex-md-column p-0 m-0">
                            <li><a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a target="_blank" href="https://www.twitter.com/salekalways" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/salekalways" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/salekalways/" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;