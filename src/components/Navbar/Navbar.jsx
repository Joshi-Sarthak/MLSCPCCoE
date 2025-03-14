import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from "react-scroll"

const Navbar = () => {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious()
		if (latest > prev && latest > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})
	return (
		<motion.div
			className="fixed -translate-x-1/2 left-1/2 mt-6 z-[500] w-full max-md:scale-90"
			variants={{
				visible: { y: 0, x: "-50%" },
				hidden: { y: "-200%", x: "-50%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
		>
			<SlideTabs />
		</motion.div>
	)
}

const SlideTabs = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
		color: "",
	})

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}))
			}}
			style={{
				borderColor: position.color,
			}}
			className="relative mx-auto flex w-fit rounded-full border-2 bg-neutral-200 p-1 font-semibold max-md:scale-90 "
		>
			{["Home", "Events", "Achievements", "Team"].map((tab, index) => (
				<Link key={index} to={tab} smooth={true} duration={1000}>
					<Tab setPosition={setPosition} index={index}>
						{tab}
					</Tab>
				</Link>
			))}

			<Cursor position={position} />
		</ul>
	)
}

const Tab = ({ children, setPosition, index }) => {
	const ref = useRef(null)

	const colors = [
		"#f34f1c", // Orange
		"#7fbc00", // Green
		"#ffba01", // Yellow
		"#01a6f0", // Blue
	]

	const isMobile = window.innerWidth <= 768 // Adjust the width according to your breakpoint

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current || isMobile) return // Prevent hover effects on mobile

				const { width } = ref.current.getBoundingClientRect()

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
					color: colors[index],
				})
			}}
			className={`relative z-10 block cursor-pointer px-2 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base max-md:scale-90`}
		>
			{children}
		</li>
	)
}

const Cursor = ({ position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			style={{
				backgroundColor: position.color,
			}}
			className="absolute z-0 h-7 rounded-full md:h-12 max-md:scale-90"
		/>
	)
}

export default Navbar
