import Link from 'next/link';
import { TumLogo } from '@/components/icons/tum-logo';
import { Twitter, Facebook, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const footerLinks = {
  'For': ['Applicants', 'Students', 'Alumni', 'Employees', 'Press & Media'],
  'Services': ['MYTUM', 'TUMonline', 'Library', 'IT Services', 'Roomfinder'],
  'Quicklinks': ['TUM Shop', 'TUM Agenda', 'TUM Mobile', 'Universitätsstiftung'],
  'Contact': ['Contact', 'Directions', 'Site Map', 'Impressum', 'Privacy'],
};

const schoolAndResearchLinks = [
    { name: 'Schools and Research Centers', href: '#' },
    { name: 'Departments', href: '#' },
    { name: 'TUM Campus Straubing', href: '#' },
    { name: 'TUM Campus Heilbronn', href: '#' },
    { name: 'TUM in Singapore', href: '#' },
    { name: 'TUM International', href: '#' },
    { name: 'Excellence Strategy', href: '#' },
    { name: 'Value Creation Center', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Linkedin', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <TumLogo className="h-10 w-auto text-white mb-4"/>
            <p className="text-sm text-gray-400">Technical University of Munich</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 border-t border-border/50 pt-8">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Schools and Research Centers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
            {schoolAndResearchLinks.map(link => (
              <Link href={link.href} key={link.name} className="text-base text-gray-300 hover:text-white flex items-center gap-1">
                {link.name} <ExternalLink className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-gray-400 hover:text-white">
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-gray-400">&copy; Technical University of Munich</p>
        </div>
      </div>
    </footer>
  );
}
