import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Planet() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.0008;
  });

  return (
    <mesh ref={ref} scale={2.2} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#5533ff" emissive="#111133" roughness={0.6} />
    </mesh>
  );
}
