// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'youMIS? - Your AI-powered career guide!',
	siteDescription:
		'Your AI-powered career guide designed for Management Information Systems students!',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon.png',
		alt: 'youMIS logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
