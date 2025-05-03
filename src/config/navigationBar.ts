// Navigation Bar
// ------------
// Description: The navigation bar data for the website.

import { z, getCollection } from 'astro:content'

// Get course names for navigation
const courses = await getCollection('courses')
const courseSubmenu = courses.map(course => ({
	name: course.data.title,
	link: `/courses/${course.id}`
}))

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
			link: '/courses',
			submenu: courseSubmenu
		},
		{ name: 'Blog', link: '/blog' },
		{ name: 'About', link: '/about' }
	],
	navActions: [{ name: 'Career Test', link: '#', style: 'primary', size: 'lg' }]
}