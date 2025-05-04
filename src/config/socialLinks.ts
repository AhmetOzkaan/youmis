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
		link: 'https://instagram.com/youmisofficial ',
		icon: 'instagram-icon'
	},
	{
		name: 'twitter',
		link: 'https://x.com/youmisofficial ',
		icon: 'x-icon'
	}
]
