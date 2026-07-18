import { Button } from "@heroui/react";
import { ArrowLeft01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCanGoBack, useRouter } from "@tanstack/react-router";

export default function DefaultNotFound() {
	const router = useRouter();
	const canGoBack = useCanGoBack();

	return (
		<main className="flex flex-col items-center justify-center p-6">
			<title>404 - Not Found</title>
			<div className="flex max-w-sm flex-col items-center text-center gap-5">
				<span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
					404 Error
				</span>

				<div className="flex flex-col gap-2">
					<h1 className="text-xl font-semibold tracking-tight text-foreground">
						Page not found
					</h1>
					<p className="text-sm text-muted-foreground leading-relaxed">
						We searched everywhere, but couldn't find the page you're looking
						for. It might have been moved or deleted.
					</p>
				</div>

				<div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 pt-2">
					{canGoBack && (
						<Button
							variant="outline"
							onClick={() => router.history.back()}
							className="w-full sm:w-auto font-medium"
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								size={16}
								strokeWidth={1.5}
								className="mr-2"
							/>
							Go back
						</Button>
					)}

					<Button
						onClick={() => router.navigate({ to: "/", replace: true })}
						className="w-full sm:w-auto font-medium"
					>
						<HugeiconsIcon
							icon={Home01Icon}
							size={16}
							strokeWidth={1.5}
							className="mr-2"
						/>
						Return home
					</Button>
				</div>
			</div>
		</main>
	);
}
