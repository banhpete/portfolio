import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef } from "react";

export const RandomFallingItem = (props) => {
  const ref = useRef<THREE.Group>() as MutableRefObject<
    THREE.Group<THREE.Object3DEventMap>
  >;
  const speed = useRef<number>(1 + Math.random());

  const randomizePosition = (): [number, number, number] => {
    return [Math.random() * 3, Math.random() * 3, Math.random() * 3];
  };

  useFrame((_state, delta) => {
    ref.current.position.y -= delta * speed.current;
    ref.current.rotateY(delta * -1);
    ref.current.rotateZ(delta * 1);
    ref.current.rotateX(delta * 1);

    if (ref.current.position.y < -3) {
      ref.current.position.set(Math.random() * 3, 4, Math.random() * 3);
      speed.current = 1 + Math.random();
    }
  });

  return (
    <group ref={ref} position={randomizePosition()}>
      {props.children}
    </group>
  );
};
