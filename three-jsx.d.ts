
import * as THREE from 'three'
import { ThreeElement } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElement<THREE.Mesh> {}
    interface IntrinsicElements {
      mesh: ThreeElement<THREE.Mesh>
      ambientLight: ThreeElement<THREE.AmbientLight>
      pointLight: ThreeElement<THREE.PointLight>
      spotLight: ThreeElement<THREE.SpotLight>
      group: ThreeElement<THREE.Group>
      sphereGeometry: ThreeElement<THREE.SphereGeometry>
      octahedronGeometry: ThreeElement<THREE.OctahedronGeometry>
      meshStandardMaterial: ThreeElement<THREE.MeshStandardMaterial>
    }
  }
}
