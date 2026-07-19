import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [isHovered, setIsHovered] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);

	// Spring configuration for the smooth outer ring lag effect
	const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
	const cursorX = useSpring(mouseX, springConfig);
	const cursorY = useSpring(mouseY, springConfig);

	useEffect(() => {
		// Disable on touch devices
		const checkDevice = () => {
			const hasPointer = window.matchMedia("(pointer: fine)").matches;
			setIsMobile(!hasPointer);
		};

		checkDevice();
		window.addEventListener("resize", checkDevice);

		return () => {
			window.removeEventListener("resize", checkDevice);
		};
	}, []);

	useEffect(() => {
		if (isMobile) return;

		// Add custom-cursor-active class to HTML to hide default cursor
		document.documentElement.classList.add("custom-cursor-active");

		const moveCursor = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
			if (!isVisible) setIsVisible(true);
		};

		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const isInteractive = target.closest(
				'a, button, input, select, textarea, [role="button"], .cursor-pointer',
			);
			setIsHovered(!!isInteractive);
		};

		const handleMouseLeave = () => setIsVisible(false);
		const handleMouseEnter = () => setIsVisible(true);

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleMouseOver);
		document.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseenter", handleMouseEnter);

		return () => {
			document.documentElement.classList.remove("custom-cursor-active");
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleMouseOver);
			document.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseenter", handleMouseEnter);
		};
	}, [isMobile, mouseX, mouseY, isVisible]);

	if (isMobile || !isVisible) return null;

	return (
		<>
			{/* Smooth Outer Ring */}
			<motion.div
				style={{
					left: cursorX,
					top: cursorY,
					x: "-50%",
					y: "-50%",
				}}
				animate={{
					width: isHovered ? 44 : 22,
					height: isHovered ? 44 : 22,
					borderWidth: isHovered ? 0 : 1.5,
					opacity: 1,
				}}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 28,
				}}
				className={`fixed pointer-events-none z-9999 rounded-full mix-blend-difference border border-primary transition-colors duration-300 ${
					isHovered ? "bg-primary-foreground" : "bg-transparent"
				}`}
			/>

			{/* Instant Inner Dot */}
			<motion.div
				style={{
					left: mouseX,
					top: mouseY,
					x: "-50%",
					y: "-50%",
				}}
				animate={{
					scale: isHovered ? 0 : 1,
				}}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 28,
				}}
				className="fixed pointer-events-none z-9999 w-1.5 h-1.5 bg-primary rounded-full mix-blend-difference"
			/>
		</>
	);
}
