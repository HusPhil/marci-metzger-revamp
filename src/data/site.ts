import type { LightboxImage } from '../components/Lightbox'

export const phoneDisplay = '(206) 919-6886'
export const phoneHref = 'tel:+12069196886'
export const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+NV+89048'
export const mapEmbedUrl =
  'https://www.google.com/maps?q=3190+HW-160+Suite+F,+Pahrump,+NV+89048&output=embed'

export const navigation = [
  { href: '#top', label: 'Home' },
  { href: '#listings', label: 'Listings' },
  { href: '#contact', label: "Let's Move" },
  { href: '#about', label: 'About Us' },
]

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/MarciHomes/' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/marcimetzger_theridge/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marci-metzger-30642496/',
  },
  { label: 'Yelp', href: 'https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w' },
]

export type Stat = {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '30', label: 'Years in real estate' },
  { value: '$28.5M', label: 'Closed in sales, 2021' },
  { value: '90+', label: 'Clients helped in 2021' },
  { value: 'Local', label: 'Pahrump & Southern Nevada' },
]

export type ContentCard = {
  number: string
  title: string
  body: string
  image: string
  alt: string
}

export const soldCards: ContentCard[] = [
  {
    number: '01',
    title: 'Top residential sales, last 5 years',
    body: 'We helped nearly 90 clients in 2021 and closed $28.5 million in sales. Our team works hard every day to grow and learn, so we can keep raising the bar for our clients.',
    image: '/images/sold-top-sales.jpg',
    alt: 'Luxury home exterior with a pool at dusk',
  },
  {
    number: '02',
    title: "Don't just list it... get it SOLD!",
    body: 'We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    image: '/images/sold-get-it-sold.jpg',
    alt: 'Bright, open living room in a residential property',
  },
  {
    number: '03',
    title: 'A guide to buyers',
    body: 'Nobody knows the market like we do. Enjoy having a pro at your service — market analysis, upgrade lists, contractors on speed dial, and more.',
    image: '/images/sold-guide-buyers.jpg',
    alt: 'Welcoming entryway of a well-appointed home',
  },
]

export const services: ContentCard[] = [
  {
    number: '01',
    title: 'Real Estate Done Right',
    body: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible.",
    image: '/images/service-done-right.jpg',
    alt: 'Modern home exterior with clean architectural lines',
  },
  {
    number: '02',
    title: 'Commercial & Residential',
    body: "Large or small, condo or mansion, we can find it — and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it. We live, work, and play in this community.",
    image: '/images/service-commercial.jpg',
    alt: 'Contemporary residential and commercial property',
  },
  {
    number: '03',
    title: 'Rely on Expertise',
    body: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get answers in a timely fashion. We make sure you feel confident and educated every step of the way.',
    image: '/images/service-expertise.jpg',
    alt: 'Interior detail of a refined desert home',
  },
]

export const galleryImages: LightboxImage[] = [
  {
    src: '/images/gallery-roseworthy-1.jpg',
    alt: 'Portfolio photograph of the Roseworthy residence.',
    caption: 'Roseworthy Residence',
  },
  {
    src: '/images/gallery-ailanto-1.jpg',
    alt: 'Portfolio photograph of the Ailanto estate.',
    caption: 'Ailanto Estate',
  },
  {
    src: '/images/gallery-ailanto-2.jpg',
    alt: 'Portfolio photograph of the Ailanto residence.',
    caption: 'Ailanto Residence',
  },
  {
    src: '/images/gallery-ailanto-3.jpg',
    alt: 'Portfolio photograph of the Ailanto courtyard.',
    caption: 'Ailanto Courtyard',
  },
  {
    src: '/images/gallery-beacon-1.jpg',
    alt: 'Portfolio photograph of a home at Beacon Ridge.',
    caption: 'Beacon Ridge',
  },
  {
    src: '/images/gallery-beacon-2.jpg',
    alt: 'Portfolio photograph of a living space at Beacon Ridge.',
    caption: 'Beacon Ridge',
  },
  {
    src: '/images/gallery-beacon-3.jpg',
    alt: 'Portfolio photograph of a residence at Beacon Ridge.',
    caption: 'Beacon Ridge',
  },
]
