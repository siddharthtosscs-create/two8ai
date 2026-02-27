import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Smooth background opacity based on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const navBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = {
    product: {
      title: "Product",
      items: [
        { title: "Overview", path: "/product" },
        { title: "Features", path: "/features" }
      ]
    },
    about: {
      title: "About",
      items: [
        { title: "About TWO8AI", path: "/about" },
        { title: "Leaders", path: "/leadership" }
      ]
    }
  };

  const NavLink = ({ to, children }) => (
    <Link to={to} className="relative group px-3 py-2 text-slate-600 hover:text-indigo-600 font-medium text-[15px] transition-colors">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBackground,
          backdropFilter: navBlur,
          boxShadow: navShadow
        }}
        className="fixed w-full z-50 transition-all duration-300 py-4"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          <Logo className="h-24 w-auto" containerClassName="-my-6 relative z-10" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative px-3 py-2"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 font-medium text-[15px] transition-colors ${activeDropdown === 'product' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}>
                Product
                <motion.div animate={{ rotate: activeDropdown === 'product' ? 180 : 0 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                      {navLinks.product.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            {/* <NavLink to="/pricing">Pricing</NavLink> */}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 font-medium text-[15px] transition-colors ${activeDropdown === 'about' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}>
                About
                <motion.div animate={{ rotate: activeDropdown === 'about' ? 180 : 0 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-48 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                      {navLinks.about.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-medium text-[15px] transition-colors">
              Log in
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-indigo-100 hover:shadow-indigo-200"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden text-slate-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-[70] overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Logo
                    className="h-14 w-auto"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-600" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Product Mobile */}
                  <div className="space-y-3">
                    <div className="font-bold text-slate-900 text-lg">Product</div>
                    <div className="pl-4 space-y-3 border-l-2 border-indigo-100">
                      {navLinks.product.items.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block text-slate-600 hover:text-indigo-600 py-2 text-base font-medium transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 'Pricing' hidden */['Solutions', 'Services', 'Industries'].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="block font-bold text-slate-900 text-lg py-2 hover:text-indigo-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}

                  {/* About Mobile */}
                  <div className="space-y-3">
                    <div className="font-bold text-slate-900 text-lg">About</div>
                    <div className="pl-4 space-y-3 border-l-2 border-indigo-100">
                      {navLinks.about.items.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block text-slate-600 hover:text-indigo-600 py-2 text-base font-medium transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="p-6 border-t border-slate-200 space-y-3 bg-slate-50">
                  <Link
                    to="/login"
                    className="block text-center text-slate-700 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-center bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
