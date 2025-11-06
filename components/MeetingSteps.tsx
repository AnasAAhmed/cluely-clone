import Image from "next/image";

export default function MeetingSteps() {
  return (
    <section className="mx-auto mt-10 mb-30 flex flex-col items-center justify-center gap-y-14 px-10 lg:mt-0">
      {/* Title + Subtitle */}
      <div className="flex flex-col items-center gap-y-2 text-center">
        <h2 className="inline-block w-fit bg-gradient-to-r from-[#19191D] to-[#31343E] bg-clip-text px-4 text-3xl font-medium leading-[1.25] tracking-[-1.28px] text-transparent lg:text-5xl">
          Meeting notes in 3 steps
        </h2>
        <span className="text-[13px] opacity-50 lg:text-[22px]">
          The easiest way to get beautiful, shareable{" "}
          <br className="hidden lg:block" />
          meeting notes.
        </span>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 select-none lg:grid-cols-3">
        {/* Step 1 */}
        <div className="relative flex flex-col gap-y-7">
          <Image
            alt="Step One"
            src="/images/step-one.d02be6f3.png"
            width={350}
            height={350}
            className="pointer-events-none mx-auto block h-auto w-[450px] lg:mx-0 lg:w-[350px]"
          />
          <div className="mx-auto flex max-w-[450px] flex-col gap-y-2 lg:mx-0">
            <h1 className="flex gap-x-3 text-3xl font-normal tracking-tight">
              <span className="opacity-40">1</span>
              <span>Start Cluely</span>
            </h1>
            <span className="ml-6 text-zinc-400">
              Simply click Start Cluely before your{" "}
              <br className="hidden lg:block" />
              meeting begins.
            </span>
          </div>

          {/* Arrow SVG */}
          <div className="absolute top-1/3 -right-14 hidden opacity-50 lg:block">
            <svg
              width="48"
              height="39"
              viewBox="0 0 48 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.13765 0.0981147C2.20729 0.888577 2.4264 1.658 2.4213 2.45898C2.23782 9.49665 5.19834 15.2915 9.44295 20.4483C10.9037 22.2243 12.9742 23.7239 15.0906 24.7217C21.0881 27.6502 27.4899 29.0737 34.1906 28.7783C36.1218 28.697 38.0768 28.2313 39.9911 27.4664C39.3949 27.2836 38.7563 27.0686 38.1278 26.9284C36.3172 26.4974 34.4743 26.1089 32.6857 25.5604C31.9299 25.3238 31.208 24.7776 30.5608 24.2209C30.3061 24.0281 30.2143 23.3551 30.3655 23.067C30.5167 22.779 31.1265 22.5026 31.371 22.6206C35.8195 24.2428 40.5754 24.488 45.2328 25.1281C46.8634 25.3559 47.4562 26.0727 47.0944 27.6098C46.1636 31.3992 44.4242 34.8451 41.9834 37.8943C41.9189 37.9796 41.6522 37.979 41.2038 38.0421C39.4085 35.2081 42.2382 33.0568 42.6527 29.9499C41.9682 30.2368 41.4331 30.5026 40.9202 30.651C30.5676 33.2134 20.8299 31.3449 11.6238 26.391C10.231 25.6725 8.93677 24.559 7.82423 23.3818C3.76645 19.0371 1.08958 13.9264 0.135035 8.03968C-0.162198 6.13802 0.0959898 4.12007 0.289633 2.18742C0.337197 1.41857 0.885828 0.693507 1.21025 7.80775e-06C1.51939 0.0327102 1.82852 0.0654123 2.13765 0.0981147Z"
                fill="#7D8390"
              />
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mr-3 flex flex-col gap-y-7">
          <Image
            alt="Step Two"
            src="/images/step-two.f22bda3a.png"
            width={350}
            height={350}
            className="pointer-events-none mx-auto block h-auto w-[450px] lg:mx-0 lg:w-[350px]"
          />
          <div className="mx-auto flex max-w-[450px] flex-col gap-y-2 lg:mx-0">
            <h1 className="flex gap-x-3 text-3xl font-normal tracking-tight">
              <span className="opacity-40">2</span>
              <span>End Cluely</span>
            </h1>
            <span className="ml-8 text-zinc-400">
              Click the Stop button to end{" "}
              <br className="hidden lg:block" />
              recording. That’s it.
            </span>
          </div>

          {/* Arrow SVG */}
          <div className="absolute top-1/3 -right-20 hidden opacity-50 lg:block">
            <svg
              width="67"
              height="17"
              viewBox="0 0 67 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.5524 11.9317C54.4705 12.7099 49.7366 13.4015 45.0028 14.1797C44.6547 14.2661 44.3763 14.7849 43.6105 15.5631C45.8382 15.9089 47.5786 16.3412 49.3189 16.4277C53.9135 16.6006 58.4385 16.6006 63.0331 16.6006C63.5901 16.6006 64.147 16.6871 64.7039 16.5142C66.5139 16.0818 67.1404 14.612 66.1658 12.6234C65.6785 11.6723 65.1216 10.8077 64.4951 10.0295C62.1281 7.08985 59.6916 4.23662 57.2551 1.38339C56.8374 0.864621 56.2108 0.605231 55.3755 0C55.2362 4.40954 58.7866 5.62 59.5524 9.07846C58.9258 8.90554 58.3689 8.81908 57.8816 8.64615C39.0855 2.248 25.7971 2.9397 7.14019 9.16493C5.19097 9.77016 3.31136 10.7212 1.43175 11.5858C0.457138 12.0181 -0.37825 12.9692 0.178673 14.4391C0.665977 15.9089 1.64059 15.9089 2.75443 15.3037C15.2155 8.38678 23.0044 7.60862 36.3705 7.868C43.332 7.95446 50.1543 8.90554 56.907 10.8942C57.7424 11.1535 58.5778 11.4994 59.5524 11.9317Z"
                fill="#7D8390"
              />
            </svg>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-y-7">
          <Image
            alt="Step Three"
            src="/images/step-three.9c9592d8.png"
            width={350}
            height={350}
            className="pointer-events-none mx-auto block h-auto w-[450px] lg:mx-0 lg:w-[350px]"
          />
          <div className="mx-auto flex max-w-[450px] flex-col gap-y-2 lg:mx-0">
            <h1 className="flex gap-x-3 text-3xl font-normal tracking-tight">
              <span className="opacity-40">3</span>
              <span>Get notes</span>
            </h1>
            <span className="ml-8 text-zinc-400">
              Cluely uses what it heard and what it{" "}
              <br className="hidden lg:block" />
              saw on your screen to generate notes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
