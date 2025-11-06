'use client'

import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerTitle,
    DrawerOverlay,
} from "@/components/ui/drawer"
import Link from "next/link"
import { useState } from "react"

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    const links = [
        { name: "Pricing", href: "/pricing" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
    ]

    return (
        <div className="lg:hidden">
            <Drawer open={open} onOpenChange={setOpen} direction="bottom">
                <DrawerTrigger asChild>
                    <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_6b5ulb_" data-state="closed" data-slot="drawer-trigger" className="relative ml-4 flex size-6 text-background outline-hidden md:hidden">
                        <span className="absolute -inset-3 lg:hidden">
                        </span>
                        <svg className="-mr-1.5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Trigger</title>
                            <path d="M3.99902 7.71436H19.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.99902 16.2856H19.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="sr-only">Open menu</span>
                    </button>
                </DrawerTrigger>

                {/* <DrawerOverlay className="fixed inset-0 z-50 bg-black/60 dark:bg-background/90" /> */}

                <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex h-[75dvh] flex-col rounded-t-xl border border-border bg-popover p-0">
                    <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-muted" />
                    <DrawerTitle className="sr-only">Menu</DrawerTitle>

                    <div className="relative flex flex-1 flex-col overflow-y-auto px-5 pt-6 pb-12 md:px-8">
                        <ul className="flex flex-col space-y-3">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="flex h-9 items-center text-base font-medium tracking-tight leading-snug hover:text-gray-400 text-foreground"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-1 gap-6 px-5 pt-2 pb-5 md:px-8 md:pb-8">
                            {/* Add footer buttons (like login/signup) here if needed */}
                        </div>
                    </div>

                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full bg-linear-to-b from-transparent to-background"
                        aria-hidden="true"
                    />
                </DrawerContent>
            </Drawer>
        </div>
    )
}
