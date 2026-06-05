import content from './content/content.json'

const { site } = content

// To update contact info, hours, or phone: edit src/content/content.json
// To update the site URL after connecting a custom domain: edit siteUrl in content.json
export const SITE_URL = site.siteUrl
export const PHONE_DISPLAY = site.phone
export const PHONE_HREF = site.phoneHref
export const EMAIL_DISPLAY = site.email
export const EMAIL_HREF = `mailto:${site.email}`
export const BUSINESS_NAME = site.businessName
export const TAGLINE = site.tagline
export const HOURS = site.hours
