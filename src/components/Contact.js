import React from 'react'
import girl2 from '../images/girl2.jpg'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'

export default function Contact() {
    return (
        <div className="container">
            <div className="home">
                <div className="whiteBox ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2" style={{height: '250px', width:'600px', zIndex: '1'}}>
                    <div className="intro pl-4 pt-5 pr-4" style={{lineHeight: '30px'}}>
                        <div>
                            If you like my work, or for any queries, please contact me on my email: bijayata.gurung@sjsu.edu
                        </div>
                        <div>
                            You can also reach me on my mobile at (415)-608-6162. I am open to feedbacks. Thank you for visiting!
                        </div>
                    </div>
                </div>
                <div>
                    <img src={girl2} alt="girl" style={{height: '350px', width: '400px', zIndex: '2'}} className="dream d-none d-md-inline"></img>
                </div>
                <div className="stickers1 d-inline d-md-none ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0">
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} className="comp1"/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}} className="comp1"/>
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} className="comp1"/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}} className="comp1"/>
                </div>
                
            </div>
            
        </div>
    )
}
