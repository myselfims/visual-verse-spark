import { Button } from "@/components/ui/button";
import { Home, FileText, Info, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-magic rounded-lg animate-glow"></div>
            <span className="text-xl font-bold text-foreground">EduCreate</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Home size={20} />
              <span>Home</span>
            </a>
            <a href="/templates" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <FileText size={20} />
              <span>Templates</span>
            </a>
            <a href="/about" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Info size={20} />
              <span>About</span>
            </a>
          </div>
          
          <Button variant="soft" className="flex items-center space-x-2">
            <LogIn size={18} />
            <span>Login</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;