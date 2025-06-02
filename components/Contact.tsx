import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Contact() {
    return (
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
            <a href="tel:+919335809406">
              <Card className="border-emerald-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">Phone</CardTitle>
                </CardHeader>
                
                  <CardContent className="text-center">
                  <p className="text-gray-600">+91-9335809406</p>
                  <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM</p>
                </CardContent>  
              </Card>
            </a>
            <a href="mailto:info@tawakkulfoundation.org">
              <Card className="border-emerald-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">tawakkylfoundation@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-2">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>
            </a>
            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Address</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Prayagraj</p>
                <p className="text-gray-600"> Uttar Pradesh, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}