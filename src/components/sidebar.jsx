import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { cn } from "../lib/utils";

import { DashboardIcon } from "../assets/svgs/dashboard";
import { BranchesIcon } from "../assets/svgs/branches";
import { RolesIcon } from "../assets/svgs/roles";
import { UsersIcon } from "../assets/svgs/users";
import { CardSchemeIcon } from "../assets/svgs/card-scheme";
import { CardProfileIcon } from "../assets/svgs/card-profile";
import { CardRequestIcon } from "../assets/svgs/card-request";
import { StockIcon } from "../assets/svgs/stock";
import { CardsIcon } from "../assets/svgs/cards";
import { BlockUnblockCardIcon } from "../assets/svgs/block-unblock-card";
import { AuthorizationListIcon } from "../assets/svgs/authorization-list";
import { AuthorizationQueueIcon } from "../assets/svgs/authorization-queue";
import { TrailIcon } from "../assets/svgs/trail";
import { AccountIcon } from "../assets/svgs/account.jsx";
import { LogoutIcon } from "../assets/svgs/logout";

const menuItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: (active) => <DashboardIcon active={active} />,
    },
    {
        name: "Branches",
        href: "/branches",
        icon: (active) => <BranchesIcon active={active} />,
    },
    {
        name: "Roles",
        href: "/roles",
        icon: (active) => <RolesIcon active={active} />,
    },
    {
        name: "Users",
        href: "/users",
        icon: (active) => <UsersIcon active={active} />,
    },
    {
        name: "Card Scheme",
        href: "/card-scheme",
        icon: (active) => <CardSchemeIcon active={active} />,
    },
    {
        name: "Card Profile",
        href: "/card-profile",
        icon: (active) => <CardProfileIcon active={active} />,
    },
    {
        name: "Card Request",
        href: "/card-request",
        icon: (active) => <CardRequestIcon active={active} />,
    },
    {
        name: "Stock",
        href: "/stock",
        icon: (active) => <StockIcon active={active} />,
    },
    {
        name: "Cards",
        href: "/cards",
        icon: (active) => <CardsIcon active={active} />,
    },
    {
        name: "Block/Unblock Card",
        href: "/block-unblock",
        icon: (active) => <BlockUnblockCardIcon active={active} />,
    },
    {
        name: "Authorization List",
        href: "/authorization-list",
        icon: (active) => <AuthorizationListIcon active={active} />,
    },
    {
        name: "Authorization Queue",
        href: "/authorization-queue",
        icon: (active) => <AuthorizationQueueIcon active={active} />,
    },
    {
        name: "Trail",
        href: "/trail",
        icon: (active) => <TrailIcon active={active} />,
    },
    {
        name: "Account",
        href: "/account",
        icon: (active) => <AccountIcon active={active} />,
    },
];

export default function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [windowHeight, setWindowHeight] = useState(0);

    // Handle window resize for responsive behavior
    useEffect(() => {
        setIsMounted(true);
        setWindowHeight(window.innerHeight);

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const renderMenuItem = (item, index) => {
        const isActive = pathname === item.href;
        return (
            <Link
                key={index}
                to={item.href}
                className={cn(
                    "sidebar-menu-item flex items-center gap-3 px-4 py-[5px] rounded-md mb-[2px] transition-colors whitespace-nowrap",
                    isActive ? "bg-[#E4F0FF] text-[#014DAF]" : "text-[#D0D5DD] hover:bg-[#E4F0FF]/20",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {item.icon(isActive)}
                <span>{item.name}</span>
            </Link>
        );
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#002f6c] text-[#DEDEDF]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={cn(
                    "w-[240px] min-h-screen h-screen bg-[#002f6c] flex flex-col fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-r-[#014daf]/20",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="flex flex-col h-full justify-between py-4">
                    <div className="flex flex-col h-full">
                        <div className="px-4 mb-4">
                            <img
                                src="src/assets/lapo-logo.png"
                                alt="LAPO Microfinance Bank"
                                width={150}
                                height={60}
                                className="max-w-full"
                            />
                        </div>
                        {renderMenuItem(menuItems[0], 0)}


                        <div className="mt-2 mb-1 px-4">
                            <span className="text-xs font-medium text-[#7E8B9C] sidebar-menu-item">MAIN MENU</span>
                        </div>


                        <div className="flex-1 flex flex-col">
                            <div>{menuItems.slice(1).map((item, index) => renderMenuItem(item, index + 1))}</div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="px-4">
                            <Link
                                to="/logout"
                                className="sidebar-menu-item flex items-center gap-3 px-4 py-[5px] text-[#D0D5DD] hover:bg-[#014daf]/20 rounded-md mb-2 transition-colors whitespace-nowrap"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <LogoutIcon />
                                <span>Logout</span>
                            </Link>
                        </div>

                        <div className="px-4">
                            <p className="mb-1 text-xs text-[#7E8B9C] sidebar-menu-item">POWERED BY</p>
                            <div className="flex">
                                <img
                                    src="src/assets/cardInfra-logo.png"
                                    alt="Cardinfra"
                                    width={100}
                                    height={30}
                                    className="max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </>
    );
}