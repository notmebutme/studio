
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { useEffect, useState } from "react";

const dailyQuotes: { quote: string; author: string }[][] = [
    [
        { quote: "AI is not just a technology; it's a new method of invention. It will be the most powerful engine for progress that humanity has ever created.", author: "Jensen Huang, NVIDIA" },
        { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" }
    ],
    [
        { quote: "Every industry will be transformed by AI. Businesses that don't adapt won't just be left behind; they'll become obsolete.", author: "Marc Benioff, Salesforce" },
        { quote: "The advance of technology is based on making it fit in so that you don't even notice it, so it's part of everyday life.", author: "Bill Gates" }
    ],
    [
        { quote: "The B2B world is about to be completely reshaped by generative AI. The ability to create personalized content at scale is the new competitive advantage.", author: "Paul Roetzer, Marketing AI Institute" },
        { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }
    ],
    [
        { quote: "AI will automate the mundane, freeing humans to focus on the strategic, the creative, and the interpersonal. It's the ultimate productivity tool.", author: "Satya Nadella, Microsoft" },
        { quote: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.", author: "Socrates" }
    ],
    [
        { quote: "Companies that embrace AI to augment their workforce will see exponential gains in efficiency and innovation.", author: "Ginni Rometty, former CEO of IBM" },
        { quote: "What is now proved was once only imagined.", author: "William Blake" }
    ],
    [
        { quote: "The role of the marketer in an AI world is not to create 10 pieces of content, but to create the one brilliant prompt that allows the AI to generate 10,000.", author: "Sam Altman, OpenAI" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
    ],
    [
        { quote: "We are moving from a mobile-first to an AI-first world. The businesses built on this principle will be the giants of tomorrow.", author: "Sundar Pichai, Google" },
        { quote: "If you want to have a good idea, have a lot of ideas.", author: "Linus Pauling" }
    ],
    [
        { quote: "Data is the new oil, and AI is the refinery. Without both, you're just sitting on an untapped asset.", author: "Peter Sondergaard, Gartner" },
        { quote: "The value of an idea lies in the using of it.", author: "Thomas Edison" }
    ],
    [
        { quote: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger Dijkstra" },
        { quote: "There's a way to do it better - find it.", author: "Thomas Edison" }
    ],
    [
        { quote: "Artificial intelligence is the new electricity.", author: "Andrew Ng" },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
    ],
    [
        { quote: "Generative AI is the first technology that can create.", author: "Reid Hoffman" },
        { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" }
    ],
    [
        { quote: "Some people call this artificial intelligence, but the reality is this technology will enhance us. So instead of artificial intelligence, I think we'll augment our intelligence.", author: "Ginni Rometty" },
        { quote: "The best ideas come as jokes. Make your thinking as funny as possible.", author: "David Ogilvy" }
    ],
    [
        { quote: "The development of full artificial intelligence could spell the end of the human race.", author: "Stephen Hawking" },
        { quote: "Imagination is everything. It is the preview of life's coming attractions.", author: "Albert Einstein" }
    ],
    [
        { quote: "I'm more frightened by the weaponization of AI than I am of AI itself.", author: "Oren Etzioni" },
        { quote: "The future is not something we enter. The future is something we create.", author: "Leonard I. Sweet" }
    ],
    [
        { quote: "Anything that could give rise to smarter-than-human intelligence—in the form of AI, brain-computer interfaces, or neuroscience-based human intelligence enhancement – wins hands down as my vote for the most important issue in the world today.", author: "Max Tegmark" },
        { quote: "The creation of a thousand forests is in one acorn.", author: "Ralph Waldo Emerson" }
    ],
    [
        { quote: "The new spring in AI is the most significant development in technology in our lifetimes.", author: "Eric Schmidt" },
        { quote: "An idea that is not dangerous is unworthy of being called an idea at all.", author: "Oscar Wilde" }
    ],
    [
        { quote: "AI is a tool. The choice about how we use it is ours.", author: "Oren Etzioni" },
        { quote: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" }
    ],
    [
        { quote: "The potential of AI is not just to make existing things better, but to create entirely new things.", author: "Demis Hassabis" },
        { quote: "The world is but a canvas to our imagination.", author: "Henry David Thoreau" }
    ],
    [
        { quote: "AI will not replace humans, but humans who use AI will replace humans who do not.", author: "Unknown" },
        { quote: "Discovery consists of seeing what everybody has seen, and thinking what nobody has thought.", author: "Albert von Szent-Gyorgyi" }
    ],
    [
        { quote: "The internet changed the way we access information; AI will change the way we create it.", author: "Ankit Bhati" },
        { quote: "To invent, you need a good imagination and a pile of junk.", author: "Thomas Edison" }
    ],
    [
        { quote: "Generative AI is a new canvas for the human imagination.", author: "Shantanu Narayen" },
        { quote: "The true sign of intelligence is not knowledge but imagination.", author: "Albert Einstein" }
    ],
    [
        { quote: "AI is the engine of the Fourth Industrial Revolution.", author: "Klaus Schwab" },
        { quote: "Every great advance in science has issued from a new audacity of imagination.", author: "John Dewey" }
    ],
    [
        { quote: "The impact of AI will be...even more profound than the invention of the microprocessor or the personal computer.", author: "Jensen Huang" },
        { quote: "The innovator's mindset is all about thinking differently and challenging the status quo.", author: "Scott D. Anthony" }
    ],
    [
        { quote: "If you're not using AI, you're going to be a dinosaur very shortly.", author: "Mark Cuban" },
        { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
    ],
    [
        { quote: "The coming era of artificial intelligence will not be the era of war, but be the era of deep compassion.", author: "Amit Ray" },
        { quote: "A mind that is stretched by a new experience can never go back to its old dimensions.", author: "Oliver Wendell Holmes" }
    ],
    [
        { quote: "AI is the technology that will define this century.", author: "Ginni Rometty" },
        { quote: "The difficulty lies not so much in developing new ideas as in escaping from old ones.", author: "John Maynard Keynes" }
    ],
    [
        { quote: "AI is the science of making machines do things that would require intelligence if done by men.", author: "Marvin Minsky" },
        { quote: "Don't be afraid of new ideas. Be afraid of old ideas.", author: "Edwin Land" }
    ],
    [
        { quote: "The first ultra-intelligent machine is the last invention that man need ever make.", author: "Nick Bostrom" },
        { quote: "Innovation is the ability to see change as an opportunity - not a threat.", author: "Steve Jobs" }
    ],
    [
        { quote: "What AI will do is dramatically amplify the power of the individual.", author: "Dario Amodei" },
        { quote: "The only way to discover the limits of the possible is to go beyond them into the impossible.", author: "Arthur C. Clarke" }
    ],
    [
        { quote: "AI is a mirror that reflects human intelligence, values, and biases. The reflection can be flattering or disturbing, but it is always revealing.", author: "Fei-Fei Li" },
        { quote: "If at first the idea is not absurd, then there is no hope for it.", author: "Albert Einstein" }
    ]
];

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

export function Quotes() {
    const [dailyQuotePair, setDailyQuotePair] = useState<{ quote: string; author: string }[] | null>(null);

    useEffect(() => {
        const dayIndex = getDayOfYear() % dailyQuotes.length;
        setDailyQuotePair(dailyQuotes[dayIndex]);
    }, []);

    if (!dailyQuotePair) {
        return (
            <section className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="container mx-auto flex max-w-4xl flex-col items-center gap-10 md:gap-12 text-center">
                    <div className="flex flex-col items-center gap-4 px-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
                            Quote of the Day
                        </h2>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
                        <Card className="flex-1 bg-card/80 border-2 border-primary/10 glow-shadow">
                            <CardContent className="p-6 h-full flex flex-col justify-between">
                                <div className="h-24 w-full bg-muted animate-pulse rounded-md" />
                                <div className="h-6 w-1/2 bg-muted animate-pulse rounded-md mt-4 self-end" />
                            </CardContent>
                        </Card>
                         <Card className="flex-1 bg-card/80 border-2 border-primary/10 glow-shadow">
                            <CardContent className="p-6 h-full flex flex-col justify-between">
                                <div className="h-24 w-full bg-muted animate-pulse rounded-md" />
                                <div className="h-6 w-1/2 bg-muted animate-pulse rounded-md mt-4 self-end" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto flex max-w-4xl flex-col items-center gap-10 md:gap-12 text-center">
                <div className="flex flex-col items-center gap-4 px-4">
                    <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
                        Quote of the Day
                    </ScrollTriggeredText>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
                    {dailyQuotePair.map((item, index) => (
                        <Card key={index} className="flex-1 bg-card/80 border-2 border-primary/10 glow-shadow">
                            <CardContent className="p-6 h-full flex flex-col justify-between">
                                <blockquote className="text-base md:text-lg italic text-glow flex-grow text-left">“{item.quote}”</blockquote>
                                <footer className="pt-4 text-right">
                                    <p className="font-semibold text-sm md:text-base text-primary/80">- {item.author}</p>
                                </footer>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
