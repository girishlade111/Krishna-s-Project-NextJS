import Link from 'next/link';
import { TumLogo } from '@/components/icons/tum-logo';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  'For': ['Applicants', 'Students', 'Alumni', 'Employees', 'Press & Media'],
  'Services': ['MYTUM', 'TUMonline', 'Library', 'IT Services', 'Roomfinder'],
  'Quicklinks': ['TUM Shop', 'TUM Agenda', 'TUM Mobile', 'Universitätsstiftung'],
  'Contact': ['Contact', 'Directions', 'Site Map', 'Impressum', 'Privacy'],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Linkedin', icon: Linkedin, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
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
        <div className="mt-8 border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-gray-400 hover:text-white">
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-gray-400">&copy; {new Date().getFullYear()} Technical University of Munich</p>
        </div>
      </div>
    </footer>
  );
}
