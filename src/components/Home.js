import React from 'react'
import Footer from './Footer'
// import dream from '../images/dream.jpeg'
// import today from '../images/today.jpeg'
// import comp from '../images/comp.jpeg'
// import faith from '../images/faith.jpeg'
// import magic from '../images/magic.jpeg'
import dreaming from '../images/dreaming.jpg'

export default function Home() {
    return (
        <div className="container">
            <div className="whiteBox ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5">
                <div className="intro pl-4 pt-4 pr-4">
                    <div>Welcome to my Portfolio!</div>
                    <div>
                    I am glad you visited. My name is Bijayata (Bjta) and I am a Computer Science Junior at San Jose State University.
                    To see my projects on github, <a id="gitClick" href="https://github.com/gurungbjta">click here</a>.
                    </div>
                </div>
            </div>
            <div>
                <img src={dreaming} alt="dream" style={{height: '300px', width: '500px'}} className="dream d-none d-md-inline"></img>
            </div>
            <Footer />
        </div>
    )
}
