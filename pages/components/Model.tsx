import { useGLTF } from "@react-three/drei";

type Model = {
  source: string;
  // scale: number;
};
export default function Model({ source }: Model) {
  const { scene } = useGLTF(source);
  return (
      <primitive object={scene} /> // {/*  scale={scale} */}
  );
}
