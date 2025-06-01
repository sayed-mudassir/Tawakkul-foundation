import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Users,
  Utensils,
  HandHeart,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-800/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Feeding the Hungry,
                <span className="text-emerald-600"> By Allah's Will</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tawakkul Foundation is dedicated to serving humanity through
                food distribution programs, guided by Islamic principles of
                compassion, charity, and trust in Allah's providence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Mission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://sjc.microlink.io/kPh7AfjAf-M4KsBAwnjgU_WD84zGJs-ZOHGuI4g08YP7BRV4QTbFcR16Fr7Z7LHT2Vur8rjpg5bZsAo9DB04Dw.jpeg"
                  alt="Happy children from our community programs smiling and waving"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">
                      Bringing Joy to Our Community
                    </h3>
                    <p className="text-sm text-gray-200">
                      Serving with compassion and dignity
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-600">Families Fed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rooted in Islamic teachings of compassion and charity, we strive
              to eliminate hunger and bring hope to communities in need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Following the Prophet's (PBUH) example of showing mercy and
                  kindness to all creation, especially those in need.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">
                  Charity (Sadaqah)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Believing that giving charity purifies wealth and brings
                  blessings, we facilitate the flow of sustenance to those who
                  need it most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Tawakkul</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Trusting in Allah's providence while taking action, we work
                  diligently knowing that success comes from Allah alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Food Distribution Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through various initiatives, we ensure nutritious meals reach
              those who need them most.
            </p>
          </div>

          {/* Program Images Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Daily Meals Program Image */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Hot meals being served to community members"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold">
                      Daily Meal Distribution
                    </h4>
                    <p className="text-sm">
                      Hot, nutritious meals served daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Food Packages Image */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Family receiving food package with groceries"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold">Family Food Packages</h4>
                    <p className="text-sm">
                      Monthly groceries for families in need
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ramadan Iftar Program Image */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Community iftar gathering during Ramadan"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold">Ramadan Iftar Program</h4>
                    <p className="text-sm">
                      Special meals during the holy month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-emerald-800">
                      Daily Meal Distribution
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hot, nutritious meals served daily to families, elderly, and
                    individuals facing food insecurity in our community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-emerald-800">
                      Family Food Packages
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Monthly food packages containing essential groceries and
                    staples delivered directly to families in need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-emerald-800">
                      Ramadan Iftar Program
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Special iftar meals during the holy month of Ramadan,
                    bringing the community together in the spirit of sharing and
                    gratitude.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-emerald-100 w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <HandHeart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">
                    Volunteer Food Preparation
                  </h3>
                  <p className="text-emerald-700">
                    Our dedicated volunteers work tirelessly to prepare
                    nutritious meals and food packages for distribution to those
                    in need.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <div className="bg-emerald-200 p-3 rounded-full">
                      <Utensils className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="bg-emerald-200 p-3 rounded-full">
                      <Users className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="bg-emerald-200 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-emerald-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact by Allah's Grace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through the generosity of our donors and volunteers, we've been
              blessed to serve thousands.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                10,000+
              </div>
              <p className="text-gray-600">Families Served</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                50,000+
              </div>
              <p className="text-gray-600">Meals Distributed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                500+
              </div>
              <p className="text-gray-600">Active Volunteers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">25</div>
              <p className="text-gray-600">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the impact of your donations and see how we're making a
              difference in our community through the grace of Allah.
            </p>
          </div>

          {/* Gallery Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-600 bg-emerald-50"
            >
              All Photos
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              Food Distribution
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              Community Events
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              Volunteers
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              Ramadan Programs
            </Button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Large featured image - keeping the main image */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1726714828256-ba20cee5c733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxJbmRpYW4lMjByaWNlJTJDJTIwd2hlYXQlMjBhbmQlMjBwdWxzZXMlMjBkb2FudGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Community iftar during Ramadan - families gathering for breaking fast"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      Community Iftar Program
                    </h3>
                    <p className="text-sm text-gray-200">
                      Bringing families together during Ramadan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular gallery items replaced with icon graphics */}
            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Food Package Preparation
              </h3>
              <p className="text-sm text-emerald-700">
                Volunteers preparing nutritious meals for distribution
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Bringing Joy to Children
              </h3>
              <p className="text-sm text-emerald-700">
                Supporting the next generation with care and compassion
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Volunteer Team
              </h3>
              <p className="text-sm text-emerald-700">
                Our dedicated volunteers making a difference
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Serving Our Elders
              </h3>
              <p className="text-sm text-emerald-700">
                Providing care and support to elderly community members
              </p>
            </div>

            <div className="md:col-span-2 bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Mobile Food Distribution
              </h3>
              <p className="text-sm text-emerald-700">
                Reaching remote communities with essential food supplies
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Fresh Produce
              </h3>
              <p className="text-sm text-emerald-700">
                Providing nutritious fruits and vegetables
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Community Unity
              </h3>
              <p className="text-sm text-emerald-700">
                Bringing people together through shared meals
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              View More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Us in This Noble Cause
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            "And whoever saves a life, it is as if he has saved all of mankind."
            - Quran 5:32
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to get involved? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">info@tawakkulfoundation.org</p>
                <p className="text-sm text-gray-500 mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Address</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">123 Community Street</p>
                <p className="text-gray-600">City, State 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
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
                <p>+1 (555) 123-4567</p>
                <p>info@tawakkulfoundation.org</p>
                <p>
                  123 Community Street
                  <br />
                  City, State 12345
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
    </div>
  );
}
