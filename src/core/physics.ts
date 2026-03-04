// Физика/математика (позже: орбиты, время, параметры)
export type Vector3 = { x: number; y: number; z: number };

export function degToRad(deg: number): number {
    return (deg * Math.PI) / 180;
}