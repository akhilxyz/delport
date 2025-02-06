import React from 'react';

const FunfactArea = () => {
    return (
        <section 
            className="dp-funfact-area pt-30 pb-0"
            style={{
                position: "relative",
                padding: "30px 0",
                textAlign: "center",
                overflow: "hidden"
            }}
        >
            {/* Background Image with Opacity */}
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/assets/img/41 trailer.png')",
                    backgroundSize: "100%", // Adjust image size (use contain or custom px %)
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.3, // 👈 Only background image opacity
                    zIndex: -1
                }}
            ></div>

            {/* Text Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <p
                    style={{
                        color: "#E1AA4C",
                        fontSize: "90px",
                        fontWeight: "bold",
                        fontFamily: "Oswald, sans-serif",
                        marginTop: "160px",
                    }}
                >
                    4:1 Trailer Ratio for Drop Solutions
                </p>
                    <br></br>
                    <br></br>   
                    <br></br>  
                    <br></br>   
                    <br></br>   
                    <br></br>   
                    <br></br>   


                <div>
                    <p
                        style={{
                            color: "#777777",
                            fontSize: "70px",
                            fontWeight: "bold",
                            fontFamily: "Oswald, sans-serif",
                            marginBottom: "130px",
                        }}
                    >
                        All Asset Based Capacity 
                    </p>
                    <br></br>   <br></br>   
                </div>    
            </div>
        </section>
    );
};

export default FunfactArea;
