import { Twitter, Github, Linkedin, Folder } from 'lucide-react';

const footerLinks = {
  product: {
    title: "PRODUCT",
    links: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const Footer = ()=> {
  return (
    <footer className="mt-10 bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo and Socials */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Folder className="w-8 h-8 text-blue-500" />
              <span className="text-white text-xl font-semibold">DashForge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empower your team with AI-driven dashboards. Transform data into actionable insights with our intuitive platform.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-300 font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 DashForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;