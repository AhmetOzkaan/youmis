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
		title: 'youMIS?',
		aboutText:
				'Yönetim Bilişim Sistemleri eğitimi ve kariyer yollarında gezinmek için yapay zeka destekli rehberiniz.',
		logo: {
			src: '/logo.jpeg',
			alt: 'logo',
			text: 'youMIS?'
		}
	},
	footerColumns: [
		{
			category: 'Navigasyon',
			subCategories: [
				{
					subCategory: 'Anasayfa',
					subCategoryLink: '/'
				},
				{
					subCategory: 'YBS',
					subCategoryLink: '/mis'
				},
				{
					subCategory: 'Dersler',
					subCategoryLink: '/courses'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Hakkımızda',
			subCategories: [
				{
					subCategory: 'Hakkında',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'İletişim',
					subCategoryLink: '/contact'
				}
			]
		},
		{
			category: 'Araçlar',
			subCategories: [
				{
					subCategory: 'Kariyer Testi',
					subCategoryLink: '/career-test'
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© youMIS? ${new Date().getFullYear()}.`
	}
}
