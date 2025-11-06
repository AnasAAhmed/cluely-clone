
import Image from "next/image";

export default function MeetingsSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-11 py-12 select-none md:py-24 lg:py-48">
      <h2 className="inline-block w-fit bg-linear-to-r from-[#19191D] to-[#626275] bg-clip-text px-8 text-4xl leading-tight font-medium tracking-[-1.28px] text-transparent lg:text-6xl">
        Four ways we make your <br className="hidden lg:block" /> meetings better
      </h2>

      <div className="grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-auto p-0 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:p-8">

        {/* === Card 1 === */}
        <div className="h-[400px] w-[80vw] max-w-[600px] snap-start pl-8 lg:h-auto lg:w-full lg:max-w-none lg:pl-0">
          <div
            className="relative flex h-full w-full flex-col justify-end rounded-4xl text-white lg:h-[500px] lg:w-auto"
            style={{
              background:
                "radial-gradient(167.08% 140.48% at 79.5% 0%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(120.74% 124.92% at 7.26% 100%, #497EE9 0%, #749CFF 100%)",
              backgroundBlendMode: "overlay, normal",
              boxShadow:
                "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
            }}
          >
            <Image
              alt="Ask AI"
              src="/images/ask-ai.png"
              width={1340}
              height={880}
              className="pointer-events-none absolute top-0 right-0"
            />
            <div className="relative flex flex-col gap-3 px-8 pb-8">
              <h3 className="text-2xl leading-[28.5px] font-medium tracking-[-0.4px]">
                AI that answers questions for you, real-time
              </h3>
              <p className="text-lg leading-[24.75px]">
                Cluely uses the screen, transcript, and AI to answer{" "}
                <br className="hidden lg:block" /> questions for you, live.
              </p>
            </div>
          </div>
        </div>

        {/* === Card 2 === */}
        <div className="h-[400px] w-[80vw] max-w-[600px] snap-start pl-8 lg:h-[500px] lg:w-full lg:max-w-none lg:pl-0">
          <div
            className="relative flex h-full w-full flex-col justify-between gap-10 overflow-hidden rounded-4xl border border-[#36393F]/5 pt-12"
            style={{
              background:
                "radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-plus-lighter"
              style={{
                boxShadow:
                  "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
              }}
            />
            <div className="flex flex-col gap-3 px-8">
              <h3 className="text-3xl leading-[38.5px] font-medium tracking-[-0.7px] text-[#263043]">
                Instant follow-up emails
              </h3>
              <p className="leading-[24.75px] text-[#8C929D]">
                Send perfectly drafted follow-up emails within seconds after every call.
              </p>
            </div>
            <div
              className="mr-12 aspect-[1.3] w-fit rounded-tr-3xl lg:mr-0"
              style={{
                boxShadow: "rgba(34, 43, 78, 0.12) 2.797px 18.178px 40.55px",
              }}
            >
              <Image
                alt="Follow-up email"
                src="/images/follow-up-emails.png"
                width={1009}
                height={733}
                className="pointer-events-none h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* === Card 3 === */}
        <div className="h-[400px] w-[80vw] max-w-[600px] snap-start pl-8 lg:h-[330px] lg:w-full lg:max-w-none lg:pl-0">
          <div
            className="relative flex h-full w-full flex-col-reverse gap-10 overflow-hidden rounded-4xl border border-[#36393F]/5 pb-12 lg:flex-row lg:pt-12"
            style={{
              background:
                "radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-plus-lighter"
              style={{
                boxShadow:
                  "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
              }}
            />
            <div className="flex flex-col gap-4 px-8 lg:w-1/2">
              <h3 className="text-2xl leading-[38.5px] font-medium tracking-[-0.7px] text-[#263043] lg:text-3xl">
                Who are you really&nbsp;talking&nbsp;to?
              </h3>
              <p className="leading-[24.75px] text-[#8C929D] lg:text-base">
                Learn everything about anyone before every call — where they work, what they do, and more.
              </p>
            </div>
            <div className="relative h-[260px] lg:w-1/2">
              <div
                className="absolute left-8 h-full w-[480px] rounded-2xl lg:left-auto"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 24.317px 24.317px 0px",
                }}
              >
                <Image
                  alt="Pre-call"
                  src="/images/pre-call.png"
                  width={964}
                  height={520}
                  className="pointer-events-none h-full w-full object-cover object-bottom-left lg:object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Card 4 === */}
        <div className="h-[400px] w-screen max-w-[600px] snap-start pl-8 lg:h-[330px] lg:w-auto lg:pl-0">
          <div
            className="relative flex h-full w-4/5 flex-col justify-end gap-10 overflow-hidden rounded-4xl border border-[#36393F]/5 pb-9 lg:h-[330px] lg:w-auto"
            style={{
              background:
                "radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-plus-lighter"
              style={{
                boxShadow:
                  "1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset",
              }}
            />
            <div
              className="absolute top-0 -right-2 aspect-[1.1] w-4/5 rounded-2xl md:right-4 md:w-3/5 lg:right-12"
              style={{
                boxShadow:
                  "rgba(34, 43, 78, 0.12) 1.788px 11.623px 25.927px, rgba(34, 43, 78, 0.1) 6.258px 47.385px 47.385px, rgba(34, 43, 78, 0.06) 14.305px 106.392px 64.372px, rgba(34, 43, 78, 0) 25.927px 188.644px 75.994px",
                maskImage:
                  "radial-gradient(100px 100px at 0% 100%, rgba(0, 0, 0, 0.5), black 100%)",
              }}
            >
              <Image
                alt="Beautiful meeting notes"
                src="/images/notes.png"
                width={969}
                height={887}
                className="pointer-events-none h-full w-full"
              />
            </div>
            <div className="relative flex flex-col gap-3 px-8">
              <h3 className="text-3xl leading-[38.5px] font-medium tracking-[-0.7px] text-[#263043]">
                Beautiful meeting notes
              </h3>
              <p className="leading-[24.75px] text-[#8C929D]">
                Instant shareable meeting notes generated by AI.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
