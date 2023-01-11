import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import './style.css';
import ReactStars from 'react-stars';
// import React from 'react';

const ratingChanged = (newRating) => {
    console.log(newRating)
  }

function Comment() {
    const commentData =[
        {
            id:1,
            det1:"https://images.turo.com/media/driver/pnhVO_I_T-ujoraAQ6X6lA.160x160.jpg",
            det2:"Temi O.",
            det3:"1,501 trips",
            det4:" • Joined Apr 2019",
            det5:"The car worked perfectly and I enjoy a lovely weekend thanks to that 🧚‍♀️",
            det6:"Alicia A. - Nov 2022",
        },
        {
            id:2,
            det1:"	https://images.turo.com/media/driver/iwiNozAHTuGUVsxyAjmFAw.160x160.jpg",
            det2:"Big City Rentals (.",
            det3:"76 trips",
            det4:" • Joined Jul 2022",
            det5:"Great car  and great host.",
            det6:"Adrien K. - Nov 2022",
        },
        {
            id:3,
            det1:"	https://images.turo.com/media/driver/FqeGdLCpTs6imjSq68hl0g.160x160.jpg",
            det2:"Kash Z.",
            det3:"3,661 trips",
            det4:" • Joined Jul 2017",
            det5:"The car  was clean, well-cared for and had a full tank of petrol, ready for an exciting trip  from Heathrow Airport to Cornwall to London.",
            det6:"Nathan H. - Sept 2022",
        },
        {
            id:4,
            det1:"https://images.turo.com/media/driver/m79wNKXuSVChs1_XEy2QJA.160x160.jpg",
            det2:"Edwige K.",
            det3:"357 trips",
            det4:" • Joined Aug 2020",
            det5:"We super impressed with the legroom, for such a small car .",
            det6:"J B. - Nov 2022",
        },
        {
            id:5,
            det1:"https://images.turo.com/media/driver/berD6JUCQsCFBkGusvuEOg.160x160.jpg",
            det2:"Ding Tak K.",
            det3:"39 trips",
            det4:" • Joined Apr 2022",
            det5:"Great car , all brilliant and straightforward.",
            det6:"Richard J. - Nov 2022",
        },
        {
            id:6,
            det1:"https://images.turo.com/media/driver/7YNGMDEVTjyMd9Y3Nythew.160x160.jpg",
            det2:"Shahid A.",
            det3:"47 trips",
            det4:" • Joined Jun 2022",
            det5:"Shahid’s car  is in good condition, we enjoy his car  very much during our trip to Oxford.",
            det6:"Jolyee Y. - Sept 2022",
        },
    ];
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    return (
        <div className="cmt10">
            <h2> Top hosts on Turo </h2>
            <Slider {...settings}>
                {commentData.map((value,i)=>{
                    return(
                <div key={i}>
                    <Card className="cmt1">
                        <div className="cmt3">
                            <Card.Img variant="top" className="cmt2" src={value.det1} />
                            <div className="cmt4">
                                <Card.Title className="cmt5">{value.det2}</Card.Title>
                                <p className="cmt7"><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg> All-Star Host</p>
                                <p className="cmt6">{value.det3} <span> {value.det4}</span></p>
                            </div>
                        </div>
                            <div><ReactStars count={5} onChange={ratingChanged} size={18} color2={'#593cfb'} /></div>
                        <Card.Body>
                            <Card.Text className="cmt8">
                               {value.det5}
                            </Card.Text>
                            <p className="cmt9">{value.det6}</p>
                        </Card.Body>
                    </Card>
                </div>

                    )
                })}
            </Slider>
        </div>
    );
}

export default Comment;