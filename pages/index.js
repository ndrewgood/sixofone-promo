import Lottie from 'react-lottie';
import { useState } from 'react';

import Head from 'next/head'

import styles from '../styles/Home.module.css'
import logoAnimation from '../public/assets/lottie/logoAnimation';
import hoverAnimation from '../public/assets/lottie/hoverAnimation';

export default function Home() {

  const [introStatus, setIntroStatus] = useState(true);
  const [isStopped, setIsStopped] = useState(true);

  const introOptions = {
    loop: false,
    autoplay: true,
    animationData: logoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const hoverLoopOptions = {
    loop: true,
    autoplay: false,
    animationData: hoverAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const hoverCompleteOptions = {
    loop: false,
    autoplay: false,
    animationData: hoverAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>Six of One</title>
        <meta name="description" content="Coming Soon..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main     
        onMouseEnter={() => setIsStopped(false)}
        onClick={() => setIsStopped(false)}
        // onMouseLeave={() => this.someOtherHandler}
      >
        {introStatus ? 
          <Lottie
          isClickToPauseDisabled 
          options={introOptions}
            height={300}
            width={300}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => {setIntroStatus(false); console.log("...go away varun or quint!! 😘")},
              },
            ]}
          /> 
          :
          <Lottie
          isClickToPauseDisabled 
          options={hoverCompleteOptions}
            height={300}
            width={300}
          isStopped={isStopped}
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => {setIsStopped(true); console.log("STOPPED")},
            },
          ]}
          />
          }
          <p className={introStatus ? null : "completed"}>Coming soon...</p>
      </main>
    </div>
  )
}
