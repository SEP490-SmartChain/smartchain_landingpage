import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { ContactShadows, Edges, Grid, Html, Line, RoundedBox } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export interface LandingCanvasHandle {
  setCameraTarget: (x: number, y: number, z: number) => void;
  setCameraPos: (x: number, y: number, z: number) => void;
  setAccentColor: (hex: string) => void;
  setSceneIndex: (idx: number) => void;
  setScrollProgress: (p: number) => void;
}

export interface LandingCanvasProps {
  onSelectNode?: (idx: number) => void;
  paused?: boolean;
  theme?: 'light' | 'dark';
}

export const NODES_DATA = [
  {
    id: 0,
    stopIdx: 1,
    shortLabel: '01 · Nhập kho & Kiểm đếm',
    pos: [-0.6, 0, -1.75] as [number, number, number],
    accent: '#14b8a6',
  },
  {
    id: 1,
    stopIdx: 2,
    shortLabel: '02 · Kệ lưu trữ cao tầng',
    pos: [2.7, 0, -1.75] as [number, number, number],
    accent: '#f59e0b',
  },
  {
    id: 2,
    stopIdx: 3,
    shortLabel: '03 · Định tuyến & Đóng gói',
    pos: [2.7, 0, 1.75] as [number, number, number],
    accent: '#3b82f6',
  },
  {
    id: 3,
    stopIdx: 4,
    shortLabel: '04 · Đối soát tại cửa xuất',
    pos: [-0.6, 0, 1.75] as [number, number, number],
    accent: '#10b981',
  },
] as const;

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function smoothstep(min: number, max: number, value: number) {
  const x = clamp((value - min) / (max - min), 0, 1);
  return x * x * (3 - 2 * x);
}

// ── Smooth Camera Rig ────────────────────────────────────────────────────────
function CameraRig({
  posRef,
  lookRef,
  mouseRef,
}: {
  posRef: React.MutableRefObject<THREE.Vector3>;
  lookRef: React.MutableRefObject<THREE.Vector3>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  const currentLook = useRef(new THREE.Vector3(-0.6, 0.45, 0));

  useFrame(() => {
    const targetX = posRef.current.x + mouseRef.current.x * 0.15;
    const targetY = posRef.current.y + mouseRef.current.y * 0.08;
    const targetZ = posRef.current.z;

    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.085);
    currentLook.current.lerp(lookRef.current, 0.085);
    camera.lookAt(currentLook.current);
  });

  return null;
}

// ── Detailed 3D Staff Character ──────────────────────────────────────────────
function StaffCharacter3D({
  position,
  rotationY = 0,
  vestColor = '#10b981',
  holdingScanner = false,
  animated = false,
}: {
  position: [number, number, number];
  rotationY?: number;
  vestColor?: string;
  holdingScanner?: boolean;
  animated?: boolean;
}) {
  const armRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (animated && armRef.current) {
      armRef.current.rotation.x = -0.5 + Math.sin(Date.now() * 0.004) * 0.2;
    }
  });

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[-0.035, 0.08, 0]} castShadow>
        <capsuleGeometry args={[0.024, 0.09, 6, 8]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      <mesh position={[0.035, 0.08, 0]} castShadow>
        <capsuleGeometry args={[0.024, 0.09, 6, 8]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>

      <RoundedBox args={[0.13, 0.17, 0.08]} radius={0.025} position={[0, 0.22, 0]} castShadow>
        <meshStandardMaterial color={vestColor} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0.2, 0.042]}>
        <boxGeometry args={[0.125, 0.02, 0.005]} />
        <meshStandardMaterial color="#fef08a" emissive="#facc15" emissiveIntensity={0.5} />
      </mesh>

      <mesh position={[0, 0.35, 0]} castShadow>
        <sphereGeometry args={[0.052, 14, 14]} />
        <meshStandardMaterial color="#fde68a" roughness={0.5} />
      </mesh>

      <mesh position={[0, 0.38, 0]} castShadow>
        <sphereGeometry args={[0.056, 14, 10, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} />
      </mesh>

      <group ref={armRef} position={[0.085, 0.27, 0]} rotation={[-0.55, 0, 0]}>
        <mesh position={[0, -0.05, 0.02]}>
          <capsuleGeometry args={[0.02, 0.08, 6, 8]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {holdingScanner && (
          <group position={[0, -0.1, 0.06]}>
            <RoundedBox args={[0.07, 0.015, 0.09]} radius={0.005}>
              <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1.4} />
            </RoundedBox>
          </group>
        )}
      </group>
    </group>
  );
}

