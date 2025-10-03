import React from "react";

function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;

    return (
        <div
            className="progress-bar"
            style={{
                width: "100%",
                height: "20px",
                background: "#ddd",
                borderRadius: "10px",
                overflow: "hidden",
                marginTop: "10px"
            }}
        >
            <div
                style={{
                    width: `${percentage}%`,
                    height: "100%",
                    background: percentage > 30 ? "green" : "red",
                    transition: "width 0.3s ease, background 0.3s ease"
                }}
            />
        </div>
    );
}

export default ProgressBar;
