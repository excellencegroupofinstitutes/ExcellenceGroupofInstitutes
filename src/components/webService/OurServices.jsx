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

                <div className="max-w-[1280px] mx-auto px-10 gap-10 flex md:gap-5 flex-col md:flex-row">
                    {/* cards */}
                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Primary Text</h3>
                        <p className="text-md text-gray-600 font-[300] mt-1">Secondary Text</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, optio nihil repellendus odio consectetur vero.</p>
                        <button className="w-fit bg-secondary py-3 font-bold px-4 mt-3 rounded-3xl cursor-pointer hover:scale-[1.05] active:scale-[0.99] text-white">Call To Action</button>
                    </div>
                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Primary Text</h3>
                        <p className="text-md text-gray-600 font-[300] mt-1">Secondary Text</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, optio nihil repellendus odio consectetur vero.</p>
                        <button className="w-fit bg-secondary py-3 font-bold px-4 mt-3 rounded-3xl cursor-pointer hover:scale-[1.05] active:scale-[0.99] text-white">Call To Action</button>

                    </div>
                    <div className="flex flex-col p-3">
                        <div className=" shadow-lg w-auto object-cover">
                            <img src="/images/sample-service.png" alt="card feature img" />
                        </div>
                        <h3 className="text-2xl mt-6">Primary Text</h3>
                        <p className="text-md text-gray-600 font-[300] mt-1">Secondary Text</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, optio nihil repellendus odio consectetur vero.</p>
                        <button className="w-fit bg-secondary py-3 font-bold px-4 mt-3 rounded-3xl cursor-pointer hover:scale-[1.05] active:scale-[0.99] text-white">Call To Action</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurServices;
