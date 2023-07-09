import React,{useEffect} from 'react'
import './Songs.css'
import  petals from '../../../images/HomePage/petals.svg'


import 'aos/dist/aos.css';

//images

import Saksham from '../../../images/HomePage/SongProfile/songSaksham.jpg'
import Anukriti from '../../../images/HomePage/SongProfile/songAnukriti.jpeg'
import Janvi from '../../../images/HomePage/SongProfile/songJanvi.jpg'
import Ojay from '../../../images/HomePage/SongProfile/songOjay.jpeg'
import Roahan from '../../../images/HomePage/SongProfile/songRoahan.jpg'
import Drishya from '../../../images/HomePage/SongProfile/songDri.jpg'
import Monali from '../../../images/HomePage/SongProfile/songMonali.jpg'
import Tanishq from '../../../images/HomePage/SongProfile/songTanishq.jpg'

const UsToYou = () => {
    let AOS;

    useEffect(() => {
        /**
         * Server-side rendering does not provide the 'document' object
         * therefore this import is required either in useEffect or componentDidMount as they
         * are exclusively executed on a client
         */
        const AOS = require("aos");
        AOS.init({
            once: false,
            duration:1200,
        });
      }, []);

      useEffect(() => {
        if (AOS) {
          AOS.refresh();
        }
      });
    return (
        <>
            <div className = "SongSection-container">
                <div className = "songSection-bg">
                    <img className = "img-top" src = {petals} data-aos="fade-down" alt = "petals"></img>
                    <img className = "img-bottom" src = {petals} alt= "petals" ></img>
                </div>
                <h1 className = "song-h1" data-aos="fade-down">The songs we dedicate to you</h1>
                <div className = "songSection-divider" data-aos="fade-down" data-aos-delay = "50"></div>
                <p className = "quote-p" data-aos="fade-down" data-aos-delay = "100">All we need is a good friend and a song to sing along :)</p>
                <div className = "songSection-wrapper">
                    {/* JANVI */}
                    <div className = "card-container" data-aos="fade-right">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Count On Me </h3>
                                    <p className = "song"> Bruno Mars </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Janvi Kathuria</p>
                                </div>
                                <div className = "circle-img">
                                    <img src = {Janvi} alt = "Janvi"></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image" ><img src = "https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png" alt=""></img></div>
                        <div className="overlay"></div>

                    </div>

                    {/* OJAY */}
                    <div className = "card-container" data-aos="fade-up">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://m.media-amazon.com/images/I/71Y5ju1CGiL._SS500_.jpg" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Baarishein </h3>
                                    <p className = "song"> Anuv Jain </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Ojasvi Teotea</p>
                                </div>
                                <div className = "circle-img">
                                    <img   src = {Ojay} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"> <img src = {"https://m.media-amazon.com/images/I/71Y5ju1CGiL._SS500_.jpg"} alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                    
                    {/* SAKSHAM */}
                    <div className = "card-container" data-aos="fade-down">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://www.bollywoodbabu.in/wp-content/uploads/2020/08/alag-aasmaan-anuv-jain-1.png" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Alag Aasmaan </h3>
                                    <p className = "song"> Anuv Jain </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Saksham Bishnoi</p>
                                </div>
                                <div className = "circle-img">
                                    <img src = {Saksham} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"><img src = {"https://www.bollywoodbabu.in/wp-content/uploads/2020/08/alag-aasmaan-anuv-jain-1.png"} alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                 
                    {/* MONALI */}
                    <div className = "card-container" data-aos="fade-left">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/81BTT1JdBnL._AC_UL600_SR600,600_.jpg" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> I'll be there for you </h3>
                                    <p className = "song"> The Rembrandts </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Monali Mallick</p>
                                </div>
                                <div className = "circle-img">
                                    <img src = {Monali} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"><img src ={"https://images-na.ssl-images-amazon.com/images/I/81BTT1JdBnL._AC_UL600_SR600,600_.jpg"} alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                    
                    {/* ANUKRITI */}
                    <div className = "card-container" data-aos="fade-right">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Get_You_The_Moon.png/220px-Get_You_The_Moon.png" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Get you the moon (feat. Snøw) </h3>
                                    <p className = "song"> Kina </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Anukriti Mudgil</p>
                                </div>
                                <div className = "circle-img">
                                    <img style = {{width:"100px"}} src =  {Anukriti} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"> <img src = {"https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Get_You_The_Moon.png/220px-Get_You_The_Moon.png"} alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                    
                    {/* Roahan */}
                    <div className = "card-container" data-aos="fade-up">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Cocktail_2012_poster.jpg/220px-Cocktail_2012_poster.jpg" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Tum Hi Ho Bandhu </h3>
                                    <p className = "song"> Neeraj Shridhar & Kavita seth </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Roahan Roy</p>
                                </div>
                                <div className = "circle-img">
                                    <img src = {Roahan} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"><img src = {"https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Cocktail_2012_poster.jpg/220px-Cocktail_2012_poster.jpg"} alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                    
                    {/* DRISHYA */}
                    <div className = "card-container" data-aos="fade-down">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://images.genius.com/875025f47f9ccb55069d211d6db0c1b7.640x640x1.jpg" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song">  You Are My Sunshine </h3>
                                    <p className = "song"> Jasmine Thompson </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Drishya Chadha</p>
                                </div>
                                <div className = "circle-img">
                                    <img src = {Drishya} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"><img src="https://images.genius.com/875025f47f9ccb55069d211d6db0c1b7.640x640x1.jpg" alt =""/></div>
                        <div className="overlay"></div>

                    </div>
                    
                    {/* TANISHQ */}
                    <div className = "card-container" data-aos="fade-left">
                        <div className = "top">
                            <div className = "menu float-r">
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                                <a href = "#"><span></span></a>
                            </div>
                        </div>
                        <div className = "center">
                           
                            <div className = "cover">
                                <div className = "cover-img">
                                <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg" alt="" />
                                </div>

                            </div>
                            <div className = "info-music">
                                <div className = "name">
                                    <h3 className = "song"> Say you won't let go </h3>
                                    <p className = "song"> James Arthur </p>
                                </div>
                            </div>
                        </div>
                        <div className = "bottom">
                            <div className = "action">
                                <div >
                                <p className = "text-p" >Dedicated By :</p>
                                <p className = "name-p">Tanishq Sharma</p>
                                </div>
                                <div className = "circle-img">
                                    <img  src ={Tanishq} alt =""></img>
                                </div>
                            </div>

                        </div>
                        <div className="overlay-image"> <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg" alt="" /></div>
                        <div className="overlay"></div>

                    </div>
                    
                </div>


                

            </div>
  
        </>
    )
}

export default UsToYou
