/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_taco: THREE.Mesh;
    Mesh_taco_1: THREE.Mesh;
    Mesh_taco_2: THREE.Mesh;
    Mesh_taco_3: THREE.Mesh;
    Mesh_taco_4: THREE.Mesh;
  };
  materials: {
    brownLight: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
    brownDark: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/taco/model.gltf"
  ) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_taco.geometry}
        material={materials.brownLight}
      />
      <mesh geometry={nodes.Mesh_taco_1.geometry} material={materials.yellow} />
      <mesh geometry={nodes.Mesh_taco_2.geometry} material={materials.red} />
      <mesh
        geometry={nodes.Mesh_taco_3.geometry}
        material={materials.brownDark}
      />
      <mesh geometry={nodes.Mesh_taco_4.geometry} material={materials.green} />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/taco/model.gltf"
);
