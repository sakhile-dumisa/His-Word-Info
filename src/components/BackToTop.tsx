import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					type="button"
					onClick={scrollToTop}
					initial={{ opacity: 0, scale: 0.8, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: 10 }}
					whileHover={{ scale: 1.08 }}
					whileTap={{ scale: 0.95 }}
					className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-foreground hover:text-primary shadow-lg hover:shadow-primary/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer"
					aria-label="Scroll back to top"
				>
					<HugeiconsIcon icon={ArrowUp01Icon} size={20} />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
