import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import FurniturePlayground from '../components/furniturePlayground';

import Email from '../public/assets/svg/email.svg'
import Instagram from '../public/assets/svg/instagram.svg'
import SooLogo from '../public/assets/svg/soo_logo.svg'
import Customize from '../public/assets/svg/customize.svg'
import Rebuild from '../public/assets/svg/rebuild.svg'
import Visualize from '../public/assets/svg/visualize.svg'
import ImpactModel from '../public/assets/svg/model.svg'



const NavWide = () => {

  return(
    <nav id="nav-wide">    
      <Link href='/'><a className="title">Six of One</a></Link>
      <Scrollspy className="sections" offset={ -10 } items={ ['features', 'furniture', 'impact'] } currentClassName="active">
        {/* <a href='/#vision-video'>Vision Video</a> */}
        <a href='#features'>Features</a>
        <a href='#furniture'>Furniture</a>
        <a href='#impact'>Impact</a>
      </Scrollspy>
      <div className="social">
        <a href="https://www.instagram.com/sixofonefurniture/" passHref={true}><Instagram /></a>
        <a href="mailto:fchung20@student.scad.edu" passHref={true}><Email /></a>
      </div>
    </nav>
  )
}

const NavMobile = () => {

  return(
    <nav id="nav-mobile">
      <Link href='/'><a className="title">Six of One</a></Link>
      <div className="social">
      <a href="https://www.instagram.com/sixofonefurniture/" passHref={true}><Instagram /></a>
        <a href="mailto:fchung20@student.scad.edu" passHref={true}><Email /></a>
      </div>
    </nav>
  )
}

const Footer = () => {

  return(
    <footer>
      <p>
        test footer!
      </p>
    </footer>
  )
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Six of One</title>
        <meta name="description" content="Coming Soon..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        typeof window !== 'undefined' ?
        <NavWide />
        :
        null
      }
      {
        typeof window !== 'undefined' ?
        <NavMobile />
        :
        null
      }
      <main id="hero">
          <h1>The future of<br/>furniture is <span>here</span>.</h1>
          <div className="cta">Download our App</div>
          <div className='bgImg'></div>
      </main>
      <main id="quick-desc">
        <div id="top">
          <SooLogo />
          <p>Six of One is a sustainable, modular furniture solution made for your ever-changing lifestyle and space needs.</p>
        </div>
        <div id="aspects">
          <div className="aspect customize">
            <Customize />
            <h3>Customization</h3>
            <p>Each furniture piece is made of Six of One’s unique modular system of components that can be customized in form, color, and add-ons, meaning you can make a chair that feels like you and level up as your budget grows!</p>
          </div>
          <div className="aspect rebuild">
            <Rebuild />
            <h3>Reconstruction</h3>
            <p>Ready to move or have a change of heart? Our component based furniture is designed to grow with you. Easily knock down your current furniture piece and transform it to another functional piece, expanding the lifecycle of the product whenever you need it.</p>
          </div>
          <div className="aspect visualize">
            <Visualize />
            <h3>Visualization</h3>
            <p>Visualize your dream space with the Spaces feature on our mobile app.Through our 3D virtual Spaces and AR Viewer evaluate if the piece will work with pre-existing furniture and aid in iterating customization and placement until it feels just right.</p>
          </div>
        </div>
      </main>
      {/* <main id="vision-video">
        <p>vision video</p>
      </main> */}
      <main id="features">
        <div className="feature">
          <div className="mock shop"></div>
          <div className="description">
            <div className="container-right">
              <h3>Shop</h3>
              <p>We know the devil’s in the details, personalize our products to your exact taste from the wood type, stain, and more straight from the app.</p>
            </div>
          </div>
        </div>
        <div className="feature upgrade">
          <div className="description">
            <div className="container-left">
              <h3>Upgrade</h3>
              <p> Shop only for long term investments, upgrade to different customizations whenever you want a change or when you are financially able to.</p>
              </div>
            </div>
          <div className="mock upgrade"></div>
        </div>
        <div className="feature">
          <div className="mock rebuild"></div>
          <div className="description">
            <div className="container-right">
              <h3>Rebuild</h3>
              <p>Explore rebuild options on the app – learn how you can transform your furniture to a functional piece that you will use, be it a desk, nightstand, or console.</p>
            </div>
          </div>
        </div>
        <div id="technology">
          <div className="tech">
            <div className="photo spaces"></div>
            <h3>Spaces</h3>
            <p>Visualize your dream space in a 3D virtual room, adjust dimensions to fit your needs and shop furniture customizations directly from Spaces.</p>
          </div>
          <div className="tech">
            <div className="photo arViewer"></div>
            <h3>AR Viewer</h3>
            <p>Using plane detection and latest AR technology, your custom furniture unique to you will appear on the ground in front of you with accurate size dimensions to help you make an informed choice.</p>
          </div>
        </div>
      </main>
      <main id="furniture">
        <div className="description">
          <div className="image1"></div>
          <div className="image2"></div>
          <h1>Six of One Furniture</h1>
          <p>We are committed to making sustainable furniture, all modular components are made out of wood and minimal standard recyclable screws are used for structural support. This also makes it easier to recycle, upgrade, or rebuild into other furniture, therefore expanding the lifecycle of the product.</p>
        </div>
        <FurniturePlayground />
      </main>
      <main id="impact">
        <h1>Impact Model</h1>
        <p>At Six of One, we believe in the importance of giving back to the people and to the Earth. Functioning as a non-profit, we reinvest our money into communities that are without proper living conditions. Additionally, we encourage customers to take advantage of our Circular Customer Model, donating, rebuilding, or recycling their furniture to keep waste out of our landfills.</p>
        <div className="impact-frames"></div>
        <ImpactModel />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
