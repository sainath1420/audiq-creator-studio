import { useState } from "react"
import { Search as SearchIcon, Sparkles, Film, Music, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockEntities = [
  {
    name: "Anirudh Ravichander",
    entity_id: "4D9536E5-C3B9-4827-87C8-8428B7A2A16C",
    subtype: "urn:entity:artist",
    properties: {
      description: "Anirudh Ravichander is an Indian music composer and singer known for his innovative soundtracks in Tamil cinema.",
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
      popularity: 87,
      tags: ["Tamil Music", "Composer", "Playback Singer", "Film Scoring"]
    }
  },
  {
    name: "Christopher Nolan",
    entity_id: "1A2B3C4D-5E6F-7G8H-9I0J-K1L2M3N4O5P6",
    subtype: "urn:entity:filmmaker",
    properties: {
      description: "Renowned director known for mind-bending narratives and complex storytelling techniques.",
      image_url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&crop=face",
      popularity: 95,
      tags: ["Sci-Fi", "Thriller", "Complex Narratives", "IMAX"]
    }
  },
  {
    name: "Inception",
    entity_id: "7Q8R9S0T-1U2V-3W4X-5Y6Z-A7B8C9D0E1F2",
    subtype: "urn:entity:movie",
    properties: {
      description: "Mind-bending sci-fi thriller about dreams within dreams and the extraction of secrets.",
      image_url: "https://images.unsplash.com/photo-1489599833698-696d04d3b503?w=300&h=300&fit=crop",
      popularity: 92,
      tags: ["Sci-Fi", "Thriller", "Leonardo DiCaprio", "Dreams", "Heist"]
    }
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
        entity.properties.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
      setSearchResults(filtered)
    } else {
      setSearchResults(mockEntities)
    }
  }

  const getEntityIcon = (subtype: string) => {
    if (subtype.includes("filmmaker")) return Film
    if (subtype.includes("artist")) return Music
    if (subtype.includes("movie")) return Film
    return BookOpen
  }

  const getTypeColor = (subtype: string) => {
    if (subtype.includes("filmmaker")) return "bg-chart-1"
    if (subtype.includes("artist")) return "bg-chart-2" 
    if (subtype.includes("movie")) return "bg-chart-3"
    return "bg-chart-4"
  }

  const getDisplayType = (subtype: string) => {
    if (subtype.includes("filmmaker")) return "Filmmaker"
    if (subtype.includes("artist")) return "Artist"
    if (subtype.includes("movie")) return "Movie"
    return "Entity"
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
            placeholder="Search for Artist, Movie, or Show (e.g., Anirudh)"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 h-12 text-lg bg-input/50 border-border/50 focus:border-primary focus:ring-primary"
          />
        </div>
        
        {/* Popular Searches */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Anirudh Ravichander", "Christopher Nolan", "Inception", "Marvel Studios"].map((term) => (
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
        {searchResults.map((entity, index) => {
          const IconComponent = getEntityIcon(entity.subtype)
          return (
            <Card 
              key={entity.entity_id || index} 
              className="glass-card cursor-pointer hover:scale-105 transition-bounce group overflow-hidden"
              onClick={() => setSelectedEntity(entity)}
            >
              {/* Entity Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={entity.properties.image_url}
                  alt={entity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-background/80">
                    {getDisplayType(entity.subtype)}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="text-xs text-muted-foreground">Popularity</div>
                    <div className="text-sm font-bold text-primary">{entity.properties.popularity}%</div>
                  </div>
                </div>
              </div>

              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${getTypeColor(entity.subtype)} flex items-center justify-center`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {entity.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {entity.properties.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {entity.properties.tags && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Tags</p>
                      <div className="flex flex-wrap gap-1">
                        {entity.properties.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {entity.properties.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{entity.properties.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
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