import React from 'react';

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img
                    className="main-banner__img"
                    alt="banner"
                    src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1703/China-city-Shanghai-night-lights-blurry_1920x1080.jpg"
                />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">React.js con EDteam</p>
                    <p> Carlos Martinez</p>
                    <a href="https://ed.team" className="button">
                        ir a EDteam
                    </a>
                </div>
            </div>
        </div>
    </div>
);
export default Banner;