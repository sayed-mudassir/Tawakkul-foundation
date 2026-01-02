import { Button } from "./ui/button";
import Image from "next/image";
import { Heart, Users } from "lucide-react";
export default function HeroSection() {
    return (
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
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    );
}

