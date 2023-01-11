import React from "react";
import Slider from "react-slick";
import "./style.css"



const Hamza = () => {
    const data3 = [
        {
            id:1,
            urr:"	https://resources.turo.com/f/81934/416x284/410c6e312f/01-great-outdoors.jpg",
            tyy:"to take on the great outdoors",
            ppp:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.",
        },
        {
            id:2,
            urr: "https://resources.turo.com/f/81934/416x285/5323a5ca61/02-unwind.jpg",
            tyy: "to unwind for the weekend",
            ppp: "From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.",
        },
        {
            id:3,
            urr: "	https://resources.turo.com/f/81934/416x285/a7d70c6df2/03-upgrade-vacation.jpg",
            tyy: "to upgrade your holiday plans",
            ppp: "Skip the rental car counter and find the perfect car to complement your holiday vibe.",
        },
        {
            id:4,
            urr: "		https://resources.turo.com/f/81934/416x285/c57fa605a1/04-scenic-curves.jpg",
            tyy: "for scenic corners & curves",
            ppp: "Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.",
        },
        {
            id:5,
            urr: "https://resources.turo.com/f/81934/416x285/b0caa43c43/05-try-before-buy.jpg",
            tyy: "to try before you buy",
            ppp: "Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.",
        },
        {
            id:6,
            urr: "https://resources.turo.com/f/81934/416x285/d63ae615d2/06-errand-day.jpg",
            tyy: "to make errand day easier",
            ppp: "Book a roomy car or SUV to ease your errand day stress, or to motivate your moving day.",
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // console.log(data3);

        return (
            <div className="what">
            <Slider {...settings}>
            {/* {data3.map((value,i)=>{ */}
                {/* return ( */}
                    <div key={data3[0].id} className="main7">
                        <div>
                            <img src={data3[0].urr} alt="image1" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[0].tyy}</span>
                            </h2>
                            <p>{data3[0].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div key={data3[1].id} className="main7">
                        <div>
                            <img src={data3[1].urr} alt="image2" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[1].tyy}</span>
                            </h2>
                            <p>{data3[1].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div key={data3[2].id} className="main7">
                        <div>
                            <img src={data3[2].urr} alt="image3" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[2].tyy}</span>
                            </h2>
                            <p>{data3[2].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div key={data3[3].id} className="main7">
                        <div>
                            <img src={data3[3].urr} alt="image4" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[3].tyy}</span>
                            </h2>
                            <p>{data3[3].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div key={data3[4].id} className="main7">
                        <div>
                            <img src={data3[4].urr} alt="image5" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[4].tyy}</span>
                            </h2>
                            <p>{data3[4].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div key={data3[5].id} className="main7">
                        <div>
                            <img src={data3[5].urr} alt="image6" />
                        </div>
                        <div className="ctrr">
                            <h2>
                                <span>Find the perfect car </span>
                                <span className='stl'>{data3[5].tyy}</span>
                            </h2>
                            <p>{data3[5].ppp}</p>
                            <div>
                                <button>Browse cars</button>
                            </div>
                        </div>
                    </div>
                {/* ); */}
            {/* })}; */}
            </Slider>
        </div>
    );
}



export default Hamza;