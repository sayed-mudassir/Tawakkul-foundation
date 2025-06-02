import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Utensils } from "lucide-react";
import { Users } from "lucide-react";
import { Star, Heart, HandHeart } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Food Distribution Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through various initiatives, we ensure nutritious meals reach those
            who need them most.
          </p>
        </div>

        {/* Program Images Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Daily Meals Program Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/2159130379/photo/iftar-ramadan.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWOwEaJux3p_1CjwiBqZK4yx97tlGJ4xP7G_lIGWcG0="
                alt="Hot meals being served to community members"
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">
                    Weekly Distribution of Essential Food Supplies
                  </h4>
                  <p className="text-sm">
                    We weekly distribute raw essentials like rice, flour,
                    pulses, and oil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Family Food Packages Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/1353920639/photo/giving-zakat.webp?a=1&b=1&s=612x612&w=0&k=20&c=fyJieZ8wTm5T7_5DoKxICw7_vKvUXnQcLJ7d_2hcXS0="
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
                src="https://media.istockphoto.com/id/1311922883/photo/volunteer-with-box-of-food-for-poor-ramazan-kolisi-ramadan-paketi.webp?a=1&b=1&s=612x612&w=0&k=20&c=zQpd6LnhLwDHmcaYz876CKHXxw8KA8mGgLIoJY-tzlg="
                alt="Community iftar gathering during Ramadan"
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">Ramadan Food Aid</h4>
                  <p className="text-sm">
                    Basic meals + dates, sewai, papads & Rooh Afza.
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
                    Weekly Food Assistancen
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We support families, the elderly, and individuals in need by
                  distributing food supplies every week, helping them overcome
                  hunger and maintain dignity during difficult times.
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
                    Ramadan Food Support
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Distributing essential food items during Ramadan to support families in the spirit of sharing and community.
</p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-green-200 to-pink-100 w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <HandHeart className=" w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  Volunteer Food Preparation
                </h3>
                <p className="text-emerald-700">
                  Our dedicated volunteers work tirelessly to prepare nutritious
                  meals and food packages for distribution to those in need.
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
  );
}
