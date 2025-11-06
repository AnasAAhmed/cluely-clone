import React from 'react'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="absolute top-0 z-9999 flex w-full pt-2.5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-b-lg pr-5  md:pr-8">
        <div className="flex items-center justify-center gap-1 rounded-2xl px-3 py-1 lg:gap-7">
          <a className="inline-flex shrink-0 translate-y-0.5 items-center justify-center rounded lg:mr-7" href="/">
            <img alt="" width="84" height="22" decoding="async" data-nimg="1" className="shrink-0" src="https://cluely.com/wordmark-light.svg" />
            <span className="sr-only">Cluely</span>
          </a>
          <div className="hidden items-center md:flex">
            <a className="flex items-center justify-center px-3.5 py-2 text-sm font-medium text-white focus:underline" href="/pricing">Pricing</a>
            <a className="flex items-center justify-center px-3.5 py-2 text-sm font-medium text-white focus:underline" href="/enterprise">Enterprise</a>
            <a className="flex items-center justify-center px-3.5 py-2 text-sm font-medium text-white focus:underline" href="/careers">Careers</a>
            <a className="flex items-center justify-center px-3.5 py-2 text-sm font-medium text-white focus:underline" href="/blog">Blog</a>
          </div>
        </div>
        <div className="fixed top-2.5 right-2.5 hidden h-fit items-center justify-center gap-2 transition-opacity duration-300 md:flex opacity-0">
          <button className="purple-gradient-button rounded-[10px] flex items-center gap-1.5 w-fit text-white font-medium text-[16px] tracking-[-0.13px] p-[10px_20px] relative overflow-hidden sm:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_4b5ulb_" data-state="closed" data-slot="drawer-trigger">
            <span className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]" aria-hidden="true">
              <span className="blurred-border absolute -top-px -left-px z-20 h-full w-full"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop" aria-hidden="true"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
            <span>Get the desktop app</span>
          </button>
          <a className="purple-gradient-button rounded-[10px] items-center gap-1.5 w-fit text-white font-medium text-[16px] tracking-[-0.13px] p-[10px_20px] relative hidden overflow-hidden sm:flex" href="https://downloads.cluely.com/downloads/cluely-setup.exe">
            <span className="absolute top-0 left-0 z-20 h-full w-full blur-[1px]" aria-hidden="true"><span className="blurred-border absolute -top-px -left-px z-20 h-full w-full"></span>
            </span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mb-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z"></path></svg>
            <span>Get for Windows</span>
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
