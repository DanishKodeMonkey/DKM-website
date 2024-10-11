import React from "react";
import QRCodeComponent from "../components/qrCode.tsx";

const BusinessCardPage: React.FC = () => {
    return (
        <div>
            <h1>Danish Kode Monkey</h1>
            <QRCodeComponent value="localhost:5173" />
        </div>
    );
};

export default BusinessCardPage;
