import { useState, useRef, useEffect } from "react"
import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your Audience IQ assistant. Ask me anything about audience insights, demographics, or content recommendations. For example, you could ask: 'Who's the top collaborator for Anirudh?' or 'What are the trending genres in India?'",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes("anirudh") && lowerInput.includes("collaborator")) {
      return "Based on Qloo data, Anirudh Ravichander's top collaborators include Sivakarthikeyan, Dhanush, and Vijay Sethupathi. These collaborations often result in chart-topping soundtracks in Tamil cinema."
    }
    
    if (lowerInput.includes("trending") && lowerInput.includes("genre")) {
      return "Currently trending genres in India include: Hip-Hop fusion with traditional music, Regional pop (especially Tamil and Telugu), Devotional fusion, and Independent artists creating viral content on social platforms."
    }
    
    if (lowerInput.includes("demographics") || lowerInput.includes("audience")) {
      return "Audience insights typically show patterns in age groups (18-35 being most active), gender distribution, geographic preferences, and consumption habits. Would you like me to analyze a specific artist or content?"
    }
    
    return "That's an interesting question! While I don't have specific data for that query right now, I can help you explore audience insights, demographics, trending content, and collaboration opportunities. Try asking about specific artists, genres, or regions."
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10">
              <Bot className="w-5 h-5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold text-gradient-primary">AI Assistant</h1>
            <p className="text-sm text-muted-foreground">Ask me about audience insights and trends</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            {!message.isUser && (
              <Avatar className="w-8 h-8 border border-border/50">
                <AvatarFallback className="bg-primary/10">
                  <Bot className="w-4 h-4 text-primary" />
                </AvatarFallback>
              </Avatar>
            )}
            
            <Card className={`max-w-[70%] ${
              message.isUser 
                ? 'bg-primary text-primary-foreground' 
                : 'glass-card'
            }`}>
              <div className="p-4">
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.isUser 
                    ? 'text-primary-foreground/70' 
                    : 'text-muted-foreground'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </Card>

            {message.isUser && (
              <Avatar className="w-8 h-8 border border-border/50">
                <AvatarFallback className="bg-secondary">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <Avatar className="w-8 h-8 border border-border/50">
              <AvatarFallback className="bg-primary/10">
                <Bot className="w-4 h-4 text-primary" />
              </AvatarFallback>
            </Avatar>
            <Card className="glass-card">
              <div className="p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="flex gap-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about audience insights, trends, or recommendations..."
            className="flex-1 h-12"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="h-12 px-6 interactive-hover"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Chat