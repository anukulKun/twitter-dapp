"use client";

import { motion } from "motion/react";

export default function RadarChart() {
	return (
		<div className="absolute top-1/2 -translate-y-1/2 left-[130px]">
			<motion.svg
				width="184"
				height="180"
				viewBox="0 0 184 180"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				initial="initial"
				animate="animate"
				className="w-full max-w-[600px]"
			>
				<title>radar</title>
				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 0.2,
							},
						},
					}}
				>
					<motion.path
						opacity="0.3"
						d="M81.7554 93.8656C81.7554 58.8804 89.487 30.6602 98.9581 30.6602C108.623 30.6602 116.354 58.8804 116.354 93.8656C116.354 128.658 108.623 157.071 98.9581 157.071C89.487 157.071 81.7554 128.658 81.7554 93.8656Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { scale: 0.8, opacity: 0 },
							animate: { scale: 1, opacity: 0.3 },
						}}
					/>
					<motion.path
						opacity="0.3"
						d="M70.7393 93.8656C70.7393 58.8804 83.4963 30.6602 98.9593 30.6602C114.616 30.6602 127.179 58.8804 127.179 93.8656C127.179 128.658 114.616 157.071 98.9593 157.071C83.4963 157.071 70.7393 128.658 70.7393 93.8656Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { scale: 0.8, opacity: 0 },
							animate: { scale: 1, opacity: 0.3 },
						}}
					/>
					<motion.path
						opacity="0.3"
						d="M66.4847 93.8656C66.4847 58.8804 80.9814 30.6602 98.9572 30.6602C116.933 30.6602 131.43 58.8804 131.43 93.8656C131.43 128.658 116.933 157.071 98.9572 157.071C80.9814 157.071 66.4847 128.658 66.4847 93.8656Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { scale: 0.8, opacity: 0 },
							animate: { scale: 1, opacity: 0.3 },
						}}
					/>
					<motion.path
						opacity="0.3"
						d="M37.1064 93.8656C37.1064 58.8804 64.7467 30.6602 98.9588 30.6602C133.171 30.6602 160.811 58.8804 160.811 93.8656C160.811 128.658 133.171 157.071 98.9588 157.071C64.7467 157.071 37.1064 128.658 37.1064 93.8656Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { scale: 0.8, opacity: 0 },
							animate: { scale: 1, opacity: 0.3 },
						}}
					/>
					<motion.path
						opacity="0.3"
						d="M23.9613 93.8656C23.9613 58.8804 57.5935 30.6602 98.9573 30.6602C140.514 30.6602 174.147 58.8804 174.147 93.8656C174.147 128.658 140.514 157.071 98.9573 157.071C57.5935 157.071 23.9613 128.658 23.9613 93.8656Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { scale: 0.8, opacity: 0 },
							animate: { scale: 1, opacity: 0.3 },
						}}
					/>
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.5 },
						},
					}}
				>
					<motion.path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M98.9603 108.75C90.6489 108.75 84.077 102.178 84.077 93.8664C84.077 85.555 90.6489 78.7899 98.9603 78.7899C107.272 78.7899 114.037 85.555 114.037 93.8664C114.037 102.178 107.272 108.75 98.9603 108.75ZM98.9603 80.1429C91.422 80.1429 85.4301 86.3281 85.4301 93.8664C85.4301 101.405 91.422 107.397 98.9603 107.397C106.499 107.397 112.684 101.405 112.684 93.8664C112.684 86.3281 106.499 80.1429 98.9603 80.1429Z"
						fill="#EF428C"
						fillOpacity="0.5"
						animate={{ rotate: 360 }}
						transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
					/>
					<motion.path
						d="M92.3862 93.8653C92.3862 90.1928 95.2856 87.2934 98.9581 87.2934C102.631 87.2934 105.53 90.1928 105.53 93.8653C105.53 97.5377 102.631 100.437 98.9581 100.437C95.2856 100.437 92.3862 97.5377 92.3862 93.8653Z"
						fill="#EF428C"
						fillOpacity="0.5"
						animate={{ scale: [1, 1.2, 1] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					/>
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 0.7,
							},
						},
					}}
				>
					<motion.path
						d="M84.6537 94.4451H13.3303V93.092H84.6537V94.4451Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M108.042 82.8485L107.075 81.8821L155.398 33.5599V24.6686H127.177V23.3156H156.751V34.1398L108.042 82.8485Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{
							initial: { pathLength: 0 },
							animate: { pathLength: 1 },
						}}
						transition={{ duration: 1 }}
					/>
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.05,
								delayChildren: 1,
							},
						},
					}}
				>
					<motion.path
						d="M13.9132 33.3666H12.5602V23.3156H25.3173V24.6686H13.9132V33.3666Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { opacity: 0 }, animate: { opacity: 0.5 } }}
					/>
					<motion.path
						d="M25.3173 157.652H12.5602V147.407H13.9132V156.299H25.3173V157.652Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { opacity: 0 }, animate: { opacity: 0.5 } }}
					/>
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.02,
								delayChildren: 1.2,
							},
						},
					}}
				>
					{[
						"M21.4516 32.5931H19.3253V30.6602H21.4516V32.5931Z",
						"M44.8387 32.5931H42.7125V30.6602H44.8387V32.5931Z",
						"M68.2259 32.5931H66.0997V30.6602H68.2259V32.5931Z",
						"M91.6131 32.5931H89.4868V30.6602H91.6131V32.5931Z",
						"M115 32.5931H112.874V30.6602H115V32.5931Z",
						"M21.4516 55.2071H19.3253V53.0809H21.4516V55.2071Z",
						"M44.8387 55.2071H42.7125V53.0809H44.8387V55.2071Z",
						"M68.2259 55.2071H66.0997V53.0809H68.2259V55.2071Z",
						"M91.6131 55.2071H89.4868V53.0809H91.6131V55.2071Z",
						"M115 55.2071H112.874V53.0809H115V55.2071Z",
						"M21.4516 118.026H19.3253V115.9H21.4516V118.026Z",
						"M44.8387 118.026H42.7125V115.9H44.8387V118.026Z",
						"M68.2259 118.026H66.0997V115.9H68.2259V118.026Z",
						"M91.6131 118.026H89.4868V115.9H91.6131V118.026Z",
						"M115 118.026H112.874V115.9H115V118.026Z",
						"M21.4516 143.347H19.3253V141.414H21.4516V143.347Z",
						"M44.8387 143.347H42.7125V141.414H44.8387V143.347Z",
						"M68.2259 143.347H66.0997V141.414H68.2259V143.347Z",
						"M91.6131 143.347H89.4868V141.414H91.6131V143.347Z",
						"M115 143.347H112.874V141.414H115V143.347Z",
					].map((d, i) => (
						<motion.path
							key={i}
							d={d}
							fill="#EF428C"
							fillOpacity="0.5"
							variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
						/>
					))}
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 1.5,
							},
						},
					}}
				>
					<motion.path
						d="M142.643 154.945H139.164V139.868H142.643V154.945Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
					/>
					<motion.path
						d="M149.212 154.945H145.733V90.5797H149.212V154.945Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
					/>
					<motion.path
						d="M155.784 154.945H152.498V103.143H155.784V154.945Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
					/>
					<motion.path
						d="M162.357 154.945H159.071V131.17H162.357V154.945Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
					/>
					<motion.path
						d="M168.929 154.944H165.643V113.967H168.929V154.944Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1 } }}
					/>
				</motion.g>

				<motion.path
					d="M139.164 157.264H168.931V158.617H139.164V157.264Z"
					fill="#EF428C"
					fillOpacity="0.5"
					variants={{ initial: { opacity: 0 }, animate: { opacity: 0.5 } }}
					transition={{ delay: 2 }}
				/>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 2.2,
							},
						},
					}}
				>
					<motion.path
						d="M148.055 87.6803H147.088V86.7139H148.055V87.6803Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
					/>
					<motion.path
						d="M154.434 100.824H153.661V99.8571H154.434V100.824Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
					/>
					<motion.path
						d="M167.769 111.456H166.802V110.682H167.769V111.456Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
					/>
					<motion.path
						d="M161.196 127.691H160.23V126.918H161.196V127.691Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
					/>
					<motion.path
						d="M141.481 137.356H140.708V136.389H141.481V137.356Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scale: 0 }, animate: { scale: 1 } }}
					/>
				</motion.g>

				<motion.g
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 2.5,
							},
						},
					}}
				>
					<motion.path
						d="M14.6835 5.72564H3.66602V4.17932H14.6835V5.72564Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M126.406 5.72564H115.388V4.17932H126.406V5.72564Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M180.334 5.72564H169.317V4.17932H180.334V5.72564Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M71.3191 5.72564H19.5178V4.17932H71.3191V5.72564Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M14.6835 175.821H3.66602V174.468H14.6835V175.821Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M126.406 175.821H115.388V174.468H126.406V175.821Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M180.334 175.821H169.317V174.468H180.334V175.821Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
					<motion.path
						d="M71.3191 175.821H19.5178V174.468H71.3191V175.821Z"
						fill="#EF428C"
						fillOpacity="0.5"
						variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
					/>
				</motion.g>
			</motion.svg>
		</div>
	);
}
