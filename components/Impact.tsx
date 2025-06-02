import { Utensils } from "lucide-react";
import { Users } from "lucide-react";
import {  Heart, HandHeart } from "lucide-react";

export default function ImpactSection() {
    return (
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
    );
}