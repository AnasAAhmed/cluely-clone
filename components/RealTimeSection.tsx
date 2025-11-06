
import Image from 'next/image';

export default function RealTimeTranscription() {
  return (
    <section className="mt-40 w-full py-20 [background:linear-gradient(180deg,rgba(221,226,238,0.00)_0%,rgba(221,226,238,0.14)_36.4%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-x-18 lg:flex-row">
        {/* Left Image (Desktop only) */}
        <div className="shadow-inner-white/10 mx-10 mb-10 hidden rounded-3xl pt-8 pr-3 pb-4 pl-5 shadow-inner inset-ring-1 inset-ring-white/50 backdrop-blur [background:radial-gradient(92.09%_126.39%_at_50%_100%,#DDE2EE_58.91%,#BBC5DD_100%)] lg:mx-0 lg:mb-0 lg:block">
          <Image
            alt="Real-time transcript"
            src="/images/transcript-tab.1c48d5b2.png"
            width={450}
            height={569}
            className="pointer-events-none select-none"
          />
        </div>

        {/* Text Section */}
        <div className="mx-20 -mt-30 flex flex-col gap-y-20 lg:mx-0 lg:mt-0">
          <h2 className="bg-linear-to-r from-[#19191D] to-[#31343E] bg-clip-text text-3xl leading-tight font-medium tracking-[-1.28px] text-transparent lg:text-5xl">
            Real-time transcription
          </h2>

          {/* Stats Section */}
          <div className="-mt-10 flex flex-col gap-y-8 lg:mt-0">
            {/* Languages */}
            <div className="flex flex-col items-start gap-x-24 lg:flex-row">
              <div className="mt-5 text-5xl">12+</div>
              <div className="flex flex-col gap-y-3">
                <span className="text-4xl font-normal">Languages</span>
                <span className="text-lg text-zinc-500/70">
                  We support over 12 different languages, including
                  <br className="hidden lg:block" />
                  English, Chinese, Spanish, and more.
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-200/50" />

            {/* Response Time */}
            <div className="flex flex-col items-start gap-x-12 lg:flex-row">
              <div className="mt-5 text-5xl">
                300<span className="text-3xl">ms</span>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-4xl font-normal">Response time</span>
                <span className="text-lg text-zinc-500/70">
                  We have the fastest live transcription available.
                  <br className="hidden lg:block" />
                  Test us against any other competitor.
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-200/50" />

            {/* Accuracy */}
            <div className="flex flex-col items-start gap-x-31 lg:flex-row">
              <div className="mt-5 text-5xl">95%</div>
              <div className="flex flex-col gap-y-3">
                <span className="text-4xl font-normal">Transcription accuracy</span>
                <span className="text-lg text-zinc-500/70">
                  Trusted by many teams for reliable transcription.
                  <br className="hidden lg:block" />
                  All processed with industry-leading accuracy.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image (Mobile only) */}
        <Image
          alt="Real-time transcript"
          src="/images/transcript-tab.1c48d5b2.png"
          width={450}
          height={569}
          className="pointer-events-none mt-5 ml-7 select-none lg:hidden"
        />
      </div>
    </section>
  );
}
