import React from "react";
import Descriptions from "./Descriptions";
import Contacts from "./Contacts";
import Buttons from "./Buttons";
import Information from "./Information";

export default function ImageContainer() {
    return (
        <div className="image-container">
            <Information />

            <Buttons />

            <Descriptions />

            <Contacts />
        </div>
    )
}