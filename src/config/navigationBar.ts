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
		alt: 'youMIS?',
		text: 'youMIS?'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'MIS', link: '/mis' },
		/*{
			name: 'Courses',
			link: '/courses',
			submenu: courseSubmenu
		},*/
		{ name: 'Courses', link: '/courses' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Career Test', link: '/career-test', style: 'primary', size: 'lg' }]
}