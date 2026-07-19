import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
	Cancel01Icon,
	EyeIcon,
	GridIcon,
	SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { useIntlayer } from "react-intlayer";
import { cn } from "@/lib/utils";

const SCREENS = [
	"/appShots/Frame 1.png",
	"/appShots/Frame 2.png",
	"/appShots/Frame 3.png",
	"/appShots/Frame 4.png",
	"/appShots/Frame 5.png",
	"/appShots/Frame 6.png",
];

const COLLAGE_IMAGE = "/appShots/thumbnail.png";

export default function Carousel() {
	const {
		sectionTitle,
		sectionSubtitle,
		tabScreenshots,
		tabCollage,
		clickToExpand,
		clickToZoom,
	} = useIntlayer("carousel");

	const [activeTab, setActiveTab] = useState<"slider" | "collage">("slider");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % SCREENS.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length);
	};

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
	};

	const openLightbox = useCallback((src: string) => {
		setLightboxSrc(src);
	}, []);

	const closeLightbox = useCallback(() => {
		setLightboxSrc(null);
	}, []);

	// Close lightbox on Escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeLightbox();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeLightbox]);

	return (
		<div className="space-y-8 py-4">
			{/* Section Header */}
			<div className="text-center space-y-2">
				<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
					{sectionTitle}
				</h2>
				<p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
					{sectionSubtitle}
				</p>
			</div>

			{/* Custom Tab Selector */}
			<div className="flex justify-center">
				<div className="inline-flex rounded-full bg-muted/30 p-1 border border-border/40 relative">
					<button
						type="button"
						onClick={() => setActiveTab("slider")}
						className={cn(
							"relative z-10 px-4 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5 select-none",
							activeTab === "slider"
								? "text-primary-foreground"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						<HugeiconsIcon icon={SmartPhone01Icon} size={14} />
						<span>{tabScreenshots}</span>
						{activeTab === "slider" && (
							<motion.div
								layoutId="activeTabPill"
								className="absolute inset-0 bg-primary rounded-full -z-10"
								transition={{ type: "spring", stiffness: 380, damping: 30 }}
							/>
						)}
					</button>
					<button
						type="button"
						onClick={() => setActiveTab("collage")}
						className={cn(
							"relative z-10 px-4 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5 select-none",
							activeTab === "collage"
								? "text-primary-foreground"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						<HugeiconsIcon icon={GridIcon} size={14} />
						<span>{tabCollage}</span>
						{activeTab === "collage" && (
							<motion.div
								layoutId="activeTabPill"
								className="absolute inset-0 bg-primary rounded-full -z-10"
								transition={{ type: "spring", stiffness: 380, damping: 30 }}
							/>
						)}
					</button>
				</div>
			</div>

			{/* Views Section */}
			<div className="relative">
				<AnimatePresence mode="wait">
					{activeTab === "slider" ? (
						<motion.div
							key="slider"
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -15 }}
							transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
							className="space-y-6"
						>
							{/* Carousel Container */}
							<div className="relative w-full h-[540px] flex items-center justify-center overflow-hidden rounded-2xl bg-muted/10 border border-border/40 py-6">
								{/* Left Arrow Button */}
								<button
									type="button"
									onClick={handlePrev}
									aria-label="Previous screenshot"
									className="absolute left-4 z-30 p-2 rounded-full bg-background/80 backdrop-blur-xs border border-border/60 text-foreground hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-md"
								>
									<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
								</button>

								{/* Carousel Track */}
								<div className="relative w-full h-full flex items-center justify-center">
									<motion.div
										className="absolute flex gap-6 active:cursor-grabbing"
										animate={{
											x: `calc(50% - 130px - ${currentIndex * (260 + 24)}px)`,
										}}
										transition={{ type: "spring", stiffness: 220, damping: 26 }}
										drag="x"
										dragConstraints={{ left: 0, right: 0 }}
										dragElastic={0.4}
										onDragEnd={(_, info) => {
											const swipeThreshold = 50;
											if (info.offset.x < -swipeThreshold) {
												handleNext();
											} else if (info.offset.x > swipeThreshold) {
												handlePrev();
											}
										}}
									>
										{SCREENS.map((src, index) => {
											const isActive = index === currentIndex;
											return (
												<motion.button
													type="button"
													key={src}
													onClick={() => {
														if (isActive) {
															openLightbox(src);
														} else {
															setCurrentIndex(index);
														}
													}}
													className={cn(
														"relative w-[260px] h-[460px] rounded-2xl overflow-hidden border transition-all duration-300 select-none block p-0 bg-transparent text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
														isActive
															? "border-primary/50 shadow-lg shadow-primary/5"
															: "border-border/40 opacity-40 scale-90 shadow-sm",
													)}
													animate={{
														scale: isActive ? 1.02 : 0.9,
														opacity: isActive ? 1 : 0.4,
														y: isActive ? -4 : 4,
													}}
													transition={{
														type: "spring",
														stiffness: 220,
														damping: 26,
													}}
												>
													<img
														src={src}
														alt={`His Word App Screen ${index + 1}`}
														className="w-full h-full object-cover pointer-events-none rounded-2xl"
													/>
													{isActive && (
														<div className="absolute inset-0 bg-black/0 hover:bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
															<span className="text-white bg-black/50 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1.5 rounded-md backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
																<HugeiconsIcon icon={EyeIcon} size={12} />
																<span>{clickToExpand}</span>
															</span>
														</div>
													)}
												</motion.button>
											);
										})}
									</motion.div>
								</div>

								{/* Right Arrow Button */}
								<button
									type="button"
									onClick={handleNext}
									aria-label="Next screenshot"
									className="absolute right-4 z-30 p-2 rounded-full bg-background/80 backdrop-blur-xs border border-border/60 text-foreground hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-md"
								>
									<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
								</button>
							</div>

							{/* Dot Indicators */}
							<div className="flex justify-center gap-2">
								{SCREENS.map((_, index) => (
									<button
										type="button"
										key={`dot-${_}`}
										onClick={() => handleDotClick(index)}
										aria-label={`Go to slide ${index + 1}`}
										className={cn(
											"h-1.5 rounded-full transition-all duration-300",
											index === currentIndex
												? "w-6 bg-primary"
												: "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
										)}
									/>
								))}
							</div>
						</motion.div>
					) : (
						<motion.div
							key="collage"
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -15 }}
							transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
							className="flex justify-center"
						>
							<button
								type="button"
								onClick={() => openLightbox(COLLAGE_IMAGE)}
								className="group relative block cursor-zoom-in overflow-hidden rounded-2xl border border-border/40 bg-muted/10 p-2 max-w-full md:max-w-2xl shadow-xl transition-all duration-300 hover:shadow-primary/5 hover:border-primary/20 text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
							>
								<img
									src={COLLAGE_IMAGE}
									alt="All app screenshots collage"
									className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-white bg-black/60 text-xs uppercase tracking-wider font-semibold px-3.5 py-2 rounded-md backdrop-blur-xs shadow-md flex items-center gap-1.5">
										<HugeiconsIcon icon={EyeIcon} size={14} />
										<span>{clickToZoom}</span>
									</span>
								</div>
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Fullscreen Lightbox Modal */}
			<AnimatePresence>
				{lightboxSrc && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeLightbox}
						className="fixed inset-0 z-100 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 28 }}
							className="relative max-w-full max-h-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl cursor-default"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								type="button"
								onClick={closeLightbox}
								aria-label="Close zoomed view"
								className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-xs border border-border text-foreground hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-sm"
							>
								<HugeiconsIcon icon={Cancel01Icon} size={16} />
							</button>

							{/* Lightbox Image */}
							<div className="flex items-center justify-center p-2 bg-muted/5 max-h-[85vh]">
								<img
									src={lightboxSrc}
									alt="Zoomed App Screenshot"
									className="max-h-[80vh] w-auto object-contain rounded-xl select-none"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
