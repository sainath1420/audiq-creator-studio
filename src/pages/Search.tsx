import { useState } from "react"
import { Search as SearchIcon, Sparkles, Film, Music, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockEntities = [
  {
    id: 1,
    name: "Christopher Nolan",
    type: "filmmaker",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&crop=face",
    description: "Renowned director known for mind-bending narratives and complex storytelling",
    tags: ["Sci-Fi", "Thriller", "Complex Narratives", "IMAX"],
    popularity: 95
  },
  {
    id: 2,
    name: "Taylor Swift",
    type: "musician",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
    description: "Global pop superstar and prolific songwriter",
    tags: ["Pop", "Country", "Singer-Songwriter", "Albums"],
    popularity: 98
  },
  {
    id: 3,
    name: "Inception",
    type: "movie",
    image: "https://images.unsplash.com/photo-1489599833698-696d04d3b503?w=300&h=300&fit=crop",
    description: "Mind-bending sci-fi thriller about dreams within dreams",
    tags: ["Sci-Fi", "Thriller", "Leonardo DiCaprio", "Dreams"],
    popularity: 92
  }
]

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(mockEntities)
  const [selectedEntity, setSelectedEntity] = useState<typeof mockEntities[0] | null>(null)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query) {
      const filtered = mockEntities.filter(entity =>
        entity.name.toLowerCase().includes(query.toLowerCase()) ||
        entity.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
      setSearchResults(filtered)
    } else {
      setSearchResults(mockEntities)
    }
  }

  const getEntityIcon = (type: string) => {
    switch (type) {
      case "filmmaker": return Film
      case "musician": return Music
      case "movie": return Film
      default: return BookOpen
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "filmmaker": return "bg-chart-1"
      case "musician": return "bg-chart-2"
      case "movie": return "bg-chart-3"
      default: return "bg-chart-4"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gradient-primary">Search Creators & Content</h1>
        <p className="text-muted-foreground">
          Discover insights about your favorite artists, movies, shows, and more
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-card p-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search for artists, movies, shows, books..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 h-12 text-lg bg-input/50 border-border/50 focus:border-primary focus:ring-primary"
          />
        </div>
        
        {/* Popular Searches */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Christopher Nolan", "Taylor Swift", "Marvel", "Netflix Originals"].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => handleSearch(term)}
                className="interactive-hover"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((entity) => {
          const IconComponent = getEntityIcon(entity.type)
          return (
            <Card 
              key={entity.id} 
              className="glass-card cursor-pointer hover:scale-105 transition-bounce group"
              onClick={() => setSelectedEntity(entity)}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${getTypeColor(entity.type)} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {entity.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Popularity</div>
                    <div className="text-lg font-bold text-primary">{entity.popularity}%</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {entity.name}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {entity.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Tags</p>
                    <div className="flex flex-wrap gap-1">
                      {entity.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {entity.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{entity.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full group-hover:glow-primary transition-smooth"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedEntity(entity)
                    }}
                  >
                    View Insights
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* No Results */}
      {searchResults.length === 0 && searchQuery && (
        <div className="glass-card p-8 text-center">
          <SearchIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No results found</h3>
          <p className="text-muted-foreground">
            Try searching for a different artist, movie, or show
          </p>
        </div>
      )}
    </div>
  )
}

export default Search