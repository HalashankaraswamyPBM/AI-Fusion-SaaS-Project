"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, ScanEye, Settings, VideoIcon,Zap, icons } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const poppins = Montserrat({ weight: '100', subsets: ['latin'] });

const routes = [
	{
		icon: LayoutDashboard,
		href: '/dashboard',
		color: "text-sky-500"
	},
	{

		icon: MessageSquare,
		href: '/conversation',
		color: "text-violet-500",
	},
	{

		icon: ImageIcon,
		color: "text-pink-700",
		href: '/image',
	},
	{

		icon: VideoIcon,
		color: "text-orange-700",
		href: '/video',
	},
	{

		icon: Music,
		color: "text-emerald-500",
		href: '/music',
	},
	{

		icon: Code,
		color: "text-green-700",
		href: '/code',
	},
	{

		icon: ScanEye,
		color: "text-pink-700",
		href: '/restoration',
	},

	{

		icon: Settings,
		href: '/settings',
	},
	{
		icon: Zap,
		href: '/pro-modal',
	}
	

];

export const Sidebar = ({
	apiLimitCount = 0,
	isPro = false
}: {
	apiLimitCount: number;
	isPro: boolean;
}) => {
	const pathname = usePathname();

	return (
		<div className="hidden h-full md:flex md:flex-col md_fixed md:inset-y-0 z-[20] bg-black">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 mb-14">
					<div className="relative h-10 w-10 mr-10x ">
						<Image fill alt="Logo" src="/logo.png" />
					</div>
				</Link>
				<div className="space-y-1">
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={cn(
								"text-sm group flex p-3 w-full justify-start font-bold cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
								pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
							)}
						>
							<div className="flex items-center flex-1">
								<route.icon className={cn("h-8 w-7 mr-7", route.color)} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
