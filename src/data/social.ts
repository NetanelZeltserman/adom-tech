import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { type IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  color: 'green' | 'blue';
  description: string;
}
 
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/972525951809?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services",
    color: "green",
    description: "Let's build something great",
    icon: FaWhatsapp
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/adom-technology",
    color: "blue",
    description: "Follow our journey",
    icon: FaLinkedin
  }
];
