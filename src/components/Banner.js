import React from "react";
import '../css/styles.css'
import '../css/bootstrap.css'

const Banner = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);

    return (
        <section id="hero-banner">
            <div className="banner-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">

                            <h2>{user.username}，欢迎来到E-BOOK网上书店!</h2>
                            <p>选择一本书，开始您的旅程吧。</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
