import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import companyData from '@data/company-data';
import FooterOne from '@layout/footer/footer-1';
import HeaderThere from '@layout/header/header-there';
import Wrapper from '@layout/wrapper';
import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Privacy Policy'} info={companyData.name} />
            <HeaderThere />
            <Breadcrumb title={'Privacy Policy'} subTitle={'Privacy Policy'} />
            <section className="services__3 grey-bg-4 pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="col-md-8">
                            <div className="section__title mb-55 text-center">
                                <h2 className="title">Privacy Policies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                        <section className="mb-30">
                            <p>
                                This Privacy Policy outlines how Golden Mile Enterprises (&apos;we&apos;, &apos;our&apos;, &apos;us&apos;) collects, uses, and shares your personal information when you visit or make a purchase from goldenmileinc.com (our website).
                            </p>
                            <br />

                            <h4>
                                Personal Information We Collect
                            </h4>
                            <br />
                            <p>
                                When you visit goldenmileinc.com, we automatically collect certain information about your device, including details about your web browser, IP address, time zone, and some of the cookies installed on your device. As you browse our website, we gather information about the individual web pages or products you view, the websites or search terms that referred you to our website, and how you interact with our website. We refer to this automatically-collected information as &apos;Device Information.&apos;

                            </p>
                            <p>
                                We collect Device Information using the following technologies:
                            </p>
                            <h5>
                                - Cookies:
                            </h5>


                            <p>
                                Data files placed on your device or computer that often include an anonymous unique identifier. For more information about cookies and how to disable them, visit allaboutcookies.org.
                            </p>



                            <h5>
                                - Log Files:
                            </h5>

                            <p>

                                Track actions occurring on our website and collect data such as your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                            </p>



                            <h5>
                                - Web Beacons, Pixels and Tags:
                            </h5>


                            <p>
                                Electronic files used to record information about how you browse our website.
                            </p>
                            <p>

                                Additionally, when you make a purchase or attempt to make a purchase through our website, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as &apos;Order Information.&apos;
                            </p>

                            <p>
                                When we talk about &apos;Personal Information&apos; in this Privacy Policy, we are referring to both Device Information and Order Information.
                            </p>



                            <br />

                            <h4>
                                How Do We Use Your Personal Information?
                            </h4>
                            <br />

                            <p>

                                We use the Order Information that we collect to:
                                <br />
                                <br />



                                - Fulfill any orders placed through our website (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
                                <br />
                                - Communicate with you.
                                <br />

                                - Screen our orders for potential risk or fraud.
                                <br />

                                - Provide you with information or advertising relating to our products or services, in line with the preferences you have shared with us.
                                <br />
                                <br />

                                We use the Device Information that we collect to:
                                <br />
                                <br />

                                - Help us screen for potential risk and fraud (in particular, your IP address).
                                <br />

                                - Improve and optimize our website (for example, by generating analytics about how our customers browse and interact with our website, and to assess the success of our marketing and advertising campaigns).
                                <br />


                            </p>
                            <br />
                            <br />

                            <h4>

                                Sharing Your Personal Information
                            </h4>
                            <br />

                            <p>

                                We do not share your Personal Information with any third parties. For example, while we use Google Analytics to understand how our customers use our website, this process does not involve sharing your Personal Information with Google. You can read more about how Google handles data online and opt out of Google Analytics <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" style={{ color: 'blue' }}>here</Link> if you like.
                                <br />
                                <br />
                                We may also share your Personal Information to comply with applicable laws and regulations, respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.


                            </p>
                            <br />
                            <br />

                            <h4>
                                Behavioural Advertising
                            </h4>
                            <br />

                            <p>

                                We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, visit the Network Advertising Initiative’s educational page <Link href="https://thenai.org/about-online-advertising/faq/?tab=2" target="_blank" style={{ color: 'blue' }}>here</Link>.
                                <br />
                                <br />
                                Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal <Link href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" style={{ color: 'blue' }}>here</Link>.
                            </p>
                            <br />
                            <br />

                            <h4>
                                Do Not Track
                            </h4>
                            <br />

                            <p>
                                Please note that we do not alter our website’s data collection and use practices when we see a Do Not Track signal from your browser.
                            </p>

                            <br /><br />
                            <h4>
                                Your Rights
                            </h4>
                            <br />

                            <p>
                                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

                                <br />
                                <br />
                                Additionally, if you are a European resident, we note that we are processing your information to fulfill contracts we might have with you (for example, if you make an order through our website), or to pursue our legitimate business interests listed above. Please note that your information will be transferred outside of Europe, including to Canada and the United States.

                                <br /><br />
                                We frequently send SMS and text messages to share information regarding business and marketing with you. You can opt-out of receiving SMS and text messages from us at any time by replying &apos;STOP&apos; to any message you receive. You can also contact us directly to request to be removed from our SMS and text messaging list.
                            </p>

                            <br /><br />
                            <h4>
                                Data Retention
                            </h4>
                            <br />

                            <p>
                                When you place an order through our website, we will maintain your Order Information for our records unless and until you ask us to delete this information.

                            </p>
                            <br /><br />


                            <h4>
                                Changes
                            </h4>
                            <br />

                            <p>
                                We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.


                            </p>
                            <br /><br />


                            <h4>
                                Contact Us
                            </h4>
                            <br />

                            <p>
                                For questions or complaints about our privacy practices, contact us at info@goldenmileinc.com
                            </p>

                        </section>

                    </div>
                </div>
            </section>
            <FooterOne />
        </Wrapper>
    );
};

export default index;