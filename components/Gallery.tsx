import Image from "next/image"
import { Button } from "./ui/button";
import { Utensils } from "lucide-react";
import { Users } from "lucide-react";
import {  Heart, HandHeart, MapPin } from "lucide-react";
export default function Gallery() {
    return (
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
            {/* <Button
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
            </Button> */}
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
    );
}