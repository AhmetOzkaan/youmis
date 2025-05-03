// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'instagram',
		link: 'https://instagram.com/youmis',
		icon: 'instagram-icon'
	},
	{
		name: 'twitter',
		link: 'https://twitter.com/youmis',
		icon: 'twitter-icon'
	}
]
