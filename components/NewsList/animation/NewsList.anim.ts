export const variantsList = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,

		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const variantsItem = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
		},
	},
};
