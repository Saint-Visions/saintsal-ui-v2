"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  Users,
  Brain,
  Smartphone,
  TrendingUp,
  Zap,
  Settings,
  Download
} from "lucide-react"

// Import the feature components
import { LeadDiscovery } from "@/components/leads/lead-discovery"
import { ReferralNetwork } from "@/components/referrals/referral-network"
import { AIDealDashboard } from "@/components/deals/ai-deal-dashboard"

interface OperationsStats {
  leads_discovered: number
  active_referrals: number
  deals_analyzed: number
  mobile_users: number
  total_revenue: number
  ai_insights: number
}

export function SaintSalOperationsDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [stats] = useState<OperationsStats>({
    leads_discovered: 247,
    active_referrals: 18,
    deals_analyzed: 156,
    mobile_users: 89,
    total_revenue: 1250000,
    ai_insights: 1834
  })

  const handleMobileExport = () => {
    // This would trigger the mobile build process
    console.log("Starting mobile export process...")
    // You could call the mobile build script here or show instructions
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            🔥 SaintSal™ Operations Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            AI-powered business intelligence and automation platform
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <Search className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">
                {stats.leads_discovered}
              </div>
              <div className="text-xs text-gray-400">Leads Discovered</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-500/20">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">
                {stats.active_referrals}
              </div>
              <div className="text-xs text-gray-400">Active Referrals</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <Brain className="h-6 w-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">
                {stats.deals_analyzed}
              </div>
              <div className="text-xs text-gray-400">Deals Analyzed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 border-pink-500/20">
            <CardContent className="p-4 text-center">
              <Smartphone className="h-6 w-6 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-400">
                {stats.mobile_users}
              </div>
              <div className="text-xs text-gray-400">Mobile Users</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border-yellow-500/20">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">
                ${(stats.total_revenue / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-gray-400">Total Revenue</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-500/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-6 w-6 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-400">
                {stats.ai_insights}
              </div>
              <div className="text-xs text-gray-400">AI Insights</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-5 bg-gray-800/50">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-yellow-500/20"
            >
              <Settings className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="leads"
              className="data-[state=active]:bg-blue-500/20"
            >
              <Search className="h-4 w-4 mr-2" />
              Lead Discovery
            </TabsTrigger>
            <TabsTrigger
              value="referrals"
              className="data-[state=active]:bg-green-500/20"
            >
              <Users className="h-4 w-4 mr-2" />
              Referral Network
            </TabsTrigger>
            <TabsTrigger
              value="deals"
              className="data-[state=active]:bg-purple-500/20"
            >
              <Brain className="h-4 w-4 mr-2" />
              AI Deal Analysis
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-pink-500/20"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile Export
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-400">
                    🚀 System Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Lead Discovery Engine
                      </span>
                      <Badge className="bg-green-500 text-white">
                        ✅ Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Referral Tracking</span>
                      <Badge className="bg-green-500 text-white">
                        ✅ Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI Deal Analysis</span>
                      <Badge className="bg-green-500 text-white">
                        ✅ Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">GHL Integration</span>
                      <Badge className="bg-green-500 text-white">
                        ✅ Connected
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mobile App</span>
                      <Badge className="bg-yellow-500 text-black">
                        📱 Ready to Deploy
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-400">
                    📈 Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">
                        Lead Conversion Rate
                      </span>
                      <span className="text-green-400 font-semibold">
                        18.4%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">
                        Referral Success Rate
                      </span>
                      <span className="text-green-400 font-semibold">
                        31.2%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">AI Accuracy Score</span>
                      <span className="text-green-400 font-semibold">
                        94.7%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mobile App Rating</span>
                      <span className="text-green-400 font-semibold">
                        4.9 ⭐
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">User Satisfaction</span>
                      <span className="text-green-400 font-semibold">
                        96.8%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-400">
                  🧠 Recent AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-900/20 rounded-lg">
                    <div className="text-purple-300 font-medium">
                      High-Value Lead Detected
                    </div>
                    <div className="text-gray-400 text-sm">
                      Enterprise client in fintech sector, 85% conversion
                      probability
                    </div>
                  </div>
                  <div className="p-3 bg-green-900/20 rounded-lg">
                    <div className="text-green-300 font-medium">
                      Referral Network Optimization
                    </div>
                    <div className="text-gray-400 text-sm">
                      Partner "SAINTTECH2024" showing 43% above average
                      performance
                    </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-lg">
                    <div className="text-blue-300 font-medium">
                      Deal Portfolio Analysis
                    </div>
                    <div className="text-gray-400 text-sm">
                      3 deals identified as "closing soon" - focus recommended
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="mt-6">
            <LeadDiscovery
              onLeadFound={lead => {
                console.log("Lead discovered:", lead)
                // Could trigger further automation here
              }}
            />
          </TabsContent>

          <TabsContent value="referrals" className="mt-6">
            <ReferralNetwork />
          </TabsContent>

          <TabsContent value="deals" className="mt-6">
            <AIDealDashboard />
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-pink-500/20">
                <CardHeader>
                  <CardTitle className="text-pink-400">
                    📱 SaintSal™ Mobile App Export
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Transform your SaintSal™ web application into native iOS
                      and Android apps.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-900/20 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">
                          🤖 Android App
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Native Android performance</li>
                          <li>• Google Play Store ready</li>
                          <li>• Push notifications</li>
                          <li>• Offline capabilities</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gray-700/20 rounded-lg">
                        <h4 className="text-gray-400 font-semibold mb-2">
                          🍎 iOS App
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Native iOS performance</li>
                          <li>• App Store distribution</li>
                          <li>• iOS-specific features</li>
                          <li>• TestFlight support</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-yellow-400 font-semibold">
                        Mobile Build Process:
                      </h4>
                      <div className="bg-black p-4 rounded-lg font-mono text-sm text-green-400">
                        <div># 1. Run the mobile build script</div>
                        <div>node scripts/mobile-build.js</div>
                        <div className="mt-2"># 2. Open native IDEs</div>
                        <div>npm run mobile:open:android # Android Studio</div>
                        <div>npm run mobile:open:ios # Xcode</div>
                        <div className="mt-2"># 3. Build and deploy</div>
                        <div>npm run mobile:android # Run on Android</div>
                        <div>npm run mobile:ios # Run on iOS</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={handleMobileExport}
                        className="bg-gradient-to-r from-pink-500 to-pink-700 text-white"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Start Mobile Build
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          window.open("/mobile-instructions", "_blank")
                        }}
                      >
                        📖 View Full Instructions
                      </Button>
                    </div>

                    <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                      <div className="text-yellow-400 font-semibold mb-2">
                        🔥 Ready for App Stores!
                      </div>
                      <p className="text-gray-300 text-sm">
                        Your SaintSal™ mobile apps include all premium
                        features: lead discovery, referral tracking, AI deal
                        analysis, and full CRM integration - all optimized for
                        mobile.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
