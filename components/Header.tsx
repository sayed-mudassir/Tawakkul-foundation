import Link from "next/link"
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border-2 border-emerald-100">
                <img src="/Logo.png" alt="Tawakkul Foundation Logo" className="object-contain w-full h-full"  />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">
                  Tawakkul Foundation
                </h1>
                <p className="text-sm text-emerald-600">
                  Trust in Allah's Providence
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#about"
                className="text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="#programs"
                className="text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="#impact"
                className="text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Impact
              </Link>
              <Link
                href="#gallery"
                className="text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Donate Now
            </Button>
          </div>
        </div>
      </header>
    );
}