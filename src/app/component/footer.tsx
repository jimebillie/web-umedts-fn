import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneVolume, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {faLine, faWeixin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className="flex justify-center py-5 bg-green-800 text-white">
                <div className="w-[90%] md:w-[80%]">
                    {
                        /**
                         * -------------------------------------------
                         * # Grid wrap
                         * -------------------------------------------
                         * @desc -
                         *
                         */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            /**
                             * -------------------------------------------
                             * # Column 1
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <div className="relative top-[-15px] left-[-15px]">
                                <Image src={"/logo/logo-green.png"} alt={"logo"} width={100} height={100}/>
                            </div>
                            <div>
                                <div className="text-2xl p-3 rounded-2xl bg-green-900">
                                    บริษัท ยูเมดิคอลเทรดดิ้งแอนด์เซอร์วิส จำกัด
                                    <div className="mt-[1em] flex flex-wrap text-sm text-gray-200">
                                        <FontAwesomeIcon icon={faQuoteLeft} style={{
                                            width: "10px",
                                            height: "10px",
                                            marginRight: "5px",
                                        }}/>
                                        ให้บริการแบบเข้าใจผู้ประกอบการ
                                        <FontAwesomeIcon icon={faQuoteRight} style={{
                                            width: "10px",
                                            height: "10px",
                                            marginLeft: "5px",
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            /**
                             * -------------------------------------------
                             * # Column 2
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <h3 className="text-3xl underline underline-offset-[10px]">
                                บริการ
                            </h3>
                            <div className="mt-[1.3em]">
                                <div className="my-[1em] flex flex-wrap">
                                    - บริการที่ 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae.
                                </div>
                                <div className="my-[1em] flex flex-wrap">
                                    - บริการที่ 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ut?
                                </div>
                                <div className="my-[1em] flex flex-wrap">
                                    - บริการที่ 3 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, quas.
                                </div>
                            </div>
                        </div>
                        {
                            /**
                             * -------------------------------------------
                             * # Column 3
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <h3 className="text-3xl underline underline-offset-[10px]">
                                ติดต่อเรา
                            </h3>
                            <p className="mt-[1.3em]">
                                ที่อยู่ : บริษัท ยูเมดิคอลเทรดดิ้งแอนด์เซอร์วิส จำกัด (สำนักงานใหญ่) 69/488 หมู่ที่ 13
                                ถนนปู่เจ้าสมิงพราย ตำบลบางหัวเสือ อำเภอพระประแดง จังหวัดสมุทรปราการ 10130
                            </p>
                            <div className="mt-[1.3em]">
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faPhoneVolume} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="tel:021143652">02-114-3652</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faPhoneVolume} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="tel:0989569289">098-956-9289</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faEnvelope} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="mailto:infoumedical@gmail.com">infoumedical@gmail.com</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faLine} style={{width: "20px", height: "20px"}}/>
                                    <div className="ml-2">
                                        @udms2022
                                    </div>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faWeixin} style={{width: "20px", height: "20px"}}/>
                                    <div className="ml-2">
                                        +66989569289
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}