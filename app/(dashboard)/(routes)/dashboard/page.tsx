"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, ScanEye, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
	{
		lable: "Conversation",
		icon: MessageSquare,
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
		href: "/conversation"

	},
	{
		lable: "Music Generation",
		icon: Music,
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
		href: "/music"

	},
	{
		lable: "Image Generation",
		icon: ImageIcon,
		color: "text-pink-700",
		bgColor: "bg-pink-700/10",
		href: "/image"

	},
	{
		lable: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
		bgColor: "bg-orange-700/10",
		href: "/video"

	},
	{
		lable: "Code Generation",
		icon: Code,
		color: "text-green-700",
		bgColor: "bg-green-700/10",
		href: "/code"

	},
]


const DashboardPage = () => {
	const router = useRouter();
	return (
		<div className="mb-8 space-y-4">
			<h2 className="text-2xl md:text-4xl font-bold text-center">
				Explore the power of  AI Fusion
			</h2>
			<p className="text-muted-foreground font-sembold text-sm md:text-lg text-center">
				Chat with smartest AI - Experience The Power of AI
			</p>
			<div className="px-4 md:px-5 lg:px-10 space-y-9">
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className="p-4 border-black/2 flex item-center
       justify-between hover:shadow-md transition cursor-pointer"
					>
						<div className="flex item-center gap-x-8">
							<div className={cn("p-10 w-fit rounded-md", tool.bgColor)}>
								<tool.icon className={cn("w-9 h-7", tool.color)} />
							</div>
							<div className="font-semibold">
								{tool.lable}
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}
export default DashboardPage; 