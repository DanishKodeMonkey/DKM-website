import React from "react";
import QRCodeComponent from "../components/qrCode.tsx";

const BusinessCardPage: React.FC = () => {
    console.log("Businesscard rendered");
    return (
        <div>
            <h1>Danish Kode Monkey</h1>
            <p>Have a QR code!</p>
            <QRCodeComponent value="https://danishkodemonkey.github.io/DKM-website/" />
        </div>
    );
};

export default BusinessCardPage;
