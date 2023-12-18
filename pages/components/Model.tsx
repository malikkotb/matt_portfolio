import { useGLTF } from "@react-three/drei";


export default function Model({ source, scale }) {
    const { scene } = useGLTF(source);
    return <primitive object={scene} scale={scale} />
}
