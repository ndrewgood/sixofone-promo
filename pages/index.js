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
      <Link href='/'>Six of One</Link>
      <Scrollspy className="sections" offset={ -10 } items={ ['features', 'furniture', 'impact'] } currentClassName="active">
        {/* <a href='/#vision-video'>Vision Video</a> */}
        <Link href='/#features'>Features</Link>
        <Link href='/#furniture'>Furniture</Link>
        <Link href='/#impact'>Impact</Link>
      </Scrollspy>
      <div className="social">
        <Link href="https://www.instagram.com/sixofonefurniture/" passHref={true}><Instagram /></Link>
        <Link href="mailto:fchung20@student.scad.edu" passHref={true}><Email /></Link>
      </div>
    </nav>
  )
}

const NavMobile = () => {

  return(
    <nav id="nav-mobile">
      <a href="/" className='title'>Six of One</a>
      <div className="social">
      <Link href="https://www.instagram.com/sixofonefurniture/" passHref={true}><Instagram /></Link>
        <Link href="mailto:fchung20@student.scad.edu" passHref={true}><Email /></Link>
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
      <NavWide />
      <NavMobile />
      <main id="hero">
          <h1>The future of<br/>furniture is <span>here</span>.</h1>
          {/* <Image
            src={heroBg}
            alt="Picture of Six of One Furniture"
            width="1216"
            height="401"
          /> */}
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
            <p>Each product is made of modular interchangeable pieces, enabling completely customizable furniture. Every piece starts with a skeleton; designed to be upgraded over time, meaning that the material a chair is made of can level up as a budget grows!</p>
          </div>
          <div className="aspect rebuild">
            <Rebuild />
            <h3>Reconstruction</h3>
            <p>Six of One furniture is meant to easily move and reconstruct. Each piece of furniture can break down into manageable pieces that can be easily transported. These pieces can also transform into various functions using the same basic pieces.</p>
          </div>
          <div className="aspect visualize">
            <Visualize />
            <h3>Visualization</h3>
            <p>Through our 3D virtual Spaces and AR Viewer, we provide tools to evaluate if the piece will work with pre-existing furniture and aid in iterating customization and placement until it feels just right.</p>
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
              <p>We know the devil’s in the details, with our modular parts, you are able to personalize our products to your exact taste from the wood type, stain, and more straight from the app. Explore our wide range of products and be inspired by the Six of One Ambassadors’ customizations with each product.</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="description">
            <div className="container-left">
              <h3>Upgrade</h3>
              <p>Shop only for long term investments, upgrade to different customizations whenever you want a change or when you are financially able to. We understand that accidents happen, with our modular design, instead of throwing out the chair when damaged, order a component to replace it.</p>
              </div>
            </div>
          <div className="mock upgrade"></div>
        </div>
        <div className="feature">
          <div className="mock rebuild"></div>
          <div className="description">
            <div className="container-right">
              <h3>Rebuild</h3>
              <p>Furniture makes a house a home. Plans change and you no longer need that chair? No worries, head to the Rebuild feature on the app and learn how you can transform your furniture to a functional piece that you will use, be it a desk, nightstand, or console, as you plan your next dream home.</p>
            </div>
          </div>
        </div>
        <div id="technology">
          <div className="tech">
            <div className="photo spaces"></div>
            <h3>Spaces</h3>
            <p>Visualize your dream space with the Spaces feature. Drag and drop Six of One furniture into a 3D virtual room to plan out how you may want to organize your space. Spaces are fully customizable, with the ability to adjust dimensions, change materials, and add additional windows and doors. Fine tune the exact customizable options with each piece of furniture to try out new styles. Once you’re happy with your space, add your custom pieces to your cart for easy access.</p>
          </div>
          <div className="tech">
            <div className="photo arViewer"></div>
            <h3>AR Viewer</h3>
            <p>Whether you’re customizing your furniture piece or adding furniture to your Space, quickly launch Six of One’s AR Viewer to visualize the piece in augmented reality. Using plane detection, the furniture will appear on the gound in front of you with accurate size dimensions. Change the wood type, stain, and add-ons in the AR Viewer as well to try out different styles. Once you’re done, you’re able to leave the AR viewer, or add to cart directly from the viewer.</p>
          </div>
        </div>
      </main>
      <main id="furniture">
        <div className="description">
          <div className="image1"></div>
          <div className="image2"></div>
          <h1>Six of One Furniture</h1>
          <p>Each furniture piece is made of Six of One’s unique modular system consisting of bases, joinery, and structure . All components are made out of wood and can be customized in form, color, and add-ons that we provide for additional comfort. We achieve maximum sustainability by minimizing our materials to wood and standard recyclable screws for structural support. This makes it easier to recycle, upgrade, or rebuild into other furniture, therefore expanding the lifecycle of the product.</p>
        </div>
        <FurniturePlayground />
      </main>
      <main id="impact">
        <h1>Impact Model</h1>
        <p>At Six of One, we believe in the importance of giving back to the people and to the Earth. Functioning as a non-profit, we reinvest our money into communities that are without proper living conditions. Additionally, we encourage customers to take advantage of our Circular Customer Model, donating, rebuilding, or recycling their furniture to keep waste out of our landfills.</p>
        <div className="impact-frames"></div>
        <ImpactModel />
      </main>
      <Footer />
    </div>
  )
}
