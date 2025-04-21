import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Model } from "./Can3d";
import { useScroll, useTransform } from "motion/react";

const Scene = () => {
  const { scrollYProgress } = useScroll();

  // Move the camera back on the Z-axis as you scroll
  const z = useTransform(scrollYProgress, [0, 1], [10, 50]);

  const { camera } = useThree();

  useFrame(() => {
    // Smooth zoom out effect
    camera.position.set(0, 0, z.get());
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={35} position={[0, 0, 10]} />

      <ambientLight intensity={5} />
      <Model />
    </>
  );
};

export default Scene;
