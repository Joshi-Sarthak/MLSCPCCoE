import mlsc from "../../assets/logo.png"
import React from "react"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-stone-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
					{/* Left side - Club logo, name, and description */}
					<div className="flex flex-col items-center md:items-start space-y-4 md:w-1/2">
						<div className="flex items-center space-x-4">
							<img src={mlsc} alt="MLSC Logo" className="h-16 w-16" />
							<span className=" text-md md:text-xl ">
								Microsoft Learn Student Chapter
							</span>
						</div>
						<p className="text-gray-200 max-w-md text-center md:text-left">
							Breaking Norms, Setting Standards.
						</p>
					</div>

					{/* Right side - Contact and Social links */}
					<div className="flex flex-col items-center md:items-end space-y-4 md:w-1/3 text-center md:text-left">
						<h3 className="font-semibold text-lg">Connect with Us</h3>
						<SocialLink
							href="https://www.instagram.com/mlscpccoe/"
							icon={<InstagramLogoIcon />}
							label="Follow us on Instagram"
						/>
						<SocialLink
							href="https://www.linkedin.com/company/mlsc-pccoe-chapter"
							icon={<LinkedInLogoIcon />}
							label="Connect on LinkedIn"
						/>
					</div>
				</div>

				{/* Bottom section */}
				<div className="mt-8 pt-4 border-t border-gray-700 text-center">
					<p className="text-gray-400">
						Made with <span className="text-red-500">❤️</span> by MLSC-PCCoE
					</p>
					<p className="text-gray-500 mt-2">
						© {currentYear} Microsoft Learn Student Club. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

const SocialLink = ({ href, icon, label }) => (
	<a
		href={href}
		className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
	>
		{React.cloneElement(icon, {
			className:
				"h-5 w-5 group-hover:scale-110 transition-transform duration-200",
		})}
		<span>{label}</span>
	</a>
)

export default Footer
