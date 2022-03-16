import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';

import Head from 'next/head'

import styles from '../styles/Home.module.css'
import logoAnimation from '../public/assets/lottie/logoAnimation';
import hoverAnimation from '../public/assets/lottie/hoverAnimation';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Home() {

  const [introStatus, setIntroStatus] = useState(true);
  const [isStopped, setIsStopped] = useState(true);

  const size = useWindowSize();
  console.log(size.width);

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
            height={size.width > 500 ? 300 : 200}
            width={size.width > 500 ? 300 : 200}
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
            height={size.width > 500 ? 300 : 200}
            width={size.width > 500 ? 300 : 200}
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
