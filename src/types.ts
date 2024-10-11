export type Dino = { name: string; description: string };

export interface QRCodeProps {
    value: string; // URL to encode in QR
    size?: number; // optional size for QR
    bgColor?: string; //optional bg color for QR
    fgColor?: string; //optional fg color for QR
}
