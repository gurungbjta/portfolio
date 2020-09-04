import React from 'react'
import girl3 from '../images/girl3.jpg'
import pinkComp from '../images/pinkComp.jpg'

export default function About() {
    return (
        // <>
        //     <section className="container-fluid px-5 pt-2">
        //         <div className="row align-items-center content">

        //             <div className="col-md-6 text-center order-2 order-md-1 aboutLeft" style={{height: '300px', width:'400px', backgroundColor: 'white'}}>
        //                 <div className="row justify-content-center">
        //                     <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
        //                         <p> </p>
        //                     </div>
        //                 </div>
        //             </div>
                    
        //             <div className="col-md-6 order-1 order-md-2">
        //                 <img src={girl3} alt="girl3" style={{height: '300px', width: '300px'}} />
        //             </div>
        //         </div>
        //     </section>
        // </>
        <>
            <section className="container-fluid px-5 pt-2">
                <div className="row ml-5 mt-3 ">
                    <div className="col-md-6 text-center order-2 order-md-1" style={{height: '300px', width:'400px', lineHeight: '28px'}}>
                        <p>
                            After moving to the Bay Area five years ago, my fondness for tech grew even more profound. 
                            I feel beyond blessed to be surrounded by the Silicon Valley, and moreover, it inspires me every second of my day to dedicate my valuable contribution to the tech industry as a Software Engineer. 
                            I love what I do and nothing gives me immense joy than to solve world problems via code.
                        </p>
                    </div>

                    <div className="col-md-6 order-1 order-md-2">
                        <img src={girl3} alt="girl3" style={{height: '250px', width: '250px'}} />
                    </div>
                </div>

                <div className="row ml-0 mr-5 pr-5 mt-3">
                    <div className="col-md-6 text-center">
                        <img src={pinkComp} alt="pinkComputer" style={{height: '250px', width: '250px'}} />
                    </div>

                    <div className="col-md-6" style={{height: '300px', width:'400px', lineHeight: '28px'}}>
                        <p>
                            I am passionate about learning and giving back to the community. 
                            I enjoy problem solving and building exciting web applications. 
                            I have knowledge on ReactJS, JavaScript, Bootstrap, Java and other cool libraries. 
                        </p>
                        <p>
                            BONUS: On my free time, I like watching movies and animes and I am a fan of anything aesthetic.
                            My portfolio, therefore, is highly inspired by aesthetic animes.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}


