import { Button } from "./ui/button";
import { Heart } from "lucide-react";
export default function Action() {
    return (
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
              className="border-white text-emerald-600 hover:bg-emerald-50 hover:text-gray-600 hover:border-emerald-50 " 
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    );
}