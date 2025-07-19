import { Sparkles, Target, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Audience Insights",
      description: "Understand your audience demographics, preferences, and engagement patterns"
    },
    {
      icon: TrendingUp,
      title: "Trending Analysis",
      description: "Track what's popular and emerging in your content categories"
    },
    {
      icon: Users,
      title: "Creator Discovery",
      description: "Find collaboration opportunities and similar creators in your space"
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "AI-powered suggestions for content strategy and audience growth"
    }
  ]

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Powered by Qloo API
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary">
            Audience IQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A creator-first tool powered by Qloo API. It helps artists, filmmakers, and writers 
            explore audience trends, demographics, tags, locations, and discover new content 
            opportunities through recommendations and cultural data.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="glass-card group hover:scale-105 transition-bounce">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Getting Started */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient-primary">
            Get Started
          </CardTitle>
          <CardDescription className="text-lg">
            Begin exploring your audience insights in three simple steps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Search</h3>
                <p className="text-sm text-muted-foreground">Find artists, movies, or shows using our search feature</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold">Analyze</h3>
                <p className="text-sm text-muted-foreground">Explore demographics, trends, and audience insights</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold">Discover</h3>
                <p className="text-sm text-muted-foreground">Get recommendations and find new opportunities</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About