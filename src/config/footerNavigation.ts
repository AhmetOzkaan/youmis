// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'youMIS',
		aboutText:
				'Your AI-powered guide for navigating Management Information Systems education and career paths.',
		logo: {
			src: '/logo.jpeg',
			alt: 'logo',
			text: 'youMIS'
		}
	},
	footerColumns: [
		{
			category: 'Navigation',
			subCategories: [
				{
					subCategory: 'Home',
					subCategoryLink: '/'
				},
				{
					subCategory: 'MIS',
					subCategoryLink: '/mis'
				},
				{
					subCategory: 'Courses',
					subCategoryLink: '/courses'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'About Us',
			subCategories: [
				{
					subCategory: 'About',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
			]
		},
		{
			category: 'Tools',
			subCategories: [
				{
					subCategory: 'Career Test',
					subCategoryLink: '#'
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© youMIS ${new Date().getFullYear()}.`
	}
}
