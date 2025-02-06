import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import companyData from '@data/company-data';
import FooterOne from '@layout/footer/footer-1';
import HeaderThere from '@layout/header/header-there';
import Wrapper from '@layout/wrapper';
import React from 'react';

const TermsAndConditions = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Terms and Conditions'}  info={companyData.name}/>
            <HeaderThere />
            <Breadcrumb title={'Terms and Conditions'} subTitle={'Terms and Conditions'} />
            <section className="services__3 grey-bg-4 pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="col-md-8">
                            <div className="section__title mb-55 text-center">
                                <h2 className="title">Terms and Conditions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">

                        <section className="mb-30">

                            <p>
                                Welcome to Golden Mile Enterprises Inc. These terms outline the rules and regulations for using our website.

                            </p>
                            <h4>
                                Website Use
                            </h4>

                            <br />

                            <p>
                                By accessing this website, you agree to these terms and conditions. Do not use our website if you disagree with any part of these terms.</p>
                            <br />
                            <br />
                            <h4>
                                Intellectual Property Rights
                            </h4>
                            <br />

                            <p>
                                All content on this website, including text, images, graphics, logos, and software, is the property of Golden Mile Enterprises Inc. and protected by copyright laws </p>
                            <br />


                            <h4>
                                Use License
                            </h4>
                            <br />

                            Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.


                            <br />
                            <br />


                            <h4>
                                Limitations
                            </h4>
                            <br />

                            <p>
                                You may not:
                                <br />
                                <br />
                                <ol>
                                    <li>1. Modify or copy the materials.</li>
                                    <li>2. Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).
                                    </li>
                                    <li>3. Attempt to decompile or reverse engineer any software contained on our website.
                                    </li>
                                    <li>4. Remove any copyright or other proprietary notations from the materials.
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <br />

                            <h4>

                                Disclaimer
                            </h4>
                            <br />

                            <p>

                                The materials on our website are provided on basis. Golden Mile Enterprises Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.


                            </p>
                            <br />
                            <br />

                            <h4>

                                Limitations
                            </h4>
                            <br />

                            <p>

                                In no event shall Golden Mile Enterprises Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.


                            </p>
                            <br />
                            <br />

                            <h4>
                                Revisions and Errata


                            </h4>
                            <br />

                            <p>

                                The materials appearing on our website may include technical, typographical, or photographic errors. Golden Mile Enterprises Inc. does not warrant that any of the materials on its website are accurate, complete, or current.


                            </p>
                            <br />
                            <br />

                            <h4>
                                Links
                            </h4>
                            <br />

                            <p>
                                Golden Mile Enterprises Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Golden Mile Enterprises Inc. of the site. Use of any such linked website is at the user&apos;s own risk.


                            </p>
                            <br />
                            <br />
                            <h4>
                                Modifications
                            </h4>
                            <br />

                            <p>
                                Golden Mile Enterprises Inc. may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions.
                            </p>
                            <br />
                            <br />

                            <h4>
                                Governing Law
                            </h4>
                            <br />

                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                            <br />
                            <br />

                            <h4>
                                Contact Us
                            </h4>
                            <br />

                            <p>
                                If you have any questions about these terms and conditions, please contact us at info@goldenmileinc.com.</p>



                        </section>

                    </div>
                </div>
            </section>
            <FooterOne />
        </Wrapper>
    );
};

export default TermsAndConditions;