// ── Detailed 3D Logistics Truck ──────────────────────────────────────────────
function LogisticsTruckMesh({
  rotationY = 0,
  trailerColor = '#0d9488',
  stripeColor = '#5eead4',
  cabColor = '#ffffff',
  scale = 0.8,
}: {
  rotationY?: number;
  trailerColor?: string;
  stripeColor?: string;
  cabColor?: string;
  scale?: number;
}) {
  return (
    <group rotation={[0, rotationY, 0]} scale={scale}>
      <RoundedBox args={[1.45, 0.08, 0.56]} radius={0.02} position={[0, 0.14, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
      </RoundedBox>

      <RoundedBox
        args={[0.98, 0.54, 0.56]}
        radius={0.04}
        smoothness={3}
        position={[-0.2, 0.45, 0]}
        castShadow
      >
        <meshStandardMaterial color={trailerColor} roughness={0.3} metalness={0.2} />
        <Edges color={stripeColor} lineWidth={1.1} />
      </RoundedBox>

      <mesh position={[-0.2, 0.46, 0.285]}>
        <boxGeometry args={[0.82, 0.065, 0.01]} />
        <meshStandardMaterial color={stripeColor} emissive={stripeColor} emissiveIntensity={1.1} />
      </mesh>
      <mesh position={[-0.2, 0.46, -0.285]}>
        <boxGeometry args={[0.82, 0.065, 0.01]} />
        <meshStandardMaterial color={stripeColor} emissive={stripeColor} emissiveIntensity={1.1} />
      </mesh>

      <RoundedBox args={[0.22, 0.14, 0.5]} radius={0.03} position={[0.42, 0.62, 0]}>
        <meshStandardMaterial color={cabColor} roughness={0.25} />
      </RoundedBox>

      <RoundedBox
        args={[0.38, 0.4, 0.52]}
        radius={0.05}
        smoothness={3}
        position={[0.48, 0.37, 0]}
        castShadow
      >
        <meshStandardMaterial color={cabColor} roughness={0.25} metalness={0.15} />
        <Edges color="#94a3b8" lineWidth={0.8} />
      </RoundedBox>

      <RoundedBox args={[0.03, 0.18, 0.44]} radius={0.01} position={[0.665, 0.43, 0]}>
        <meshStandardMaterial color="#0284c7" emissive="#38bdf8" emissiveIntensity={0.6} />
      </RoundedBox>

      {[-0.18, 0.18].map((hz) => (
        <mesh key={hz} position={[0.675, 0.24, hz]}>
          <boxGeometry args={[0.02, 0.05, 0.09]} />
          <meshStandardMaterial color="#ffffff" emissive="#fef08a" emissiveIntensity={3} />
        </mesh>
      ))}

      {[
        [-0.5, 0.11, 0.28],
        [-0.5, 0.11, -0.28],
        [-0.18, 0.11, 0.28],
        [-0.18, 0.11, -0.28],
        [0.46, 0.11, 0.28],
        [0.46, 0.11, -0.28],
      ].map(([wx, wy, wz]) => (
        <group key={`${wx}-${wz}`} position={[wx, wy, wz]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.11, 0.11, 0.08, 18]} />
            <meshStandardMaterial color="#0f172a" roughness={0.85} />
          </mesh>
          <mesh position={[0, 0.042, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.01, 14]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ── Scroll-Driven Inbound & Outbound Truck Fleet on Left Roadway ─────────────
function ScrollDrivenTruckFleet({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const inboundTruckRef = useRef<THREE.Group>(null);
  const outboundTruck1Ref = useRef<THREE.Group>(null);
  const outboundTruck2Ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = scrollRef.current;

    // 1. INBOUND TRUCK (Z = -1.75):
    // At p = 0.00 -> starts on the left roadway (X = -5.2) clearly in view.
    // As user scrolls from 0.00 to 0.15 -> drives straight into Dock 01 (X = -2.35)!
    if (inboundTruckRef.current) {
      const enterT = smoothstep(0.0, 0.14, p);
      const targetX = -5.2 + enterT * 2.85; // -5.2 -> -2.35
      inboundTruckRef.current.position.x += (targetX - inboundTruckRef.current.position.x) * 0.16;
    }

    // 2. OUTBOUND 3PL TRUCKS (Z = +1.35 & Z = +2.25):
    // Docked at Outbound Bays (X = -2.5) during Steps 0-4, then drive out along the left road (-2.5 -> -5.8) in Step 5!
    if (outboundTruck1Ref.current) {
      const exitT1 = smoothstep(0.76, 0.94, p);
      const targetX1 = -2.5 - exitT1 * 3.3; // -2.5 -> -5.8
      outboundTruck1Ref.current.position.x +=
        (targetX1 - outboundTruck1Ref.current.position.x) * 0.16;
    }
    if (outboundTruck2Ref.current) {
      const exitT2 = smoothstep(0.81, 0.99, p);
      const targetX2 = -2.5 - exitT2 * 2.4; // -2.5 -> -4.9
      outboundTruck2Ref.current.position.x +=
        (targetX2 - outboundTruck2Ref.current.position.x) * 0.16;
    }
  });

  return (
    <group position={[0, 0.02, 0]}>
      {/* Inbound Cargo Truck Driving Into Dock 01 */}
      <group ref={inboundTruckRef} position={[-5.2, 0, -1.75]}>
        <LogisticsTruckMesh
          rotationY={0}
          trailerColor="#0d9488"
          stripeColor="#5eead4"
          scale={0.78}
        />
      </group>

      {/* Outbound 3PL Truck #1 (GHN Emerald) Driving Out of Dock 02 */}
      <group ref={outboundTruck1Ref} position={[-2.5, 0, 1.35]}>
        <LogisticsTruckMesh
          rotationY={Math.PI}
          trailerColor="#059669"
          stripeColor="#6ee7b7"
          scale={0.76}
        />
      </group>

      {/* Outbound 3PL Truck #2 (GHTK Blue) Driving Out of Dock 03 */}
      <group ref={outboundTruck2Ref} position={[-2.5, 0, 2.25]}>
        <LogisticsTruckMesh
          rotationY={Math.PI}
          trailerColor="#0284c7"
          stripeColor="#7dd3fc"
          scale={0.76}
        />
      </group>
    </group>
  );
}

// ── SLEEK MODERN ARCHITECTURAL 3D FULFILLMENT CENTER BUILDING ────────────────
function EncompassingWarehouseShell({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const roofAndWallsRef = useRef<THREE.Group>(null);
  const inboundDoorRef = useRef<THREE.Mesh>(null);
  const outboundDoor1Ref = useRef<THREE.Mesh>(null);
  const outboundDoor2Ref = useRef<THREE.Mesh>(null);
  const [showExteriorBadge, setShowExteriorBadge] = useState(true);

  useFrame(() => {
    const p = scrollRef.current;
    // Closed at Stop 0 (p < 0.12) and Stop 5 (p > 0.81); Open during Indoor Steps 1-4
    const openEnter = smoothstep(0.11, 0.17, p);
    const closeExit = 1 - smoothstep(0.79, 0.85, p);
    const openAmount = openEnter * closeExit;

    if (openAmount < 0.35 && !showExteriorBadge) setShowExteriorBadge(true);
    if (openAmount >= 0.35 && showExteriorBadge) setShowExteriorBadge(false);

    if (roofAndWallsRef.current) {
      const targetY = openAmount * 6.5;
      roofAndWallsRef.current.position.y += (targetY - roofAndWallsRef.current.position.y) * 0.15;
      roofAndWallsRef.current.visible = roofAndWallsRef.current.position.y < 5.6;
    }

    if (inboundDoorRef.current) {
      const doorOpen = smoothstep(0.04, 0.13, p);
      inboundDoorRef.current.position.y = 0.56 + doorOpen * 0.72;
      inboundDoorRef.current.scale.y = Math.max(0.1, 1 - doorOpen * 0.85);
    }

    const outDoorOpen = smoothstep(0.74, 0.83, p);
    if (outboundDoor1Ref.current) {
      outboundDoor1Ref.current.position.y = 0.56 + outDoorOpen * 0.72;
      outboundDoor1Ref.current.scale.y = Math.max(0.1, 1 - outDoorOpen * 0.85);
    }
    if (outboundDoor2Ref.current) {
      outboundDoor2Ref.current.position.y = 0.56 + outDoorOpen * 0.72;
      outboundDoor2Ref.current.scale.y = Math.max(0.1, 1 - outDoorOpen * 0.85);
    }
  });

  // Warehouse footprint: X from -1.9 to +4.7 (width = 6.6m, center X = +1.4), Z from -3.1 to +3.1 (depth = 6.2m, center Z = 0)
  return (
    <group>
      {/* ── A. PERMANENT FOUNDATION: Left Asphalt Truck Yard + Indoor Floor ── */}
      {/* 1. Left Logistics Highway & Loading Apron (X: -6.7 to -1.9, width 4.8m, center X = -4.3) */}
      <group position={[-4.3, -0.04, 0]}>
        <RoundedBox args={[4.8, 0.1, 6.2]} radius={0.03} position={[0, -0.05, 0]} receiveShadow>
          <meshStandardMaterial color="#0f172a" roughness={0.85} />
          <Edges color="#334155" lineWidth={1.2} />
        </RoundedBox>

        {/* Yellow/Teal Painted Truck Reversing Guide Lines at the Docks */}
        {[-2.15, -1.35].map((gz) => (
          <Line
            key={gz}
            points={[
              [0.6, 0.01, gz],
              [2.35, 0.01, gz],
            ]}
            color="#facc15"
            lineWidth={1.8}
          />
        ))}
        {[0.95, 1.75, 2.65].map((gz) => (
          <Line
            key={gz}
            points={[
              [0.6, 0.01, gz],
              [2.35, 0.01, gz],
            ]}
            color="#34d399"
            lineWidth={1.6}
          />
        ))}

        {/* Highway Dashed Lane Markings */}
        <Line
          points={[
            [-2.2, 0.01, -1.75],
            [0.4, 0.01, -1.75],
          ]}
          color="#2dd4bf"
          lineWidth={1.8}
          dashed
          dashScale={2.5}
        />
        <Line
          points={[
            [-2.2, 0.01, 1.8],
            [0.4, 0.01, 1.8],
          ]}
          color="#38bdf8"
          lineWidth={1.8}
          dashed
          dashScale={2.5}
        />
        <Line
          points={[
            [-2.3, 0.01, 0],
            [2.3, 0.01, 0],
          ]}
          color="#475569"
          lineWidth={1.2}
        />
      </group>

      {/* 2. Indoor Warehouse Concrete Floor Slab (X: -1.9 to +4.7, center X = +1.4) */}
      <group position={[1.4, -0.03, 0]}>
        <RoundedBox args={[6.6, 0.12, 6.2]} radius={0.04} position={[0, -0.06, 0]} receiveShadow>
          <meshStandardMaterial color="#0b1b2d" roughness={0.7} metalness={0.15} />
          <Edges color="#14b8a6" lineWidth={1.6} />
        </RoundedBox>

        <Grid
          position={[0, 0.005, 0]}
          args={[6.4, 6.0]}
          cellSize={0.55}
          cellThickness={0.5}
          cellColor="#132f4c"
          sectionSize={2.2}
          sectionThickness={1.0}
          sectionColor="#0d9488"
          fadeDistance={14}
          fadeStrength={1.2}
        />
      </group>

      {/* ── B. ARCHITECTURAL WAREHOUSE SHELL & SLOPED ROOF (Lifts Open on Scroll!) ── */}
      <group ref={roofAndWallsRef}>
        {/* 1. Crisp Architectural Alabaster/Silver Precast Cladding Body */}
        <RoundedBox
          args={[6.56, 1.52, 6.16]}
          radius={0.04}
          smoothness={2}
          position={[1.4, 0.76, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} metalness={0.12} />
          <Edges color="#64748b" lineWidth={1.1} />
        </RoundedBox>

        {/* Dark Charcoal Base Plinth Around Building Bottom */}
        <mesh position={[1.4, 0.1, 0]}>
          <boxGeometry args={[6.6, 0.2, 6.2]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>

        {/* Signature ORCA Deep Teal Crown Fascia Overhang Around Top Perimeter */}
        <RoundedBox args={[6.72, 0.22, 6.32]} radius={0.03} position={[1.4, 1.48, 0]} castShadow>
          <meshStandardMaterial color="#0f766e" roughness={0.3} metalness={0.2} />
          <Edges color="#2dd4bf" lineWidth={1.4} />
        </RoundedBox>

        {/* Glowing Mint LED Trim Line Under the Teal Fascia */}
        <mesh position={[1.4, 1.35, 0]}>
          <boxGeometry args={[6.62, 0.03, 6.22]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#14b8a6" emissiveIntensity={2.0} />
        </mesh>

        {/* 2. Front-Left 2-Story Glass Curtain-Wall Control Office (X = -0.7 to +1.8, Z = +3.09) */}
        <group position={[0.6, 0.72, 3.09]}>
          {/* Glass Curtain Wall Frame */}
          <RoundedBox args={[2.8, 1.15, 0.08]} radius={0.02}>
            <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.2} />
            <Edges color="#38bdf8" />
          </RoundedBox>
          {/* Glowing Panoramic Glass Windows (2 Floors) */}
          {[-0.26, 0.26].map((wy) => (
            <mesh key={wy} position={[0, wy, 0.045]}>
              <planeGeometry args={[2.56, 0.42]} />
              <meshStandardMaterial
                color="#38bdf8"
                emissive="#0284c7"
                emissiveIntensity={0.85}
                roughness={0.15}
              />
            </mesh>
          ))}
          {/* Vertical Mullions on Glass Office */}
          {[-0.85, 0, 0.85].map((mx) => (
            <mesh key={mx} position={[mx, 0, 0.05]}>
              <boxGeometry args={[0.04, 1.12, 0.02]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          ))}
        </group>

        {/* Vertical Charcoal Steel Columns Along Front & Left Facades */}
        {[2.4, 3.5, 4.6].map((cx) => (
          <mesh key={cx} position={[cx, 0.74, 3.09]}>
            <boxGeometry args={[0.08, 1.25, 0.04]} />
            <meshStandardMaterial color="#334155" metalness={0.5} />
          </mesh>
        ))}

        {/* 3. LEFT LOADING DOCK FACADE (X = -1.89, Facing the Camera at 3/4 Isometric Angle!) */}
        {/* Cantilevered Teal Dock Canopy Projecting Over the Loading Bays */}
        <RoundedBox args={[0.75, 0.08, 5.8]} radius={0.02} position={[-2.22, 1.18, 0]} castShadow>
          <meshStandardMaterial color="#0f766e" roughness={0.3} metalness={0.25} />
          <Edges color="#5eead4" lineWidth={1.3} />
        </RoundedBox>
        {/* Warm LED Downlight Strip Under Canopy */}
        <mesh position={[-2.2, 1.13, 0]}>
          <boxGeometry args={[0.5, 0.02, 5.5]} />
          <meshStandardMaterial color="#fef08a" emissive="#facc15" emissiveIntensity={1.6} />
        </mesh>

        {/* DOCK 01: Inbound Loading Bay (Z = -1.75) */}
        <group position={[-1.89, 0, -1.75]}>
          {/* Dark Dock Seal Frame */}
          <mesh position={[-0.02, 0.56, 0]}>
            <boxGeometry args={[0.06, 1.05, 0.96]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
          {/* Ribbed Roll-Up Door */}
          <mesh ref={inboundDoorRef} position={[-0.04, 0.56, 0]}>
            <boxGeometry args={[0.04, 0.96, 0.82]} />
            <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
            <Edges color="#94a3b8" />
          </mesh>
          {/* Yellow Safety Dock Bumpers */}
          {[-0.44, 0.44].map((bz) => (
            <mesh key={bz} position={[-0.06, 0.16, bz]}>
              <boxGeometry args={[0.06, 0.22, 0.06]} />
              <meshStandardMaterial color="#facc15" />
            </mesh>
          ))}
          {/* Green Status Light */}
          <mesh position={[-0.05, 1.28, 0]}>
            <boxGeometry args={[0.04, 0.06, 0.32]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={2.5} />
          </mesh>
        </group>

        {/* DOCK 02 & DOCK 03: Outbound 3PL Loading Bays (Z = +1.35 & Z = +2.25) */}
        {[
          { z: 1.35, ref: outboundDoor1Ref, color: '#10b981' },
          { z: 2.25, ref: outboundDoor2Ref, color: '#38bdf8' },
        ].map((bay) => (
          <group key={bay.z} position={[-1.89, 0, bay.z]}>
            <mesh position={[-0.02, 0.56, 0]}>
              <boxGeometry args={[0.06, 1.05, 0.78]} />
              <meshStandardMaterial color="#0f172a" />
            </mesh>
            <mesh ref={bay.ref} position={[-0.04, 0.56, 0]}>
              <boxGeometry args={[0.04, 0.96, 0.66]} />
              <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
              <Edges color="#94a3b8" />
            </mesh>
            {[-0.36, 0.36].map((bz) => (
              <mesh key={bz} position={[-0.06, 0.16, bz]}>
                <boxGeometry args={[0.06, 0.22, 0.06]} />
                <meshStandardMaterial color="#facc15" />
              </mesh>
            ))}
            <mesh position={[-0.05, 1.28, 0]}>
              <boxGeometry args={[0.04, 0.06, 0.28]} />
              <meshStandardMaterial
                color={bay.color}
                emissive={bay.color}
                emissiveIntensity={2.5}
              />
            </mesh>
          </group>
        ))}

        {/* 4. TRUE SLOPED ARCHITECTURAL GABLE ROOF (`/\` Sloped Planes + Flush Skylights) */}
        <group position={[1.4, 1.58, 0]}>
          {/* Back Sloped Roof Plane (Tilted +8 degrees) */}
          <group position={[0, 0.2, -1.52]} rotation={[0.14, 0, 0]}>
            <RoundedBox args={[6.64, 0.06, 3.12]} radius={0.02} castShadow>
              <meshStandardMaterial color="#334155" roughness={0.5} metalness={0.3} />
              <Edges color="#64748b" lineWidth={1.0} />
            </RoundedBox>
            {/* Flush Dark-Glass Skylight Strip */}
            <mesh position={[0, 0.035, 0]}>
              <boxGeometry args={[5.6, 0.01, 0.65]} />
              <meshStandardMaterial
                color="#0284c7"
                emissive="#0ea5e9"
                emissiveIntensity={0.45}
                roughness={0.15}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Front Sloped Roof Plane (Tilted -8 degrees) */}
          <group position={[0, 0.2, 1.52]} rotation={[-0.14, 0, 0]}>
            <RoundedBox args={[6.64, 0.06, 3.12]} radius={0.02} castShadow>
              <meshStandardMaterial color="#475569" roughness={0.5} metalness={0.3} />
              <Edges color="#64748b" lineWidth={1.0} />
            </RoundedBox>
            {/* Flush Dark-Glass Skylight Strip */}
            <mesh position={[0, 0.035, 0]}>
              <boxGeometry args={[5.6, 0.01, 0.65]} />
              <meshStandardMaterial
                color="#0284c7"
                emissive="#0ea5e9"
                emissiveIntensity={0.45}
                roughness={0.15}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Central Roof Ridge Cap Beam */}
          <RoundedBox args={[6.68, 0.07, 0.26]} radius={0.02} position={[0, 0.42, 0]}>
            <meshStandardMaterial color="#0f766e" roughness={0.3} />
            <Edges color="#2dd4bf" />
          </RoundedBox>
        </group>

        {/* Clean Exterior Badge on the Warehouse Roof */}
        {showExteriorBadge && (
          <Html position={[1.4, 2.35, 0]} center className="pointer-events-none select-none">
            <div className="flex items-center gap-2 rounded-full border border-teal-400/50 bg-[#071322]/90 px-4 py-1.5 text-xs font-bold text-white shadow-2xl backdrop-blur-md whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TRUNG TÂM KHO VẬN ORCA</span>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}

// ── 3D Warehouse Forklift ────────────────────────────────────────────────────
function Forklift3D({
  position,
  rotationY = 0,
  moveAxis,
  moveRange = 0.4,
}: {
  position: [number, number, number];
  rotationY?: number;
  moveAxis?: 'x' | 'z';
  moveRange?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current || !moveAxis) return;
    const offset = Math.sin(Date.now() * 0.0018) * moveRange;
    if (moveAxis === 'x') ref.current.position.x = position[0] + offset;
    else ref.current.position.z = position[2] + offset;
  });

  return (
    <group ref={ref} position={position} rotation={[0, rotationY, 0]}>
      <RoundedBox args={[0.34, 0.18, 0.24]} radius={0.03} position={[0, 0.12, 0]} castShadow>
        <meshStandardMaterial color="#f59e0b" roughness={0.35} />
      </RoundedBox>
      <RoundedBox args={[0.24, 0.22, 0.22]} radius={0.02} position={[-0.02, 0.3, 0]}>
        <meshStandardMaterial color="#1e293b" wireframe />
      </RoundedBox>
      <mesh position={[0.19, 0.26, 0]}>
        <boxGeometry args={[0.03, 0.42, 0.18]} />
        <meshStandardMaterial color="#475569" metalness={0.7} />
      </mesh>
      <RoundedBox args={[0.22, 0.18, 0.22]} radius={0.02} position={[0.31, 0.2, 0]} castShadow>
        <meshStandardMaterial color="#14b8a6" roughness={0.4} />
        <Edges color="#99f6e4" />
      </RoundedBox>
    </group>
  );
}

// ── Zone Floor Pad Inside the Warehouse ──────────────────────────────────────
function StagePlatform({
  width = 2.5,
  depth = 2.1,
  accent,
  active,
  hovered,
}: {
  width?: number;
  depth?: number;
  accent: string;
  active: boolean;
  hovered: boolean;
}) {
  const highlighted = active || hovered;
  return (
    <group>
      <RoundedBox
        args={[width, 0.05, depth]}
        radius={0.03}
        smoothness={2}
        position={[0, 0.025, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          color={highlighted ? '#112f46' : '#0c2135'}
          roughness={0.6}
          metalness={0.15}
        />
        <Edges threshold={15} color={accent} lineWidth={highlighted ? 2.4 : 1.2} />
      </RoundedBox>
    </group>
  );
}

// ── STAGE 01: Khu Kiểm Đếm & Tiếp Nhận Hàng ──────────────────────────────────
function Stage01Receiving({ accent }: { accent: string }) {
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (scanRef.current) {
      scanRef.current.position.x = 0.0 + Math.sin(Date.now() * 0.003) * 0.35;
    }
  });

  return (
    <group position={[0, 0.05, 0]}>
      <RoundedBox args={[1.45, 0.1, 0.38]} radius={0.02} position={[0.0, 0.12, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.3} />
        <Edges color="#64748b" />
      </RoundedBox>

      <RoundedBox args={[0.2, 0.46, 0.5]} radius={0.02} position={[0.0, 0.34, 0]}>
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
        <Edges color={accent} lineWidth={1.5} />
      </RoundedBox>

      <mesh ref={scanRef} position={[0.0, 0.26, 0]}>
        <boxGeometry args={[0.02, 0.24, 0.36]} />
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={2.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {[-0.45, 0.0, 0.45].map((cx, i) => (
        <RoundedBox
          key={cx}
          args={[0.2, 0.17, 0.2]}
          radius={0.02}
          position={[cx, 0.26, 0]}
          castShadow
        >
          <meshStandardMaterial color={i === 1 ? accent : '#f59e0b'} roughness={0.4} />
          <Edges color="#ffffff" lineWidth={0.6} />
        </RoundedBox>
      ))}

      <StaffCharacter3D
        position={[-0.25, 0, 0.44]}
        rotationY={Math.PI}
        vestColor="#10b981"
        holdingScanner
        animated
      />
      <StaffCharacter3D
        position={[0.35, 0, 0.44]}
        rotationY={-Math.PI / 1.25}
        vestColor="#0ea5e9"
        holdingScanner
        animated
      />

      <Forklift3D position={[-0.2, 0, -0.58]} rotationY={0} moveAxis="x" moveRange={0.32} />

      <group position={[0.62, 0, -0.55]}>
        <RoundedBox args={[0.44, 0.05, 0.44]} radius={0.01} position={[0, 0.025, 0]}>
          <meshStandardMaterial color="#475569" />
        </RoundedBox>
        <RoundedBox args={[0.34, 0.22, 0.34]} radius={0.02} position={[0, 0.16, 0]} castShadow>
          <meshStandardMaterial color="#14b8a6" roughness={0.4} />
          <Edges color="#99f6e4" />
        </RoundedBox>
      </group>
    </group>
  );
}

// ── STAGE 02: Khu Kho Kệ Cao Tầng & Quản Lý Hạn Dùng ────────────────────────
function Stage02StorageRacks({ accent }: { accent: string }) {
  const rackRows = [-0.66, 0.0, 0.66];
  const bays = [-0.84, -0.28, 0.28, 0.84];
  const levels = [0.18, 0.48, 0.78];

  return (
    <group position={[0, 0.05, 0]}>
      {rackRows.map((rz, rIdx) => (
        <group key={rz} position={[0.1, 0, rz]}>
          {levels.map((ly) => (
            <mesh key={ly} position={[0, ly, 0]}>
              <boxGeometry args={[2.2, 0.035, 0.34]} />
              <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.35} />
            </mesh>
          ))}

          {bays.map((bx, bIdx) => (
            <group key={bx} position={[bx, 0, 0]}>
              <mesh position={[-0.22, 0.48, -0.15]}>
                <boxGeometry args={[0.035, 0.96, 0.035]} />
                <meshStandardMaterial color="#64748b" metalness={0.7} />
              </mesh>
              <mesh position={[0.22, 0.48, 0.15]}>
                <boxGeometry args={[0.035, 0.96, 0.035]} />
                <meshStandardMaterial color="#64748b" metalness={0.7} />
              </mesh>

              {levels.map((ly, lIdx) => {
                const isPriority = (rIdx + bIdx + lIdx) % 3 === 0;
                const boxColor = isPriority
                  ? accent
                  : (rIdx + bIdx) % 2 === 0
                    ? '#0d9488'
                    : '#0284c7';
                return (
                  <RoundedBox
                    key={ly}
                    args={[0.34, 0.18, 0.26]}
                    radius={0.02}
                    position={[0, ly + 0.11, 0]}
                    castShadow
                  >
                    <meshStandardMaterial
                      color={boxColor}
                      emissive={isPriority ? accent : '#000000'}
                      emissiveIntensity={isPriority ? 0.35 : 0}
                      roughness={0.35}
                    />
                    <Edges color={isPriority ? '#fde68a' : '#99f6e4'} lineWidth={0.8} />
                  </RoundedBox>
                );
              })}
            </group>
          ))}
        </group>
      ))}

      <Forklift3D position={[-1.15, 0, 0]} rotationY={Math.PI / 2} moveAxis="z" moveRange={0.42} />
      <StaffCharacter3D
        position={[-1.12, 0, 0.76]}
        rotationY={0.4}
        vestColor="#f59e0b"
        holdingScanner
        animated
      />
    </group>
  );
}

// ── STAGE 03: Mô Hình Định Tuyến Đa Điểm & Đóng Gói ─────────────────────────
function Stage03RoutingAndPacking({ accent }: { accent: string }) {
  const holoGlobeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (holoGlobeRef.current) holoGlobeRef.current.rotation.y += delta * 0.65;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.8;
  });

  const routingArcs = useMemo(() => {
    const hubNorth = new THREE.Vector3(-0.22, 0.24, -0.22);
    const hubCentral = new THREE.Vector3(0.02, 0.24, 0.02);
    const hubSouth = new THREE.Vector3(0.24, 0.24, 0.22);
    const c1 = new THREE.QuadraticBezierCurve3(
      hubNorth,
      new THREE.Vector3(-0.1, 0.48, -0.1),
      hubCentral,
    );
    const c2 = new THREE.QuadraticBezierCurve3(
      hubCentral,
      new THREE.Vector3(0.14, 0.48, 0.12),
      hubSouth,
    );
    return [
      c1.getPoints(16).map((p) => [p.x, p.y, p.z] as [number, number, number]),
      c2.getPoints(16).map((p) => [p.x, p.y, p.z] as [number, number, number]),
    ];
  }, []);

  return (
    <group position={[0, 0.05, 0]}>
      <group position={[-0.8, 0, -0.05]}>
        <mesh position={[0, 0.09, 0]} castShadow>
          <cylinderGeometry args={[0.48, 0.54, 0.18, 24]} />
          <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} />
          <Edges color={accent} lineWidth={1.4} />
        </mesh>

        <mesh position={[0, 0.19, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.44, 32]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.22} />
        </mesh>

        <mesh ref={ringRef} position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.38, 0.44, 32]} />
          <meshBasicMaterial color={accent} side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>

        <mesh ref={holoGlobeRef} position={[0, 0.46, 0]}>
          <icosahedronGeometry args={[0.22, 1]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={2.0}
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>

        {[
          [-0.22, 0.24, -0.22],
          [0.02, 0.24, 0.02],
          [0.24, 0.24, 0.22],
        ].map(([hx, hy, hz]) => (
          <mesh key={`${hx}-${hz}`} position={[hx, hy, hz]}>
            <sphereGeometry args={[0.048, 12, 12]} />
            <meshStandardMaterial color="#ffffff" emissive="#10b981" emissiveIntensity={3} />
          </mesh>
        ))}
        {routingArcs.map((pts, idx) => (
          <Line
            key={idx === 0 ? 'north-central' : 'central-south'}
            points={pts}
            color="#38bdf8"
            lineWidth={2}
          />
        ))}

        <StaffCharacter3D
          position={[-0.42, 0, 0.46]}
          rotationY={Math.PI * 0.75}
          vestColor="#3b82f6"
          holdingScanner
          animated
        />
      </group>

      <group position={[0.44, 0, 0]}>
        <RoundedBox args={[1.6, 0.12, 0.38]} radius={0.02} position={[0, 0.12, -0.44]} castShadow>
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
          <Edges color={accent} />
        </RoundedBox>

        <RoundedBox args={[0.2, 0.42, 0.5]} radius={0.02} position={[0, 0.33, -0.44]}>
          <meshStandardMaterial color="#0f172a" roughness={0.3} />
          <Edges color="#38bdf8" lineWidth={1.4} />
        </RoundedBox>

        {[-0.52, 0, 0.52].map((bx, i) => (
          <RoundedBox
            key={bx}
            args={[0.22, 0.17, 0.22]}
            radius={0.02}
            position={[bx, 0.26, -0.44]}
            castShadow
          >
            <meshStandardMaterial color={i === 1 ? '#10b981' : '#f59e0b'} roughness={0.35} />
            <Edges color="#ffffff" lineWidth={0.8} />
          </RoundedBox>
        ))}

        {[-0.4, 0.4].map((sx, idx) => (
          <group key={sx} position={[sx, 0, 0.22]}>
            <RoundedBox args={[0.54, 0.24, 0.36]} radius={0.02} position={[0, 0.12, 0]} castShadow>
              <meshStandardMaterial color="#334155" roughness={0.4} />
              <Edges color="#93c5fd" />
            </RoundedBox>
            <mesh position={[-0.1, 0.25, 0]}>
              <boxGeometry args={[0.22, 0.02, 0.22]} />
              <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.2} />
            </mesh>
            <RoundedBox
              args={[0.18, 0.15, 0.18]}
              radius={0.015}
              position={[-0.1, 0.33, 0]}
              castShadow
            >
              <meshStandardMaterial color="#d97706" roughness={0.45} />
              <Edges color="#fef08a" />
            </RoundedBox>
            <RoundedBox args={[0.16, 0.13, 0.02]} radius={0.01} position={[0.14, 0.31, -0.11]}>
              <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1.4} />
            </RoundedBox>
            <StaffCharacter3D
              position={[0, 0, 0.36]}
              rotationY={Math.PI}
              vestColor={idx === 0 ? '#10b981' : '#3b82f6'}
              animated
            />
          </group>
        ))}
      </group>
    </group>
  );
}

// ── STAGE 04: Khu Bàn Giao & Đối Soát Tại Cửa Xuất ──────────────────────────
function Stage04HandoverInside({ accent }: { accent: string }) {
  return (
    <group position={[0, 0.05, 0]}>
      {[-0.42, 0.42].map((lz, i) => (
        <group key={lz} position={[0.2, 0, lz]}>
          <RoundedBox args={[0.92, 0.04, 0.52]} radius={0.01} position={[0, 0.02, 0]}>
            <meshStandardMaterial color="#1e293b" />
            <Edges color={i === 0 ? accent : '#38bdf8'} />
          </RoundedBox>
          {[-0.24, 0.2].map((px) => (
            <RoundedBox
              key={px}
              args={[0.26, 0.22, 0.28]}
              radius={0.02}
              position={[px, 0.15, 0]}
              castShadow
            >
              <meshStandardMaterial color={i === 0 ? accent : '#0ea5e9'} roughness={0.35} />
              <Edges color="#ffffff" lineWidth={0.7} />
            </RoundedBox>
          ))}
        </group>
      ))}

      <RoundedBox args={[0.28, 0.26, 0.36]} radius={0.02} position={[-0.65, 0.13, 0]} castShadow>
        <meshStandardMaterial color="#334155" />
        <Edges color={accent} />
      </RoundedBox>

      <StaffCharacter3D
        position={[-0.38, 0, 0.25]}
        rotationY={-Math.PI / 2}
        vestColor="#10b981"
        holdingScanner
        animated
      />
      <StaffCharacter3D
        position={[-0.88, 0, 0.25]}
        rotationY={Math.PI / 2}
        vestColor="#f59e0b"
        animated
      />
    </group>
  );
}

// ── Animated AGV Parcel Shuttle Moving Between Indoor Stages ─────────────────
function AgvParcelShuttle({
  from,
  to,
  color,
  offset = 0,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  offset?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const curve = useMemo(() => {
    const midX = (from[0] + to[0]) / 2;
    const midZ = (from[2] + to[2]) / 2;
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(from[0], 0.02, from[2]),
      new THREE.Vector3(midX, 0.02, midZ),
      new THREE.Vector3(to[0], 0.02, to[2]),
    );
  }, [from, to]);

  const points = useMemo(
    () => curve.getPoints(20).map((p) => [p.x, p.y, p.z] as [number, number, number]),
    [curve],
  );

  useFrame(() => {
    if (!ref.current) return;
    const t = (Date.now() * 0.00022 + offset) % 1;
    const pos = curve.getPoint(t);
    ref.current.position.copy(pos);
  });

  return (
    <group>
      <Line points={points} color="#1e3a5f" lineWidth={1.6} dashed dashScale={4} />
      <group ref={ref}>
        <RoundedBox args={[0.22, 0.05, 0.22]} radius={0.02} position={[0, 0.035, 0]}>
          <meshStandardMaterial color="#334155" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.13, 0.15]} radius={0.02} position={[0, 0.12, 0]} castShadow>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
        </RoundedBox>
      </group>
    </group>
  );
}

// ── Wrapper for Each of the 4 Indoor Stages ──────────────────────────────────
function WarehouseStageNode({
  node,
  activeSceneIdx,
  onSelect,
}: {
  node: (typeof NODES_DATA)[number];
  activeSceneIdx: number;
  onSelect?: (idx: number) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isFocused = activeSceneIdx === node.stopIdx;

  return (
    <group
      position={node.pos}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(node.stopIdx);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <StagePlatform
        width={node.id === 1 || node.id === 2 ? 3.1 : 2.3}
        depth={2.1}
        accent={node.accent}
        active={isFocused}
        hovered={hovered}
      />

      {node.id === 0 && <Stage01Receiving accent={node.accent} />}
      {node.id === 1 && <Stage02StorageRacks accent={node.accent} />}
      {node.id === 2 && <Stage03RoutingAndPacking accent={node.accent} />}
      {node.id === 3 && <Stage04HandoverInside accent={node.accent} />}

      {isFocused && (
        <Html position={[0, 1.18, 0]} center className="select-none pointer-events-auto">
          <div
            className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md whitespace-nowrap"
            style={{
              background: 'rgba(11, 27, 45, 0.95)',
              borderColor: node.accent,
              boxShadow: `0 0 18px ${node.accent}66`,
            }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: node.accent }} />
            <span>{node.shortLabel}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

// ── Main 3D Scene ────────────────────────────────────────────────────────────
function MainScene({
  posRef,
  lookRef,
  mouseRef,
  sceneIndexRef,
  scrollRef,
  onSelectNode,
}: {
  posRef: React.MutableRefObject<THREE.Vector3>;
  lookRef: React.MutableRefObject<THREE.Vector3>;
  accentRef: React.MutableRefObject<string>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  sceneIndexRef: React.MutableRefObject<number>;
  scrollRef: React.MutableRefObject<number>;
  onSelectNode?: (idx: number) => void;
}) {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const interiorRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (sceneIndexRef.current !== activeSceneIdx) setActiveSceneIdx(sceneIndexRef.current);
    if (interiorRef.current) {
      const p = scrollRef.current;
      interiorRef.current.visible = p >= 0.11 && p <= 0.85;
    }
  });

  return (
    <group position={[0, 0.1, 0]}>
      <CameraRig posRef={posRef} lookRef={lookRef} mouseRef={mouseRef} />

      <ambientLight intensity={1.55} color="#f8fafc" />
      <hemisphereLight args={['#ffffff', '#0f172a', 1.2]} />
      <directionalLight position={[-10, 16, 12]} intensity={2.3} color="#ffffff" castShadow />
      <directionalLight position={[10, 12, -8]} intensity={1.0} color="#5eead4" />

      {/* 1. Sleek Architectural 3D Warehouse Building + Left Truck Yard */}
      <EncompassingWarehouseShell scrollRef={scrollRef} />

      {/* 2. Scroll-Driven Inbound & Outbound Trucks */}
      <ScrollDrivenTruckFleet scrollRef={scrollRef} />

      {/* 3. Warehouse Interior Operations (Hidden when Roof is Closed!) */}
      <group ref={interiorRef}>
        <AgvParcelShuttle
          from={[0.45, 0, -1.75]}
          to={[1.3, 0, -1.75]}
          color="#14b8a6"
          offset={0.1}
        />
        <AgvParcelShuttle from={[2.7, 0, -0.7]} to={[2.7, 0, 0.7]} color="#f59e0b" offset={0.35} />
        <AgvParcelShuttle from={[1.3, 0, 1.75]} to={[0.45, 0, 1.75]} color="#3b82f6" offset={0.6} />

        {NODES_DATA.map((node) => (
          <WarehouseStageNode
            key={node.id}
            node={node}
            activeSceneIdx={activeSceneIdx}
            onSelect={onSelectNode}
          />
        ))}
      </group>

      <ContactShadows position={[0, -0.02, 0]} opacity={0.4} scale={18} blur={2.4} far={4} />
    </group>
  );
}

const LandingCanvas = forwardRef<LandingCanvasHandle, LandingCanvasProps>(
  ({ onSelectNode, paused = false }, ref) => {
    // True 3/4 Left-Front Isometric Angle so BOTH the Left Loading Docks and Front Glass Office are clearly visible!
    const posRef = useRef<THREE.Vector3>(new THREE.Vector3(-5.2, 4.8, 8.2));
    const lookRef = useRef<THREE.Vector3>(new THREE.Vector3(-0.6, 0.45, 0));
    const accentRef = useRef<string>('#10b981');
    const sceneIndexRef = useRef<number>(0);
    const scrollRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = {
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: -(e.clientY / window.innerHeight - 0.5) * 2,
        };
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.style.cursor = 'auto';
      };
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    useImperativeHandle(ref, () => ({
      setCameraPos(x, y, z) {
        posRef.current.set(x, y, z);
      },
      setCameraTarget(x, y, z) {
        lookRef.current.set(x, y, z);
      },
      setAccentColor(hex) {
        accentRef.current = hex;
      },
      setSceneIndex(idx) {
        sceneIndexRef.current = idx;
      },
      setScrollProgress(p) {
        scrollRef.current = p;
      },
    }));

    return (
      <Canvas
        camera={{ position: [-5.2, 4.8, 8.2], fov: 35 }}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'auto' }}
        performance={{ min: 0.5 }}
        frameloop={paused ? 'never' : 'always'}
      >
        <MainScene
          posRef={posRef}
          lookRef={lookRef}
          accentRef={accentRef}
          mouseRef={mouseRef}
          sceneIndexRef={sceneIndexRef}
          scrollRef={scrollRef}
          onSelectNode={onSelectNode}
        />
      </Canvas>
    );
  },
);

LandingCanvas.displayName = 'LandingCanvas';
export default LandingCanvas;
