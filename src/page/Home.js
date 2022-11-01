import React from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './About';


const Home = () => {
    return (<div>
        <Header />

        <video src="https://content.rolex.com/dam/watches/family-pages/cellini/video/cover/classic-watches-cellini-moonphase-video.mp4" type="video/mp4" autoplay="auto" playsinline="" loop="" preload="auto" class="sc-fzqyvX eOQcGc"  ></video>

        <div className='hom'>

            <p className='wel'>
                Welcome
            </p>

            <br />
            <form path='./About' action="post">
                <button className='bb'>

                    read more
                </button>

                <div className='anmi'>
                    <div className='sa3a'>
                        <div className='big'></div>
                        <div className='small'></div>
                        <div className='cir'></div>
                    </div>
                </div>


            </form>


        </div>


        <Footer />
    </div>

    )
}

export default Home;