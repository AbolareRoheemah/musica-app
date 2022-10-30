import React from 'react'
import NewCharts from '../components/NewCharts'
import Slide from '../components/Slide';

export default function Dashboard() {
    const slideInfo = [
        {
            image: 'slide1.png',
            desc: 'Life in a bubble',
            name: 'The van'
        },
        {
            image: 'slide2.png',
            desc: 'Mountain',
            name: 'Krisk'
        },
        {
            image: 'slide3.png',
            desc: 'Limits',
            name: 'John Dillion'
        },
        {
            image: 'slide4.png',
            desc: 'Everything\'s black',
            name: 'Ahmeed'
        },
        {
            image: 'slide5.png',
            desc: 'Cancelled',
            name: 'Eminem'
        },
        {
            image: 'slide6.png',
            desc: 'Nomad',
            name: 'Makrat eli'
        },
        {
            image: 'slide1.png',
            desc: 'Blind',
            name: 'Wiz Khalifa'
        }
    ]

  return (
    <div className='dashboard-ctn'>
        <div className="top-section-ctn">
            <div className="hero-img-section">
                <div className="hero-text-ctn">
                    <p className="curated">Curated playlist</p>
                    <p className="hero-text">R &amp; B Hits</p>
                    <p className="subhero-text">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                </div>
                <div className="avatars-div">
                    <div className="avatars-ctn">
                        <img src="../../assets/images/avatar1.png" alt="" className="avatar" />
                        <img src="../../assets/images/avatar2.png" alt="" className="avatar" />
                        <img src="../../assets/images/avatar3.png" alt="" className="avatar" />
                        <img src="../../assets/images/avatar4.png" alt="" className="avatar" />
                        <img src="../../assets/images/avatar5.png" alt="" className="avatar" />
                    </div>
                    <span class="material-icons-outlined">favorite</span>
                    <p>33k Likes</p>
                </div>
            </div>
            <div className="top-charts-section">
                <p className="top-chart-title">Top charts</p>
                <div className="charts-ctn">
                    <NewCharts info={{image:'chart1.png', songName: 'Golden age of 80s', artiste: 'Sean Swadder', duration: '2:34:45'}} />
                    <NewCharts info={{image:'chart2.png', songName: 'Golden age of 80s', artiste: 'Sean Swadder', duration: '2:34:45'}} />
                    <NewCharts info={{image:'chart3.png', songName: 'Golden age of 80s', artiste: 'Sean Swadder', duration: '2:34:45'}} />
                </div>
            </div>
        </div>
        <div className="bottom-section-ctn">
            <Slide title={'New Releases.'} info={slideInfo} />
            <Slide title={'Popular in your area'} info={slideInfo} />
        </div>
    </div>
  )
}
