import { useState } from "react"
import { TrendingUp, Users, Star, Target, BarChart3, PieChart, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockInsightData = {
  entity: {
    name: "Christopher Nolan",
    type: "filmmaker",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop&crop=face",
    bio: "Acclaimed director known for complex narratives and innovative filmmaking techniques"
  },
  metrics: [
    { label: "Audience Score", value: 94, change: "+5%", icon: Star, color: "text-chart-1" },
    { label: "Engagement Rate", value: 87, change: "+12%", icon: TrendingUp, color: "text-chart-2" },
    { label: "Global Reach", value: 92, change: "+8%", icon: Users, color: "text-chart-3" },
    { label: "Influence Score", value: 89, change: "+3%", icon: Target, color: "text-chart-4" }
  ],
  demographics: {
    ageGroups: [
      { group: "18-24", percentage: 25, color: "bg-chart-1" },
      { group: "25-34", percentage: 35, color: "bg-chart-2" },
      { group: "35-44", percentage: 22, color: "bg-chart-3" },
      { group: "45+", percentage: 18, color: "bg-chart-4" }
    ],
    genderSplit: { male: 58, female: 42 }
  },
  topGenres: [
    { name: "Sci-Fi Thriller", percentage: 85 },
    { name: "Psychological Drama", percentage: 78 },
    { name: "Action", percentage: 65 },
    { name: "Mystery", percentage: 60 }
  ],
  recentTrends: [
    { period: "Last 30 days", metric: "Mentions", value: "+24%" },
    { period: "Last 7 days", metric: "Social Engagement", value: "+18%" },
    { period: "This week", metric: "New Followers", value: "+15%" }
  ]
}

const Insights = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gradient-primary">Entity Insights</h1>
          <p className="text-muted-foreground">
            Deep dive into audience data and engagement metrics
          </p>
        </div>
        <Button className="glow-primary">
          <Activity className="w-4 h-4 mr-2" />
          Live Data
        </Button>
      </div>

      {/* Entity Overview */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-start gap-6">
            <img
              src={mockInsightData.entity.image}
              alt={mockInsightData.entity.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <CardTitle className="text-2xl">{mockInsightData.entity.name}</CardTitle>
                <Badge variant="secondary" className="text-sm">
                  {mockInsightData.entity.type}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {mockInsightData.entity.bio}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockInsightData.metrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <Card key={index} className="metric-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}%</p>
                </div>
                <Progress value={metric.value} className="mt-3 h-2" />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detailed Analytics */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 glass-card p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Overview
          </TabsTrigger>
          <TabsTrigger value="demographics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Demographics
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Genres */}
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Top Genres
                </CardTitle>
                <CardDescription>
                  Most popular content categories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockInsightData.topGenres.map((genre, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{genre.name}</span>
                      <span className="font-medium">{genre.percentage}%</span>
                    </div>
                    <Progress value={genre.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Trends */}
            <Card className="chart-container">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest engagement trends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockInsightData.recentTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div>
                      <p className="font-medium">{trend.metric}</p>
                      <p className="text-sm text-muted-foreground">{trend.period}</p>
                    </div>
                    <Badge variant="default" className="bg-success text-success-foreground">
                      {trend.value}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Age Groups */}
            <Card className="chart-container">
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Audience breakdown by age groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockInsightData.demographics.ageGroups.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{group.group}</span>
                      <span className="font-medium">{group.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${group.color} transition-all duration-500`}
                        style={{ width: `${group.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Gender Split */}
            <Card className="chart-container">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Audience gender breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Male</span>
                      <span className="font-medium">{mockInsightData.demographics.genderSplit.male}%</span>
                    </div>
                    <Progress value={mockInsightData.demographics.genderSplit.male} className="h-3" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Female</span>
                      <span className="font-medium">{mockInsightData.demographics.genderSplit.female}%</span>
                    </div>
                    <Progress value={mockInsightData.demographics.genderSplit.female} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="chart-container">
            <CardHeader>
              <CardTitle>Engagement Trends</CardTitle>
              <CardDescription>
                Track audience engagement over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center space-y-2">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Interactive chart coming soon</p>
                  <p className="text-sm text-muted-foreground">
                    Will show engagement trends over time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Insights