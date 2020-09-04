import React from 'react'
// import dream from '../images/dream.jpeg'
// import today from '../images/today.jpeg'
// import comp from '../images/comp.jpeg'
// import faith from '../images/faith.jpeg'
// import magic from '../images/magic.jpeg'
import Footer from './Footer'
import dreaming from '../images/dreaming.jpg'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'

export default function Home() {
    return (
        <div className="container">
            <div className="home">
                <div className="whiteBox ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2">
                    <div className="intro pl-4 pt-4 pr-4">
                        <div>Welcome to my Portfolio!</div>
                        <div>
                        I am glad you visited. My name is Bijayata (Bjta) and I am a Computer Science Junior at San Jose State University.
                        Here, you can find my projects, my contact info and also learn a bit about me. To see my projects go to Projects or, <a id="gitClick" href="https://github.com/gurungbjta">click here</a>.
                        </div>
                    </div>
                </div>
                <div>
                    <img src={dreaming} alt="dream" style={{height: '350px', width: '490px'}} className="dream d-none d-md-inline"></img>
                </div>
                <div className="stickers1 d-inline d-md-none ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0">
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} id="comp1"/>
                    <img src={love} alt="comp" style={{height: '100px', width: '100px'}}  id="comp1"/>
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} id="comp1"/>
                    <img src={love} alt="comp" style={{height: '100px', width: '100px'}}  id="comp1"/>
                </div>
                <div className="stickers d-flex d-inline ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0">
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} id="comp1"/>
                    <img src={love} alt="comp" style={{height: '100px', width: '100px'}}  id="comp1"/>
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}} id="comp1"/>
                    <img src={love} alt="comp" style={{height: '100px', width: '100px'}}  id="comp1"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
