// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'youMIS',
		text: 'youMIS'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'MIS', link: '/mis' },
		{
			name: 'Courses',
			link: '#',
			submenu: [
				{ name: 'Course 1', link: '#' },
				{ name: 'Course 2', link: '/' },
				{ name: 'Course 3', link: '/' },
				{ name: 'Course 4', link: '/' }
			]
		},
		{ name: 'Blog', link: '/blog' },
		{ name: 'About', link: '#' }
	],
	navActions: [{ name: 'Career Test', link: '#', style: 'primary', size: 'lg' }]
}
/*
export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'youMIS',
		text: 'youMIS'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'MIS', link: '/pricing' },
		{
			name: 'Courses',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'Blog', link: '/contact' },
		{ name: 'About', link: '/features' }
	],
	navActions: [{ name: 'Test', link: '/test', style: 'primary', size: 'lg' }]
}
*/