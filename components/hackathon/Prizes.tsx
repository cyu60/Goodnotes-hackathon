import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Medal } from "lucide-react";

export function Prizes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Amazing <span className="text-red">Prizes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* First Place */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-red/5 to-red/10">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-red" />
                </div>
                <Badge className="bg-red text-white text-lg px-4 py-2 mb-2">
                  1st Place
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Grand Prize
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-red">$10,000</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash prize</li>
                  <li>• Mentorship program</li>
                  <li>• Tech startup incubator access</li>
                  <li>• Premium development tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Second Place */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-apple/5 to-apple/10">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-apple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-apple" />
                </div>
                <Badge className="bg-apple text-white text-lg px-4 py-2 mb-2">
                  2nd Place
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Runner Up
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-apple">$5,000</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash prize</li>
                  <li>• Professional development courses</li>
                  <li>• Networking opportunities</li>
                  <li>• Software licenses</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Place */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gnTeal/5 to-gnTeal/10">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gnTeal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-10 h-10 text-gnTeal" />
                </div>
                <Badge className="bg-gnTeal text-white text-lg px-4 py-2 mb-2">
                  3rd Place
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Third Place
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-gnTeal">$2,500</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash prize</li>
                  <li>• Online course subscriptions</li>
                  <li>• Tech gadgets</li>
                  <li>• Conference tickets</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Plus special category awards for Best Design, Most Innovative, and
              People's Choice!
            </p>
            <Button className="bg-seafoam hover:bg-seafoam/90 text-white px-8 py-3 text-lg">
              View All Prizes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
