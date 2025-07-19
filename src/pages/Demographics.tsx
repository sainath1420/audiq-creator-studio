import { Users, TrendingUp, Globe, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const Demographics = () => {
  const demographicData = {
    ageGroups: [
      { group: "Gen Z (18-24)", percentage: 28, growth: "+15%" },
      { group: "Millennials (25-34)", percentage: 35, growth: "+8%" },
      { group: "Gen X (35-44)", percentage: 22, growth: "+5%" },
      { group: "Boomers (45+)", percentage: 15, growth: "+2%" }
    ],
    locations: [
      { country: "United States", percentage: 35, audience: "2.1M" },
      { country: "United Kingdom", percentage: 18, audience: "1.1M" },
      { country: "Canada", percentage: 12, audience: "720K" },
      { country: "Australia", percentage: 8, audience: "480K" },
      { country: "Germany", percentage: 7, audience: "420K" }
    ],
    interests: [
      { category: "Technology", percentage: 85, engagement: "High" },
      { category: "Entertainment", percentage: 78, engagement: "Very High" },
      { category: "Science", percentage: 65, engagement: "Medium" },
      { category: "Art & Design", percentage: 58, engagement: "High" }
    ]
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient-primary">Demographic Analysis</h1>
        <p className="text-muted-foreground">
          Understand your audience composition and characteristics
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-5 h-5 text-chart-1" />
              <Badge variant="outline" className="text-xs">+12%</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Audience</p>
              <p className="text-2xl font-bold">6.2M</p>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <Globe className="w-5 h-5 text-chart-2" />
              <Badge variant="outline" className="text-xs">+8%</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Global Reach</p>
              <p className="text-2xl font-bold">45</p>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-5 h-5 text-chart-3" />
              <Badge variant="outline" className="text-xs">+18%</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Growth Rate</p>
              <p className="text-2xl font-bold">15.2%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <UserCheck className="w-5 h-5 text-chart-4" />
              <Badge variant="outline" className="text-xs">+5%</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Engagement</p>
              <p className="text-2xl font-bold">87%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Age Demographics */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle>Age Distribution</CardTitle>
          <CardDescription>
            Audience breakdown by generation with growth trends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {demographicData.ageGroups.map((group, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{group.group}</span>
                <div className="flex items-center gap-3">
                  <Badge variant="default" className="bg-success text-success-foreground">
                    {group.growth}
                  </Badge>
                  <span className="text-lg font-bold">{group.percentage}%</span>
                </div>
              </div>
              <Progress value={group.percentage} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>
            Top audience locations worldwide
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {demographicData.locations.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">{location.country}</p>
                  <p className="text-sm text-muted-foreground">{location.audience} users</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{location.percentage}%</p>
                <Progress value={location.percentage} className="w-24 h-2 mt-1" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Interests & Categories */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle>Audience Interests</CardTitle>
          <CardDescription>
            Top interest categories and engagement levels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {demographicData.interests.map((interest, index) => {
            const getEngagementColor = (level: string) => {
              switch (level) {
                case "Very High": return "bg-chart-1"
                case "High": return "bg-chart-2"
                case "Medium": return "bg-chart-3"
                default: return "bg-chart-4"
              }
            }

            return (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{interest.category}</span>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="secondary" 
                      className={`${getEngagementColor(interest.engagement)} text-white`}
                    >
                      {interest.engagement}
                    </Badge>
                    <span className="font-bold">{interest.percentage}%</span>
                  </div>
                </div>
                <Progress value={interest.percentage} className="h-2" />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}

export default Demographics