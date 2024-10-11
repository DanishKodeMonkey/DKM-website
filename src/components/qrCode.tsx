import React from "react";

import QRCode from "react-qr-code";

import { QRCodeProps } from "../types.ts";

const QRCodeComponent: React.FC<QRCodeProps> = ({
    value,
    size = 256, // default size
    bgColor = "#ffffff", // default bg color
    fgColor = "@000000", // default fg color
}) => {
    return (
        <div className="flex justify-center items-center">
            <QRCode
                value={value}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                className="border border-gray-300 rounded"
            />
        </div>
    );
};

export default QRCodeComponent;
