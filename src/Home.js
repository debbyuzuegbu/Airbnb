import React from 'react'
import './Home.css'
import Banner from './Banner'
import Cards from './Cards'

function Home() {
  return (
    <div className="Home">
        <Banner />
        <div className="home_section">
          <Cards 
          src = "https://a0.muscache.com/im/pictures/miso/Hosting-51316160/original/97f5dbf7-fbc2-4a83-89a7-7ccf400e4a33.jpeg?im_w=960"
          title ="Serdivan Turkey"
          description ="4,645 Kilometers away"
          price="$365 night"
          />
          <Cards 
          src = "https://a0.muscache.com/im/pictures/47ec6dbe-2bdb-4022-a33e-f8e72bf31c3b.jpg?im_w=720"
          title ="Sperionga Italy"
          description ="3,997 Kilometers away"
          price="$35 night"
          />
          <Cards 
          src ="https://a0.muscache.com/im/pictures/da83b159-b596-469d-adce-6cc0aa7e398d.jpg?im_w=720"
          title ="Marrakesh, Morocco"
          description ="3,031 Kilometers away"
          price="$495 night"
          />
        </div>
        <div className="home_section">
          <Cards 
          src = "	https://a0.muscache.com/im/pictures/73c13fc7-cff7-469d-9831-ffc7f48baac9.jpg?im_w=720"
          title ="Chania, Greece"
          description ="3,856 Kilometers away"
          price="$299 night"
          />
          <Cards
          src = "https://a0.muscache.com/im/pictures/3e63396d-8ea0-405e-9f64-9e6e94556f0c.jpg?im_w=720" 
          title ="Cape Town, South Africa"
          description ="4,778 Kilometers away"
          price="$512 night"
          />
          <Cards 
          src = "https://a0.muscache.com/im/pictures/4a5a364d-5530-4fd2-ae04-720352b107b9.jpg?im_w=720" 
          title ="Le Quinta, Spain"
          description ="3,022 Kilometers away"
          price="$243 night"
          />
        </div>
    </div>
  )
}

export default Home