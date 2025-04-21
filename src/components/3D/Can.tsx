import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Can = () => {
  return (
    <div className="h-[400vh] w-full relative  bg-white ">
      <Canvas
        style={{ height: "100vh", width: "100vw", position: "sticky", top: 0 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Can;
