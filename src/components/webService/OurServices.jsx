import React from "react";

const OurServices = () => {
    return (
        <section className="relative py-10 mt-20">
            <div className="max-w-[1360px] mx-auto ">
                <div>
                    <svg viewBox="0 0 800 150" className="w-full">
                        <defs>
                            <pattern
                                id="wave"
                                x="0"
                                y="0"
                                width="200"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M-40 20 Q-20 0 0 20 T40 20 T80 20 T120 20 T160 20 T200 20 V40 H-40z"
                                    fill="var(--color-secondary)"
                                />
                            </pattern>
                        </defs>

                        <text x="50" y="100" fontSize="100" fontWeight="bold">
                            <tspan className="letter" x="50">
                                S
                            </tspan>
                            <tspan className="letter" x="100">
                                E
                            </tspan>
                            <tspan className="letter" x="150">
                                R
                            </tspan>
                            <tspan className="letter" x="210">
                                V
                            </tspan>
                            <tspan className="letter" x="275">
                                I
                            </tspan>
                            <tspan className="letter" x="301">
                                C
                            </tspan>
                            <tspan className="letter" x="357">
                                E
                            </tspan>
                            <tspan className="letter" x="407">
                                S
                            </tspan>
                        </text>
                    </svg>
                </div>

                <div className="max-w-[1280px] mx-auto px-10 gap-10 grid grid-cols-1 md:grid-cols-3">
                    {/* cards */}
                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Website Designing</h3>
                        <p className="mt-5 text-gray-700">We craft modern, responsive, and visually appealing designs that perfectly align with your brand identity and deliver an engaging user experience.</p>
                    </div>


                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Web Development</h3>
                        <p className="mt-5 text-gray-700">Our development team builds secure, scalable, and high-performance websites using the latest technologies to meet your business goals.</p>
                    </div>


                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">IT Services</h3>
                        <p className="mt-5 text-gray-700">From troubleshooting to complete IT management, we provide reliable services that keep your systems running smoothly and efficiently.</p>
                    </div>

                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Digital Marketing</h3>
                        <p className="mt-5 text-gray-700">Boost your brand visibility with tailored digital marketing strategies designed to reach the right audience and drive measurable results.</p>
                    </div>

                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">SEO Services</h3>
                        <p className="mt-5 text-gray-700">We optimize your website with proven SEO techniques that improve search rankings, increase traffic, and enhance online credibility.</p>
                    </div>


                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Google Listing</h3>
                        <p className="mt-5 text-gray-700">Ensure your business gets noticed with a verified Google listing that improves local visibility and helps customers find you easily.</p>
                    </div>

                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Social Media Marketing</h3>
                        <p className="mt-5 text-gray-700">Grow your brand on popular platforms with engaging social media campaigns that build trust, loyalty, and a wider audience.</p>
                    </div>

                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Facebook & Instagram Ads</h3>
                        <p className="mt-5 text-gray-700">Maximize reach and conversions with data-driven ad campaigns on Facebook and Instagram tailored to your business objectives.</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OurServices;
