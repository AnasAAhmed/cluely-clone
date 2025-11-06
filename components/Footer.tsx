import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="relative z-20 overflow-x-hidden pt-32 pb-16 md:pt-[174px] md:pb-40 lg:pb-[210px] xl:pt-[220px]">
                <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
                    {/* Text Section */}
                    <div className="max-w-[575px] md:max-w-[492px] lg:max-w-[575px]">
                        <h3 className="inline text-[20px] leading-tight font-medium -tracking-[0.04em] text-foreground sm:block sm:text-[28px] md:text-[24px] lg:text-[28px]">
                            Meeting AI that helps during the call, not after.
                        </h3>
                        <p className="inline gradient-text bg-[conic-gradient(96.56deg,#667799_21.01%,#94A0B8_34.62%,#667799_47.64%,#667799_69.29%,#94A0B8_79.76%,#667799_90.35%)] text-[20px] leading-tight font-medium -tracking-[0.04em] sm:block sm:text-[28px] md:text-[24px] lg:text-[28px]">
                            Try Cluely on your next meeting today.
                        </p>

                        {/* Button */}
                        <div className="mt-5 flex flex-col gap-5 sm:flex-row md:mt-6 lg:mt-7 xl:mt-7 xl:gap-[18px]">
                            <Link
                                href="https://downloads.cluely.com/downloads/cluely-setup.exe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lg:h-11 px-3 md:w-[178px] w-fit h-10 rounded-[6px] relative font-semibold text-white inline-flex items-center justify-center lg:w-[199px] text-base leading-none black-gradient-button"
                            >
                                <span
                                    className="inner-black-button-gradient absolute -top-px -left-px h-full w-full"
                                    aria-hidden="true"
                                >
                                    <span className="inner-black-button-hover-gradient absolute inset-0 h-full w-full overflow-hidden"></span>
                                </span>
                                <span
                                    className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]"
                                    aria-hidden="true"
                                >
                                    <span className="blurred-border-black absolute -top-px -left-px z-20 h-full w-full"></span>
                                </span>
                                <span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none -tracking-[0.04em] lg:text-base">
                                    <Image
                                        src="/icons/windows.47b8106d.svg"
                                        alt="Windows"
                                        width={26}
                                        height={26}
                                    />
                                    Get for Windows
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Floating images */}
                    <div className="pointer-events-none absolute top-17 right-28 hidden w-40 md:block lg:top-19 lg:right-48 lg:w-61 xl:top-20 xl:right-63 xl:w-66">
                        <Image
                            src="/icons/command-btn.05a11379.png"
                            alt="Command Button"
                            width={280}
                            height={238}
                        />
                        <Image
                            src="/icons/command-active.83241958.png"
                            alt="Command Active"
                            width={280}
                            height={238}
                            className="absolute top-0 left-0 opacity-0"
                        />
                    </div>

                    <div className="pointer-events-none absolute -top-8 right-2 hidden aspect-square w-36 md:block lg:-top-15 lg:w-54 xl:-top-16 xl:right-13 xl:w-60">
                        <Image
                            src="/icons/return-active.30ff0cd8.png"
                            alt="Return Active"
                            width={238}
                            height={238}
                        />
                        <Image
                            src="/icons/return-btn.f7f71a9d.png"
                            alt="Return Button"
                            width={238}
                            height={238}
                            className="absolute top-0 left-0 opacity-0"
                        />
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[376px] w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#DDE2EE_37.04%)] md:h-[520px] lg:h-[600px]" aria-hidden="true"></div>
            </section>
            <footer className="relative bg-[#dde2ee] pt-10 pb-5">
                {/* Top gradient bar */}
                <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
                    <div className="relative flex h-full w-full justify-center">
                        <div className="absolute -top-10 h-[3px] w-full bg-[linear-gradient(180deg,#E5E9F2_0%,#D0D7E7_100%)]"></div>
                    </div>
                </div>

                {/* Top pointer gradient */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 w-full -translate-y-full bg-[linear-gradient(180deg,rgba(221,226,238,0)_0%,#DDE2EE_100%)] xl:h-[140px]"
                    aria-hidden="true"
                ></div>

                <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        {/* Logo */}
                        <div>
                            <Link href="/" className="inline-flex rounded-md">
                                <Image
                                    src="/icons/wordmark-light.svg"
                                    alt="Cluely Light"
                                    width={85}
                                    height={30}
                                    className="hidden dark:block"
                                />
                                <Image
                                    src="/icons/wordmark.svg"
                                    alt="Cluely"
                                    width={85}
                                    height={30}
                                    className="dark:hidden"
                                />
                                <span className="sr-only">Cluely</span>
                            </Link>
                        </div>

                        {/* Navigation */}
                        <nav className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-[50px] md:grid-cols-[repeat(5,fit-content(240px))] md:gap-11 lg:mt-0 lg:gap-[58px] xl:gap-[66px]">

                            {/* Use Cases */}
                            <div>
                                <h3 className="font-medium tracking-tight text-black">Use Cases</h3>
                                <ul className="mt-3 flex flex-col gap-y-2">
                                    <li>
                                        <Link
                                            href="/sales"
                                            className="inline-flex items-center gap-x-1.5 rounded tracking-tight leading-snug font-normal text-[#2e3038] transition-colors duration-200 hover:text-blue-500"
                                        >
                                            Sales
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/support"
                                            className="inline-flex items-center gap-x-1.5 rounded tracking-tight leading-snug font-normal text-[#2e3038] transition-colors duration-200 hover:text-blue-500"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/consulting"
                                            className="inline-flex items-center gap-x-1.5 rounded tracking-tight leading-snug font-normal text-[#2e3038] transition-colors duration-200 hover:text-blue-500"
                                        >
                                            Consulting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/recruiting"
                                            className="inline-flex items-center gap-x-1.5 rounded tracking-tight leading-snug font-normal text-[#2e3038] transition-colors duration-200 hover:text-blue-500"
                                        >
                                            Recruiting
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Enterprise */}
                            <div>
                                <h3 className="font-medium tracking-tight text-black">Enterprise</h3>
                                <ul className="mt-3 flex flex-col gap-y-2">
                                    <li>
                                        <Link href="/enterprise" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">Cluely for Enterprise</Link>
                                    </li>
                                    <li>
                                        <Link href="https://docs.cluely.com/" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">Enterprise Guides</Link>
                                    </li>
                                    <li>
                                        <Link href="https://trust.delve.co/cluely" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">Security</Link>
                                    </li>
                                    <li>
                                        <Link href="https://app.ziphq.com/vendor-profile/verified/0687127d-66ab-7ac3-8000-b9ff8224c29e" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">Vendor Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/enterprise/roi" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">ROI Calculator</Link>
                                    </li>
                                    <li>
                                        <Link href="/enterprise/demo" className="inline-flex items-center gap-x-1.5 rounded leading-snug text-[#2e3038] hover:text-blue-500">Book A Demo</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="font-medium tracking-tight text-black">Resources</h3>
                                <ul className="mt-3 flex flex-col gap-y-2">
                                    <li><Link href="/manifesto" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Manifesto</Link></li>
                                    <li><Link href="/press" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Press</Link></li>
                                    <li><Link href="/careers" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Careers</Link></li>
                                    <li><Link href="https://cluelyhq.notion.site/bugbounty" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Bug Bounty</Link></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="font-medium tracking-tight text-black">Support</h3>
                                <ul className="mt-3 flex flex-col gap-y-2">
                                    <li><Link href="https://support.cluely.com/en/" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Help Center</Link></li>
                                    <li><Link href="mailto:help@cluely.com" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="font-medium tracking-tight text-black">Legal</h3>
                                <ul className="mt-3 flex flex-col gap-y-2">
                                    <li><Link href="/privacy-policy" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Terms of Service</Link></li>
                                    <li><Link href="/dpa" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] font-normal hover:text-blue-500">Data Processing Agreement</Link></li>
                                    <li><Link href="/subprocessors" className="inline-flex items-center gap-x-1.5 rounded text-[#2e3038] hover:text-blue-500">Subprocessors</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Status */}
                    <div className="mt-11 md:mt-[30px]">
                        <Link
                            href="https://cluely.trust.pagerduty.com/posts/dashboard/"
                            className="font-medium tracking-tight transition-colors duration-300 inline-flex h-[34px] items-center justify-center gap-x-1.5 rounded-[6px] border border-[rgba(201,208,228,0.50)] bg-[rgba(211,217,233,0.50)] px-3 text-sm leading-none text-gray-30 hover:bg-[rgba(211,217,233,0.90)]"
                        >
                            <span className="size-1.5 rounded-full bg-[#2CB463]"></span>
                            All systems operational
                        </Link>

                        {/* Compliance icons */}
                        <div className="mt-[18px] md:mt-[26px] lg:mt-8 flex flex-wrap gap-2.5 md:gap-3.5">
                            <Image src="/icons/soc-2-type-1.ab9b1c68.svg" alt="SOC 2 Type 1" width={52} height={52} />
                            <Image src="/icons/soc-2-type-2.a30a0a69.svg" alt="SOC 2 Type 2" width={52} height={52} />
                            <Image src="/icons/iso.f8e41029.svg" alt="ISO 27001" width={52} height={52} />
                            <Image src="/icons/gdpr.1dd801e6.svg" alt="GDPR" width={52} height={52} />
                            <Image src="/icons/ccpa.f8f08126.svg" alt="CCPA" width={52} height={52} />
                            <Image src="/icons/hipaa.0273026e.svg" alt="HIPAA" width={52} height={52} />
                        </div>

                        <div className="mt-2.5 text-xs font-medium tracking-tight text-gray-600">
                            List of{" "}
                            <Link
                                href="/subprocessors"
                                className="inline-flex items-center gap-x-1.5 rounded font-medium tracking-tight text-primary hover:text-primary/85"
                            >
                                subprocessors
                            </Link>
                            .
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="relative mt-[30px] flex flex-col pt-[30px] md:mt-5 md:flex-row md:items-center md:justify-between">
                        <div className="absolute top-0 left-0 h-[3px] w-full bg-[linear-gradient(180deg,#E5E9F2_0%,#D0D7E7_100%)]"></div>
                        <p className="order-2 mt-7 text-sm tracking-tight font-medium text-gray-600 md:order-1 md:mt-0">
                            © 2025 Cluely. All rights reserved.
                        </p>

                        {/* Social links */}
                        <div className="order-1 flex items-center gap-4 md:order-2">
                            <Link href="https://x.com/cluely" target="_blank" rel="noopener noreferrer" className="rounded-lg text-foreground transition-colors duration-300 hover:text-gray-40">
                                <span className="sr-only">Follow us on Twitter</span>
                                {/* Paste Twitter SVG here */}
                            </Link>
                            <Link href="https://discord.gg/cluely" target="_blank" rel="noopener noreferrer" className="rounded-lg text-foreground transition-colors duration-300 hover:text-gray-40">
                                <span className="sr-only">Join us on Discord</span>
                                {/* Paste Discord SVG here */}
                            </Link>
                            <Link href="https://www.instagram.com/cluely/" target="_blank" rel="noopener noreferrer" className="rounded-lg text-foreground transition-colors duration-300 hover:text-gray-40">
                                <span className="sr-only">Follow us on Instagram</span>
                                {/* Paste Instagram SVG here */}
                            </Link>
                            <Link href="https://github.com/cluely" target="_blank" rel="noopener noreferrer" className="rounded-lg text-foreground transition-colors duration-300 hover:text-gray-40">
                                <span className="sr-only">Follow us on GitHub</span>
                                {/* Paste GitHub SVG here */}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
