import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PricingCards } from "@/components/ui/pricing-cards"
import { ArrowRight, Users, Zap, Shield } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - SaintSal™ | Plans for Every Operator",
  description:
    "Choose the perfect SaintSal™ plan for your business. From startup to enterprise, we have AI-powered solutions that grow with you."
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-6">
            Plans for Every Operator
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're starting or scaling — SaintSal™ grows with you.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered lead discovery, intelligent
            deal analysis, and automated referral networks. Choose the plan that
            matches your ambition.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <PricingCards />
      </div>

      {/* Features Comparison */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose SaintSal™?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-500/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                AI-Powered Lead Discovery
              </h3>
              <p className="text-gray-300">
                Find and qualify high-value prospects with advanced AI that
                learns your ideal customer profile.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                Intelligent Deal Analysis
              </h3>
              <p className="text-gray-300">
                Get GPT-4o powered insights on every deal, with predictive
                scoring and strategic recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-500/20">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-400 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2 compliance, GDPR ready, and full
                data encryption.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/30 border-t border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using SaintSal™ to accelerate
            their growth with AI-powered automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-4 hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 hover:scale-105"
            >
              <a href="/en/setup">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4"
            >
              <a href="/en/setup">Contact Sales</a>
            </Button>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-gray-400 mb-8">
            Trusted by innovative businesses worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-gray-500">TechCorp</div>
            <div className="text-2xl font-bold text-gray-500">InnovateCo</div>
            <div className="text-2xl font-bold text-gray-500">FutureScale</div>
            <div className="text-2xl font-bold text-gray-500">GrowthLab</div>
          </div>
        </div>
      </div>
    </div>
  )
}
