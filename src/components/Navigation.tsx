import { Link, useLocation } from "react-router-dom";
import NeonButton from "@/components/ui/neon-button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/marketplace", label: "Marketplace" },
    { path: "/ratings", label: "Ratings" },
    { path: "/news", label: "News" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-cyber-cyan/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-orbitron font-black text-2xl">
            <span className="neon-text animate-neon-pulse">WARNING</span>
            <span className="text-cyber-pink">.NFT</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-orbitron transition-all duration-300 hover:text-cyber-cyan ${
                  location.pathname === item.path
                    ? "text-cyber-cyan neon-text"
                    : "text-gray-400 hover:neon-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <NeonButton variant="ghost" size="sm">
              Connect Wallet
            </NeonButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
