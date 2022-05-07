import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from "@react-three/drei";


const ChairModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/chair.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });
  return (
    show ? 
      <primitive object={gltf.scene} scale={4} position={[0, -2.1, 0]} />
      :
      null
  );
};

const DeskModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/desk.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });
  return (
    show ?
      <primitive object={gltf.scene} scale={2.8} position={[0, -2, 0]} />
      :
      null
  );
};

const BookshelfModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/bookshelf.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });
  return (
    show ? 
      <primitive object={gltf.scene} scale={2.7} position={[0, -2.5, 0]} />
    :
    null
  );
};

const StoragingModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/storage.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });
  return (
    show ?
      <primitive object={gltf.scene} scale={2.7} position={[-1.34, -2.5, 0]} />
    :
    null
  );
};

const SideTableModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/sidetable.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });
  return (
    show ?
      <primitive object={gltf.scene} scale={3.5} position={[-1.6, -1.5, 0]} />
    :
    null
  );
};

const ConsoleModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/console.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/')
    loader.setDRACOLoader(dracoLoader)
  });  return (
    show ?
      <primitive object={gltf.scene} scale={3.2} position={[-1.45, -1.5, 0]} />
    :
    null
  );
};



const ThreePlayground = ({buttonState}) => {





  return (
    <Canvas className="threeCanvas">
        <Suspense fallback={console.log("loading...")}>
          <ambientLight intensity={0.7}/>
          <pointLight intensity={0.6} position={[10, 10, 10]} castShadow/>
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <ChairModel show={buttonState == 1 ? true : false}/>
          <DeskModel show={buttonState == 2 ? true : false}/>
          <BookshelfModel show={buttonState == 3 ? true : false}/>
          <StoragingModel show={buttonState == 4 ? true : false}/>
          <SideTableModel show={buttonState == 5 ? true : false}/>
          <ConsoleModel show={buttonState == 6 ? true : false}/>
          <OrbitControls enableZoom={false} />
        </Suspense>
    </Canvas>
  );

}

export default ThreePlayground