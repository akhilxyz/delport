import React from 'react';
import Image from 'next/image';
import brandData from '@data/brand-data';

const BrandArea = () => {
    return (
        <div style={{ padding: "50px 0", textAlign: "center" }}>
            {/* Line with centered text */}
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                maxWidth: "1200px", 
                margin: "0 auto 30px"
            }}>
                <div style={{ flex: 1, height: "2px", backgroundColor: "#ddd" }}></div>
                <p style={{ 
                    margin: "0 20px", 
                    fontSize: "25px",
                    color: "black", 
                    whiteSpace: "nowrap", 
                    fontFamily: "Arial",
                    fontWeight: "700",
                }}>
                    Shipping Partners
                </p>
                <div style={{ flex: 1, height: "2px", backgroundColor: "#ddd" }}></div>
            </div>

            {/* Brand Logos Grid */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "50px",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 10px",
            }}>
                {brandData.slice(0, 8).map((item) => (
                    <div key={item.id} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "250px",
                        height: "100px", // Ensure the container has height
                    }}>
                        <Image
                            src={item.image}
                            alt={`${item.name} logo`}  
                            width={350}  
                            height={80}  
                            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandArea;
