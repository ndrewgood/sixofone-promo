import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

import chair from '../../public/assets/gltf/chair.gltf'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ChairModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/chair.gltf');
  return (
    show ? 
      <primitive object={gltf.scene} scale={3.5} position={[0, -2, 0]} />
      :
      null
  );
};

const DeskModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/desk.gltf');
  return (
    show ?
      <primitive object={gltf.scene} scale={2.5} position={[0, -2, 0]} />
      :
      null
  );
};

const BookshelfModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/bookshelf.gltf');
  return (
    show ? 
      <primitive object={gltf.scene} scale={2.5} position={[0, -2.5, 0]} />
    :
    null
  );
};

const StoragingModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/storage.glb');
  return (
    show ?
      <primitive object={gltf.scene} scale={2.5} position={[0, -2.5, 0]} />
    :
    null
  );
};

const SideTableModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/sideTable.glb');
  return (
    show ?
      <primitive object={gltf.scene} scale={3} position={[0, -1.5, 0]} />
    :
    null
  );
};

const ConsoleModel = ({show}) => {
  const gltf = useLoader(GLTFLoader, '/assets/gltf/console.glb');
  return (
    show ?
      <primitive object={gltf.scene} scale={2.5} position={[0, -1.5, 0]} />
    :
    null
  );
};



const ThreePlayground = ({buttonState}) => {


  // let model;
  // if (buttonState == 1) {
  //   model = <ChairModel />
  // } else if (buttonState == 2) {
  //   model = <DeskModel />
  // } else if (buttonState == 3) {
  //   model = <BookshelfModel />
  // } else if (buttonState == 4) {
  //   model = <StoragingModel />
  // } else if (buttonState == 5) {
  //   model = <SideTableModel />
  // } else if (buttonState == 6) {
  //   model = <ConsoleModel />
  // }


  return (
    <Canvas className="threeCanvas">
        <Suspense fallback={console.log("loading...")}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* {model} */}
          <ChairModel show={buttonState == 1 ? true : false}/>
          <DeskModel show={buttonState == 2 ? true : false}/>
          <BookshelfModel show={buttonState == 3 ? true : false}/>
          <StoragingModel show={buttonState == 4 ? true : false}/>
          <SideTableModel show={buttonState == 5 ? true : false}/>
          <ConsoleModel show={buttonState == 6 ? true : false}/>
          <OrbitControls enableZoom={false} />
        </Suspense>

      {/* <Box position={[1.2, 0, 0]} /> */}
    </Canvas>
  );

}

export default ThreePlayground