import Link from "next/link";
export default function Footer() {
    return (
         <footer className="bg-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
               <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border-2 border-emerald-100">
                <img src="/Logo.png" alt="Tawakkul Foundation Logo" className="object-contain w-full h-full"  />
              </div>
                <div>
                  <h3 className="text-xl font-bold">Tawakkul Foundation</h3>
                  <p className="text-emerald-200 text-sm">
                    Trust in Allah's Providence
                  </p>
                </div>
              </div>
              <p className="text-emerald-200">
                Serving humanity through food distribution programs, guided by
                Islamic principles.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programs"
                    className="hover:text-white transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#impact"
                    className="hover:text-white transition-colors"
                  >
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sponsor a Family
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-emerald-200">
                <p><a href="tel:+919335809406">+91-9335809406</a></p>
                <p>info@tawakkulfoundation.org</p>
                <p>
                  Prayagraj
                  <br />
                  Uttar Pardesh, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
            <p className="text-emerald-200">
              © 2024 Tawakkul Foundation. All rights reserved. |
              <span className="text-emerald-300">
                {" "}
                "And it is He who feeds me and gives me drink." - Quran 26:79
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
}