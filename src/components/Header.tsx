import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      {/* Top Bar - Hidden on mobile */}
      <div className="border-b border-white/10 hidden md:block">
        <div className="mu-container">
          <div className="flex items-center justify-end gap-6 py-2">
            <a href="#" className="text-white/80 hover:text-white text-xs md:text-sm transition-colors">
              For Companies
            </a>
            <a href="#" className="text-white/80 hover:text-white text-xs md:text-sm transition-colors">
              Jobs
            </a>
            <a href="#" className="text-white/80 hover:text-white text-xs md:text-sm transition-colors">
              Events
            </a>
            <a href="#" className="text-white/80 hover:text-white text-xs md:text-sm transition-colors">
              Become a Master
            </a>
            <a href="#" className="text-white/80 hover:text-white text-xs md:text-sm transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mu-container">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow via-accent to-yellow/60 rounded-sm" />
            <div>
              <div className="text-white font-bold text-sm md:text-lg leading-tight">masters'</div>
              <div className="text-white font-bold text-sm md:text-lg leading-tight">union</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group text-sm">
              ABOUT US
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group text-sm">
              ACADEMICS
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors text-sm">
              CAREERS
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group text-sm">
              STUDENT LIFE
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group text-sm">
              INNOVATION
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors text-sm">
              FACULTY
            </a>
            <a href="#" className="text-white hover:text-yellow transition-colors flex items-center gap-1 group text-sm">
              MU VENTURES
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-white/10 pt-4">
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              ABOUT US
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              ACADEMICS
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              CAREERS
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              STUDENT LIFE
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              INNOVATION
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              FACULTY
            </a>
            <a href="#" className="block text-white hover:text-yellow hover:bg-white/5 transition-colors py-2.5 px-4 rounded-lg text-sm">
              MU VENTURES
            </a>
            
            {/* Mobile Top Bar Links */}
            <div className="border-t border-white/10 pt-3 mt-3 space-y-1">
              <a href="#" className="block text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-4 rounded-lg text-xs">
                For Companies
              </a>
              <a href="#" className="block text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-4 rounded-lg text-xs">
                Jobs
              </a>
              <a href="#" className="block text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-4 rounded-lg text-xs">
                Events
              </a>
              <a href="#" className="block text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-4 rounded-lg text-xs">
                Become a Master
              </a>
              <a href="#" className="block text-white/80 hover:text-white hover:bg-white/5 transition-colors py-2 px-4 rounded-lg text-xs">
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
