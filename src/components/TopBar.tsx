"use client";

import React from "react";

export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="container top-bar-container">
                <div className="top-bar-item">
                    <span className="top-bar-icon">✉️</span>
                    <a href="mailto:Drishtinashamuktikendra@gmail.com">Drishtinashamuktikendra@gmail.com</a>
                </div>
                <div className="top-bar-right">
                    <div className="top-bar-item">
                        <span className="top-bar-icon">📞</span>
                        <a href="tel:+919755209205">+91 9755209205</a>
                    </div>
                    <div className="top-bar-sep">|</div>
                    <div className="top-bar-item">
                        <a href="tel:+919755369205">+91 9755369205</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
