/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_donutSprinkles: THREE.Mesh;
    Mesh_donutSprinkles_1: THREE.Mesh;
    Mesh_donutSprinkles_2: THREE.Mesh;
    Mesh_donutSprinkles_3: THREE.Mesh;
    Mesh_donutSprinkles_4: THREE.Mesh;
  };
  materials: {
    brownLight: THREE.MeshStandardMaterial;
    purpleLight: THREE.MeshStandardMaterial;
    orange: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/donut-sprinkles/model.gltf"
  ) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_donutSprinkles.geometry}
        material={materials.brownLight}
      />
      <mesh
        geometry={nodes.Mesh_donutSprinkles_1.geometry}
        material={materials.purpleLight}
      />
      <mesh
        geometry={nodes.Mesh_donutSprinkles_2.geometry}
        material={materials.orange}
      />
      <mesh
        geometry={nodes.Mesh_donutSprinkles_3.geometry}
        material={materials.yellow}
      />
      <mesh
        geometry={nodes.Mesh_donutSprinkles_4.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/donut-sprinkles/model.gltf"
);
