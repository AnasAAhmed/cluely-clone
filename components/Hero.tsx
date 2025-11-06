
import Image from "next/image";
import { Laptop } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="hero-v2 flex flex-col items-center gap-8 lg:gap-16 bg-[url('/images/background@4x.png')] bg-top bg-no-repeat [background-size:max(100vw,100rem)]">

            {/* Header Section */}
            <div className="relative w-full">
                <section className="flex h-full items-start justify-center pt-20 lg:pt-20">
                    <div className="flex flex-col items-center gap-8">
                        {/* Title + Subtitle */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center gap-4 lg:gap-3">
                                <h1
                                    className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] text-white lg:text-[80px]"
                                    style={{ fontFamily: "'EB Garamond', 'EB Garamond Fallback'" }}
                                >
                                    <span className="block h-[57px] overflow-hidden lg:h-[76px]">
                                        <span className="inline-block">#1</span>{" "}
                                        <span className="inline-block">AI</span>{" "}
                                        <span className="inline-block">assistant</span>
                                    </span>
                                    <span className="block h-[70px] overflow-hidden lg:h-[94px]">
                                        <span className="inline-block">for</span>{" "}
                                        <span className="inline-block">meetings</span>
                                    </span>
                                </h1>

                                <hr
                                    className="hidden h-px w-96 border-none lg:block"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                                    }}
                                />

                                <h2
                                    className="text-center leading-[140%] font-medium tracking-[-0.02em] text-white lg:text-[19px]"
                                    style={{
                                        textShadow:
                                            "rgba(0, 0, 0, 0.01) 0px 40px 24px, rgba(0, 0, 0, 0.01) 0px 18px 18px, rgba(0, 0, 0, 0.01) 0px 4px 10px",
                                    }}
                                >
                                    Takes perfect notes, answers questions{" "}
                                    <br className="md:hidden" />
                                    in real-time, and
                                    <br className="hidden md:block" />
                                    makes you the most
                                    <br className="md:hidden" />
                                    prepared <span className="hidden md:inline">person</span> on
                                    every call.
                                </h2>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="h-10" id="download-button">
                            {/* Mobile Button */}
                            <button
                                type="button"
                                className="purple-gradient-button rounded-[10px] flex items-center gap-[6px] w-fit text-white font-medium text-[16px] tracking-[-0.13px] p-[10px_20px] relative overflow-hidden sm:hidden"
                            >
                                <span
                                    className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]"
                                    aria-hidden="true"
                                >
                                    <span className="blurred-border absolute -top-px -left-px z-20 h-full w-full"></span>
                                </span>

                                <div className="absolute -top-4 -left-12 h-[153px] w-[54px] opacity-40 translate-x-[285px]">
                                    <img
                                        src="/images/shimmer.aeaeb2f7.png"
                                        alt="Shimmer"
                                        // fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <Laptop className="w-5 h-5" />
                                <span>Get the desktop app</span>
                            </button>

                            {/* Desktop Button */}
                            <a
                                href="https://downloads.cluely.com/downloads/cluely-setup.exe"
                                className="purple-gradient-button rounded-[10px] items-center gap-[6px] w-fit text-white font-medium text-[16px] tracking-[-0.13px] p-[10px_20px] relative hidden overflow-hidden sm:flex"
                            >
                                <span
                                    className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]"
                                    aria-hidden="true"
                                >
                                    <span className="blurred-border absolute -top-px -left-px z-20 h-full w-full"></span>
                                </span>

                                <div className="absolute -top-4 -left-12 h-[153px] w-[54px] opacity-40 translate-x-[249px]">
                                    <img
                                        src="/shimmer.aeaeb2f7.png"
                                        alt="Shimmer"
                                        // fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <Laptop className="w-5 h-5" />

                                <span>Get for Windows</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Background Demo Section */}
            <div className="relative hiddden h-fit w-full items-start justify-center px-12 perspective-midrange md: flex">
                <div className="relative h-12s8 w-full max-w-6xl rounded-[13px] lg:aspect-[1.7] lg: h-auto">
                    <Image
                        alt="Demo Blur"
                        src="/images/wallpaper@2x.b7df867c.png"
                        fill
                        quality={10}
                        className="absolute inset-0 hidden aspect-[1.7] w-full max-w-6xl rounded-[13px] object-cover object-center blur-xl lg:block"
                    />
                    <Image
                        alt="Demo"
                        src="/images/wallpaper@2x.b7df867c.png"
                        fill
                        quality={100}
                        className="relative hidden aspect-[1.7] w-full max-w-6xl rounded-[13px] object-cover object-center lg:block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-[13px] perspective-midrange lg:overflow-hidden">
                        {/* Top overlay */}
                        <div className="absolute top-0 right-0 left-0 hidden h-fit w-full items-center justify-between bg-black/10 px-3 pt-2 pb-1 text-white lg:flex" />
                    </div>

                    {/* Bottom Dock */}
                    <div className="absolute right-0 bottom-2 left-0 hidden items-center justify-center lg:flex">
                        <div className="flex items-center gap-0.5 rounded-xl border border-white/10 bg-white/10 px-1 pt-1 pb-1 backdrop-blur-lg perspective-midrange">
                            <div className="size-fit">
                                <img src="/icons/launchpad-icon.png" alt="Launchpad" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                            <div className="size-fit">
                                <img src="/icons/safari-icon.png" alt="Safari" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                            <div className="size-fit">
                                <img src="/icons/settings-icon.png" alt="Settings" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                            <div className="size-fit">
                                <img src="/icons/zoom-icon.png" alt="Zoom" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                            <div className="size-fit">
                                <img src="/icons/cluely-icon.png" alt="Cluely" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                            <div className="mx-2 h-9 min-w-px rounded-full bg-white/30" />
                            <div className="size-fit">
                                <img src="/icons/trash-icon.png" alt="Trash" width="44" height="44" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-sw-5xl h-[700px] rounded-[13px] overflow-hidden">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                        >
                            <source className="sm:hidden" src="/videos/pro-res-vp9-chrome.webm" type="video/webm" />
                            {/* <source className="hidden sm:block" src="/videos/roy-vp9-chrome.webm" type="video/webm" /> */}
                        </video>
                    </div>


                    {/* Center Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative size-fit">
                            <div id="what-do-i-say-next">
                                <a
                                    href="#"
                                    className="lg:h-11 px-3 md:w-[178px] w-fit h-10 rounded-[6px] relative font-semibold text-white inline-flex items-center justify-center lg:w-[199px] text-base leading-none blue-gradient-button pointer-events-none"
                                >
                                    {/* Gradient layers */}
                                    <span
                                        className="inner-button-gradient-animation-wrapper absolute -top-px -left-px h-full w-full"
                                        aria-hidden="true"
                                    >
                                        <span className="inner-button-gradient-animation-background" />
                                        <span className="inner-button-gradient-animation-noise" />
                                    </span>
                                    <span
                                        className="inner-button-gradient-wrapper-no-inset absolute -top-px -left-px h-full w-full"
                                        aria-hidden="true"
                                    >
                                        <span className="inner-button-gradient-background" />
                                        <span className="inner-button-gradient-noise" />
                                        <span className="inner-button-hover-gradient absolute inset-0 h-full w-full overflow-hidden" />
                                    </span>
                                    <span className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]" aria-hidden="true">
                                        <span className="blurred-border absolute -top-px -left-px z-20 h-full w-full" />
                                    </span>
                                    <span
                                        className="absolute -inset-px h-full w-full overflow-hidden rounded-[6px]"
                                        aria-hidden="true"
                                    >
                                        <span className="absolute -top-[52px] right-1 size-20 rounded-full bg-[#7DF0F8] opacity-40 mix-blend-lighten blur-[30px]" />
                                        <span className="absolute top-0 right-1 h-7 w-20 rounded-full bg-[#7DF0F8] opacity-40 mix-blend-lighten blur-[30px]" />
                                        <span className="absolute -bottom-[42px] -left-[19px] size-20 rounded-full bg-[#7DF0F8] opacity-40 mix-blend-lighten blur-[30px]" />
                                    </span>

                                    {/* Button label */}
                                    <span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none -tracking-[0.02em] lg:text-base">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.9497 2.05026C9.21608 -0.683418 4.78393 -0.683418 2.05026 2.05026C-0.683418 4.78393 -0.683418 9.21608 2.05026 11.9497C4.78393 14.6834 9.21608 14.6834 11.9497 11.9497C14.6834 9.21608 14.6834 4.78393 11.9497 2.05026ZM3.17804 3.17804C5.28885 1.06723 8.71116 1.06723 10.822 3.17804C12.9328 5.28885 12.9328 8.71116 10.822 10.822C10.5853 11.0586 10.3323 11.2687 10.0664 11.4522L10.0701 11.4485C8.30532 9.68373 8.30532 6.82247 10.0701 5.05769L10.3207 4.80707L9.19293 3.67929L8.94232 3.92991C7.17754 5.69469 4.31627 5.69469 2.55149 3.92991L2.54779 3.93361C2.73135 3.66773 2.94144 3.41465 3.17804 3.17804ZM3.78324 11.3445C5.18177 12.3827 6.96794 12.6587 8.57252 12.1724C7.56099 10.964 7.08953 9.4567 7.15811 7.96969L3.78324 11.3445ZM1.82764 5.42748C3.03602 6.43901 4.5433 6.91047 6.03031 6.84189L2.65546 10.2168C1.61726 8.81823 1.34132 7.03206 1.82764 5.42748Z"
                                            />
                                        </svg>
                                        What should I say?
                                    </span>
                                </a>
                            </div>

                            {/* Cursor */}
                            <div id="cursor" className="absolute right-6 -bottom-12 origin-top-left">
                                <img src="/images/cursor.svg" alt="Cursor" width="65" height="71" />
                            </div>
                        </div>
                    </div>

                    {/* Chat window */}
                    <div className="absolute inset-0 flex items-start justify-center pt-2 lg:pt-12">
                        <div className="flex aspect-[1.4] w-[60%] origin-top flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#21232a]/50 to-[#21232a]/80 p-5 backdrop-blur-xs lg:w-[50%]">
                            <div className="flex h-fit w-full flex-col gap-2">
                                <div className="flex w-full justify-end">
                                    <div className="purple-gradient-button primary-fill relative origin-top-right overflow-hidden rounded-2xl rounded-br-md px-3 py-1 text-base text-[#CBE3FF] lg:text-lg">
                                        What should I say?
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5 text-sm text-[#7B828E] lg:text-base">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="size-4.5 -translate-y-px"
                                        >
                                            <path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                            <path d="M18.5 18.5l2.5 2.5" />
                                            <path d="M4 6h16" />
                                            <path d="M4 12h4" />
                                            <path d="M4 18h4" />
                                        </svg>
                                        <p>Searched records</p>
                                    </div>
                                    <div className="w-full max-w-[90%] text-base leading-[1.3] tracking-[-0.005em] text-[#F2F2F5] lg:text-lg">
                                        “So just to recap — you need new cabinets and lighting. I’ll send you a quote within the hour. Let’s do a kickoff call next Wednesday if that works for you?”
                                    </div>
                                </div>
                            </div>

                            {/* Input area */}
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex items-center gap-1 px-1.5 text-sm">
                                    <div className="flex items-center gap-1 text-[#EDEEF2]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="size-4 text-white/60"
                                        >
                                            <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                                            <path d="m14 7 3 3" />
                                            <path d="M5 6v4" />
                                            <path d="M19 14v4" />
                                            <path d="M10 2v2" />
                                            <path d="M7 8H3" />
                                            <path d="M21 16h-4" />
                                            <path d="M11 3H9" />
                                        </svg>
                                        What should I say?
                                    </div>
                                </div>
                                <div className="flex h-12 w-full items-center rounded-xl border border-white/20 bg-[#1a1e2d]/50 px-3 py-2 font-medium text-[#7A7A84]">
                                    Ask
                                    <span className="mx-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                                        ⌘
                                    </span>
                                    <span className="mr-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                                        ⏎
                                    </span>
                                    to start typing
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
