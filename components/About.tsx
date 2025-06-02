import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, HandHeart, Star } from "lucide-react";

export default function About() {
    return (
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
    );
}