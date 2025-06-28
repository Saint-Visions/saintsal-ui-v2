"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, Rocket } from "lucide-react"

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  icon: React.ReactNode
  popular?: boolean
  cta: string
  ctaLink: string
  gradient: string
  borderColor: string
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    description:
      "Perfect for getting started with AI-powered business automation",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "50 AI-powered lead discoveries per month",
      "Basic referral tracking system",
      "Standard deal analysis with GPT-4",
      "Email support",
      "Basic mobile app access",
      "Standard integrations"
    ],
    cta: "Start Your Journey",
    ctaLink: "/en/setup",
    gradient: "from-blue-500 to-blue-700",
    borderColor: "border-blue-500/20"
  },
  {
    name: "Pro",
    price: "$597",
    period: "/month",
    description: "Command Your Future - Most popular for scaling businesses",
    icon: <Crown className="h-6 w-6" />,
    popular: true,
    features: [
      "Unlimited AI lead discoveries",
      "Advanced referral network management",
      "Premium GPT-4o deal analysis",
      "Priority support & dedicated success manager",
      "Full mobile app suite with custom branding",
      "Advanced CRM integrations (GoHighLevel, HubSpot)",
      "Custom AI training on your business data",
      "White-label partner portal access"
    ],
    cta: "Command Your Future",
    ctaLink: "/en/setup",
    gradient: "from-yellow-500 to-yellow-700",
    borderColor: "border-yellow-500/20"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Fully customized solutions for enterprise-level operations",
    icon: <Rocket className="h-6 w-6" />,
    features: [
      "Everything in Pro plan",
      "Custom AI model training & deployment",
      "Dedicated infrastructure & security",
      "24/7 white-glove support",
      "Custom integrations & API access",
      "Multi-workspace management",
      "Advanced analytics & reporting",
      "On-premise deployment options"
    ],
    cta: "Contact Sales",
    ctaLink: "/en/setup",
    gradient: "from-purple-500 to-purple-700",
    borderColor: "border-purple-500/20"
  }
]

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <Card
          key={plan.name}
          className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 border ${plan.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? "ring-2 ring-yellow-500/50 shadow-yellow-500/25" : ""}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-4 py-1">
                🔥 MOST POPULAR
              </Badge>
            </div>
          )}

          <CardHeader className="text-center pb-4">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${plan.gradient} text-white mx-auto mb-4`}
            >
              {plan.icon}
            </div>
            <CardTitle className="text-2xl font-bold text-white mb-2">
              {plan.name}
            </CardTitle>
            <div className="flex items-baseline justify-center mb-4">
              <span className="text-4xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-gray-400 ml-2">{plan.period}</span>
            </div>
            <p className="text-gray-300 text-sm">{plan.description}</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={`w-full bg-gradient-to-r ${plan.gradient} text-white font-semibold py-3 hover:shadow-lg transition-all duration-300 ${plan.popular ? "shadow-yellow-500/25" : ""}`}
            >
              <a href={plan.ctaLink}>{plan.cta}</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
