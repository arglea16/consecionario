import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface ModelViewerProps {
    modelPath?: string | null;
}

function Model({ modelPath }: { modelPath: string }) {
    const gltf = useGLTF(modelPath);
    return <primitive object={gltf.scene} scale={1} position={[0, 0, 0]} />;
}

export default function ModelViewer({ modelPath }: ModelViewerProps) {
    // Si no hay ruta válida, no renderices el canvas
    if (!modelPath || modelPath.trim() === '') {
        return <p>No hay modelo 3D disponible</p>;
    }

    return (
        <Canvas style={{ height: '100%', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <Suspense fallback={<p>Cargando modelo 3D...</p>}>
                <Model modelPath={modelPath} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
