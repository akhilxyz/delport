import Link from "next/link";
import React from "react";
import { insight_data, insight_data_logos } from "@data/insight-data";
import Image from "next/image";
import { px } from "framer-motion";

const InsightSection = () => {
  return (
    <section className="blog pt-90 pb-85 white-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-8 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
          >
            <div className="section__title mb-30 text-center">
              <span className="sub-title">insights</span>
              <h2 className="title">Latest Updates</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {insight_data.slice(0, 3).map((item) => (
                  <div className="col-md-12" key={item.id}>
                    <div
                      className="blog__item mb-60 w-img wow fadeInUp d-flex flex-column flex-md-row align-items-center justify-content-between"
                      data-wow-duration="1.5s"
                      data-wow-delay=".6s"
                    >
                      <div
                        className="blog__item-img mb-35"
                        style={{
                          flex: "1",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={item.image}
                          width={600}
                          height={400}
                          alt="Insight"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <div
                        className="blog__item-content"
                        style={{
                          flex: "1",
                          textAlign: "left",
                          padding: "20px",
                        }}
                      >
                        <h2>{item.title}</h2>
                        <div className="blog__item-text">
                          <p
                            style={{
                              maxWidth: "800px",
                              margin: "0 auto",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "30px",
                borderTop: "1px solid black",
                width: "100%",
                paddingTop: "5px",
              }}
            >
              <div
                style={{
                  color: "#E1AA4C",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "Oswald, sans-serif",
                  padding: "10px",
                  marginTop:"10px",
                }}
              >
                Recognized Affiliations 
              </div>
              <div
                className="row"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  padding: "5px",
                  flexWrap: "wrap",
                }}
              >
                {insight_data_logos.slice(0, 5).map((item, index) => (
                  <div
                    className="col-md-2"
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      margin:"10px",
                    }}
                  >
                    <Image
                      key={index + 1}
                      src={item.image}
                      width={500}
                      height={100}
                      alt="Insight Logo"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Section */}
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid black",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#E1AA4C",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textalign: "center",
                  fontFamily: "Oswald, sans-serif",
                  padding: "10px",
                  marginBottom: "20px", // Added space below the heading
                }}
              >
                Community Involvement 
              </p>
              <iframe
                width="560"
                height="315"
                padding="10px"
                src="https://www.youtube.com/embed/89ogadnQ8uo?si=QKteZKcSQR5wwc-A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              ></iframe>
                <p>
                  Our support towards LA wildfires.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
