class Point {
    x: number;
    y: number;
}

interface Point3D extends Point {
    z: number;
}

let point3d:Point3D= { x: 1, y: 2, z: 3 };
