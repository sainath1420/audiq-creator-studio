import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PlaceholderPageProps {
  title: string
  description: string
  icon: LucideIcon
  features?: string[]
}

const PlaceholderPage = ({ title, description, icon: Icon, features = [] }: PlaceholderPageProps) => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient-primary">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Coming Soon Card */}
      <Card className="chart-container">
        <CardHeader className="text-center">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Coming Soon</CardTitle>
          <CardDescription className="text-base">
            This feature is currently in development
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {features.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Planned Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              Want to be notified when this feature launches?
            </p>
            <p className="text-sm text-muted-foreground">
              Connect with the Qloo API to unlock advanced analytics
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PlaceholderPage