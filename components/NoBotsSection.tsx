import Image from "next/image";
import { Compare } from "./ui/compare";
import { CheckCircle2Icon } from "lucide-react";

export default function NoBotsSection() {
    return (
        <section className="relative overflow-hidden pt-14 lg:pt-20 xl:pt-32">
            <div className="sm:mx-auto maxs-w-[90%] px-5 md:max-w-[600px] md:px-8 lg:max-w-[1008px] xl:max-w-[1114px] 2xl:max-w-[1208px]">
                <div className="flex flex-col items-center justify-start text-center">
                    {/* Heading */}
                    <div className="relative mt-3 md:mt-3.5 lg:mt-4.5" style={{ opacity: 1, transform: "translateY(-72px)" }}>
                        <h2 className="relative z-10 text-3xl font-medium tracking-[-1.28px] md:max-w-[508px] md:text-[52px] md:leading-20 lg:max-w-[626px] lg:text-[64px] xl:max-w-[704px] xl:text-[72px]">
                            No meeting bots. <br /> 100% undetectable.
                        </h2>
                    </div>

                    {/* Subheading */}
                    <div
                        className="mt-4.5 text-base leading-snug tracking-tight text-blue underline decoration-[#E3EEFD] underline-offset-4 md:mt-6 md:max-w-[450px] md:text-lg lg:max-w-[536px] lg:text-xl xl:max-w-[540px]"
                        style={{ opacity: 1, transform: "translateY(-72px)" }}
                    >
                        <a href="https://support.cluely.com/en/articles/12364416-what-apps-are-supported-for-undetectability">
                            How does Cluely stay undetectable?
                        </a>
                    </div>

                    {/* Mobile icons */}
                    <div className="relative md:hidden" style={{ opacity: 1, transform: "translateY(-30px)" }}>
                        <Image
                            src="/icons/mobile-icons.f08ff683.png"
                            alt="Mobile icons"
                            width={422}
                            height={154}
                            className="scale-145"
                            loading="lazy"
                        />
                    </div>

                    {/* Cards Container */}
                    <div className="relative flex h-fit w-full flex-col overflow-hidden rounded-4xl lg:flex-row xl:h-[518px]">
                        {/* Left Card */}
                        <div
                            className="relative -my-0.5 flex w-full flex-col items-center justify-between gap-8 pt-14 pb-20 xl:w-1/2"
                            style={{
                                background:
                                    "radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)",
                                boxShadow:
                                    "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
                            }}
                        >
                            <Image
                                src="/images/video-conference-card.26ec85da.png"
                                alt="Video conference"
                                width={650}
                                height={442}
                                className="absolute -bottom-32 -left-24 aspect-650/442 h-4/5 object-cover object-top-right md:h-[442px] md:w-[650px]"
                                style={{
                                    maskImage: "linear-gradient(215deg, #D9D9D9 1.46%, rgba(115, 115, 115, 0.00) 89.89%)",
                                    maskSize: "cover",
                                    maskPosition: "center",
                                    maskRepeat: "no-repeat",
                                }}
                            />

                            {/* Content inside left card */}
                            <div className="flex flex-col items-center justify-center md:gap-2">
                                <h3 className="text-3xl leading-[49px] font-medium tracking-[-0.9px] md:text-36">
                                    Other AI Notetakers
                                </h3>
                                <p className="leading-[26.125px] font-medium text-[#4E5667] flex items-center gap-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="mr-2 inline-block size-5 -translate-y-0.5 fill-[#ADB2BC] text-[#ADB2BC]"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                                    </svg>
                                    Joins as an invasive participant
                                </p>
                                <div className="relative flex w-[400px] h-[250px] aspect-17/11 max-sm:max-w-[250px] mt-12 items-center justify-center rounded-2xl border-2 border-white/20" style={{ background: 'radial-gradient(78.83% 54.26% at 50% 45.74%, #3D5BA3 0%, #2C4F9B 100%)', boxShadow: '0 36.108px 120.36px 0 rgba(53, 59, 79, 0.40)' }}
                                ><div className="flex size-16 items-center justify-center rounded-full bg-white p-3"><img alt="" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" src="/icons/bot-notetaker.7257a69a.png" /></div><div className="absolute bottom-2 left-4 flex items-center gap-2"><span className="font-medium text-white">David's AI Notetaker</span><div className="size-6 rounded-full bg-white/20 p-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"></path></svg></div></div></div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div
                            className="relative flex w-full flex-col items-center justify-between gap-8 pt-14 pb-20 xl:w-1/2"
                            style={{
                                background: "linear-gradient(169deg, #898AA1 -28.62%, #555571 91.7%)",
                                boxShadow:
                                    "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
                            }}
                        >
                            <Image
                                src="/images/roy-neel-conference.d23a4a0a.png"
                                alt="Conference"
                                width={540}
                                height={330}
                                className="absolute right-0 -bottom-12 left-0 mx-auto aspect-[1.6] w-[378px] opacity-20"
                            />
                            <div className="flex flex-col items-center justify-center gap-2">
                                <Image
                                    src="/icons/logo-light.d2bd4690.svg"
                                    alt="Cluely"
                                    width={145}
                                    height={49}
                                    className="h-[49px] w-[145px]"
                                />
                                <p className="leading-[26.125px] font-medium text-background flex items-start sm:items-center max-sm:mx-3 gap-2">
                                    <CheckCircle2Icon />
                                    Undetectable to screen share, visible to you
                                </p>
                                <Compare
                                    firstImage="/images/visible.png"
                                    secondImage="/images/invisible.png"
                                    firstImageClassName="object-cover object-left-top"
                                    secondImageClassname="object-cover object-left-top"
                                    className="aspect-17/11 max-sm:max-w-[250px] h-full mt-12"
                                    slideMode="hover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block absolute top-0 left-12 z-10 transform -translate-x-4 translate-y-4 -rotate-3">
                <Image
                    src="/icons/teams.845b90a5.png"
                    alt="Left Top 1"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>
            <div className="hidden md:block absolute top-36 left-12 z-10 transform -translate-x-10 translate-y-10 rotate-2">
                <Image
                    src="/icons/ringcentral.e821ff76.png"
                    alt="Left Top 2"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>

            <div className="hidden md:block absolute top-0 right-12 z-10 transform translate-x-4 translate-y-4 rotate-3">
                <Image
                    src="/icons/zoom.398e9568.png"
                    alt="Right Top 1"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>
            <div className="hidden md:block absolute top-36 right-12 z-10 transform translate-x-10 translate-y-10 rotate-3">
                <Image
                    src="/icons/meet.7640c976.png"
                    alt="Right Top 2"
                    width={150}
                    height={150}
                    className="object-contain"
                />

            </div>
        </section>
    );
}
