import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "./style.css"




function Slider5 (){
    const sliderDac =[
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png",
            input_D2:"London",
        },
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/330x330/a0dff3471f/manchester_icon-2x.png",
            input_D2:"Manchester",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/330x330/d854c545cf/edinburgh-icon-2x.png",
            input_D2:"Edinburgh",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/330x330/6b8a24be30/bristol_icon-2x.png",
            input_D2:"Bristol",
        },
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png",
            input_D2:"Los Angeles",
        },
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png",
            input_D2:"Las Vegas",
        },
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png",
            input_D2:"Toronto",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/240x240/fba7dae74f/illo_city_orlando-2x.png",
            input_D2:"Orlando",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png",
            input_D2:"Honolulu",
        },
        {
            input_ID:1,
            input_D1:"	https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png",
            input_D2:"Miami",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png",
            input_D2:"San Francisco",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/330x330/b81d31d6f2/vancouver-black-2x.png",
            input_D2:"Vancouver",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/240x240/35cc2cbc9d/illo_city_houston-2x.png",
            input_D2:"Houston",
        },
        {
            input_ID:1,
            input_D1:"https://resources.turo.com/f/81934/240x240/382323a545/illo_city_sandiego-2x.png",
            input_D2:"San Diego",
        },
    ]
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
        <div className="hi89">
          <h2> Browse by destination </h2>
          <Slider {...settings}>
            {sliderDac.map((value,i)=>{
                return(
            <div key={i} className="input34">
            <Card className="input35">
                 <Card.Img variant="top" className="input36" src={value.input_D1} />
            <Card.Body className="input37">
                <Card.Title className="input38">{value.input_D2}</Card.Title>
            </Card.Body>
            </Card>
            </div>
                )
            })}
          </Slider>
        </div>
        
      );
}


export default Slider5;