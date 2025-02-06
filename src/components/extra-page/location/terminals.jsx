import californiaFlag from '@assets/img/contact/California.png';
import oklahomaFlag from '@assets/img/contact/Oklahoma.png';
import indianaFlag from '@assets/img/contact/indiana.png';
import newJerseyFlag from '@assets/img/contact/newjersey.png';
import Link from 'next/link';
import Image from 'next/image';

const Terminals = () => {
    const terminalsData = [
        {
            name: 'California',
            background: californiaFlag,
            address: '747 W. Rialto Avenue, San Bernardino, CA, 92410',
            link: 'https://www.google.com/maps/place/747+W+Rialto+Ave,+San+Bernardino,+CA+92410,+USA/',
            icon: 'far fa-map-marker-alt',
        },
        {
            name: 'Oklahoma',
            background: oklahomaFlag,
            address: '7400 SW 3rd St, Oklahoma City, OK 73128, USA',
            link: 'https://www.google.com/maps/place/7400+SW+3rd+St,+Oklahoma+City,+OK+73128,+USA/',
            icon: 'far fa-map-marker-alt',
        },
        {
            name: 'Indianapolis',
            background: indianaFlag,
            address: '1702 S Belmont Ave, Indianapolis, IN 46221, USA',
            link: 'https://www.google.com/maps/place/1702+S+Belmont+Ave,+Indianapolis,+IN+46221,+USA/',
            icon: 'far fa-map-marker-alt',
        },
        {
            name: 'New Jersey',
            background: newJerseyFlag,
            address: '623-REAR Prospect St, Trenton, NJ 08618, USA',
            link: 'https://www.google.com/maps/search/623-REAR+Prospect+St,+Trenton,+NJ+08618,+USA/',
            icon: 'far fa-map-marker-alt',
        },
    ];

    return (
        <section className="job-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">Find</span>
                            <h2 className="title">our terminals</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {terminalsData.map((item, index) => (
                        <div className="col-xl-6 col-lg-6" key={index}>
                            {/* Display name and address outside the box */}
                            <div className="terminal-info mb-30 text-center">
                                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#ddad58" }}>
                                    <Link target='_blank' href={item.link}>{item.name}</Link>
                                </div>
                                <div className="job-meta mt-15" style={{ display: "flex", justifyContent: "center", textAlign: "center", width: "100%" }}>
                                    <Link target='_blank' href={item.link}>
                                       <span style={{ fontSize: "20px" }}>{item.address}</span>
                                    </Link>
                            </div>
                            </div>

                            {/* Terminal Box */}
                            <div className="job-wrapper mb-30" style={{ 
                                padding: "180px", 
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                                backgroundColor: "#fff", 
                                backgroundImage: `url(${item.background?.src})`, 
                                backgroundSize: "cover", 
                                backgroundPosition: "center", 
                                display: "flex", 
                                flexDirection: "column", 
                                justifyContent: "flex-end", 
                                alignItems: "center",
                                textAlign: "center",
                                paddingBottom: "20px" 
                            }}>
                                <div className="job-instructor-profile">
                                    <div className="job-instructor-title">
                                        {/* No name or address here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Terminals;
