import { Instagram } from "lucide-react";
import logo from "@/assets/juice-kitchen-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Juice Kitchen" className="h-10 w-auto brightness-0 invert" />
          </div>

          <div className="flex items-center gap-6 text-background/60 text-sm">
            <a href="#menu" className="hover:text-background transition-colors">Menu</a>
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <a href="#location" className="hover:text-background transition-colors">Location</a>
            <a href="#order" className="hover:text-background transition-colors">Order</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/juicekitchenco/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Juice Kitchen Co. All rights reserved. · 4352 N State Rd 7, Coral Springs, FL 33067
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
