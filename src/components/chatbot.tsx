'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Bot, Send, X, Loader2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { answerBoardingDaycareQueries } from '@/ai/flows/answer-boarding-daycare-queries';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';


type Message = {
  role: 'user' | 'bot';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const chatCardRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          role: 'bot',
          content: "Hello! I'm the Ultimutt AI assistant. How can I help you with our boarding, daycare, or other services today?",
        },
      ]);
    }
  }, [isOpen]);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        chatCardRef.current &&
        !chatCardRef.current.contains(event.target as Node) &&
        fabRef.current &&
        !fabRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if(viewportRef.current) {
          viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
      }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await answerBoardingDaycareQueries({ query: input });
      const botMessage: Message = { role: 'bot', content: result.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('AI query failed:', error);
      const errorMessage: Message = {
        role: 'bot',
        content: "I'm sorry, I'm having a little trouble right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const fabPosition = isMobile ? 'bottom-20 right-4' : 'bottom-6 right-6';

  return (
    <>
      <Button
        ref={fabRef}
        onClick={toggleOpen}
        className={cn(
            'fixed z-[60] h-16 w-16 rounded-full shadow-lg transition-transform hover:-translate-y-1',
            fabPosition
        )}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-8 w-8" />}
      </Button>

      <div
        ref={chatCardRef}
        className={cn(
          'fixed z-50 w-[calc(100vw-2rem)] max-w-sm rounded-lg shadow-xl origin-bottom-right transition-all duration-300 ease-in-out',
           isMobile ? 'bottom-24 right-4 sm:bottom-[6.5rem]' : 'bottom-24 right-6',
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-90 pointer-events-none'
        )}
      >
        <Card className="h-[70vh] max-h-[600px] flex flex-col">
          <CardHeader className="flex flex-row items-center gap-3 border-b">
            <Avatar>
                <AvatarFallback className='bg-primary text-primary-foreground'><Bot /></AvatarFallback>
            </Avatar>
            <CardTitle>Ultimutt AI Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden p-4">
            <ScrollArea className="h-full" viewportRef={viewportRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-end gap-2',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'bot' && <Avatar className='h-8 w-8'><AvatarFallback className='bg-primary text-primary-foreground'><Bot className='h-5 w-5'/></AvatarFallback></Avatar>}
                    <div
                      className={cn(
                        'rounded-lg px-4 py-2 max-w-[80%]',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                     {message.role === 'user' && <Avatar className='h-8 w-8'><AvatarFallback><User className='h-5 w-5'/></AvatarFallback></Avatar>}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2 justify-start">
                     <Avatar className='h-8 w-8'><AvatarFallback className='bg-primary text-primary-foreground'><Bot className='h-5 w-5'/></AvatarFallback></Avatar>
                     <div className="bg-muted rounded-lg px-4 py-2">
                       <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                     </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className='border-t pt-4'>
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about boarding..."
                disabled={isLoading}
                className="flex-grow"
                autoComplete="off"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send />}
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
