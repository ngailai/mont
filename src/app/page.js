'use client';
import BestHotels from './../components/best-hotels/BestHotels';
// import Hero from '@/components/hero/Hero';
import PopularLocations from '@/components/popular-locations/PopularLocations';
// import Contact from '../app/(pages)/contact/page';
import Aboutus from '../app/(pages)/about/page';
// import hotel_image from '../../public/assets/hr_10.jpg';
import Carousel from '@/components/carouse/Carousel';
import Acordion from '@/components/acordion/Acordion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {Button} from '@/ui2/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/ui2/card';
import {Input} from '@/ui2/input';
import {ScrollArea} from '@/ui2/scroll-area';

import {
    X,
    MessageCircle,
    Send,
    Loader2,
    ArrowDownCircleIcon,
} from 'lucide-react';

import {motion, AnimatePresence} from 'framer-motion';
import {useChat} from '@ai-sdk/react';

// import LandingSections from '@/components/LandingSections';
import {use, useRef, useState} from 'react';
import {React} from 'react';
import {useEffect} from 'react';
import MainGallery from '@/components/gallery/MainGallery';

export default function Home() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showChatIcon, setShowChatIcon] = useState(false);
    const chatIconRef = useRef(null);

    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
        stop,
        reload,
        error,
    } = useChat({
        api: '/api/openai',
    });
    const scrollRef = useRef(null); // null;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowChatIcon(true);
            } else {
                setShowChatIcon(false);
                setIsChatOpen(false);
            }
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({behavior: 'smooth'});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    return (
        <>
            <Carousel />
            {/* <Hero
                image={sea}
                mainHeader='Here we go for Great adventure'
                secondaryHeader='Book your next adventure with us'
            /> */}
            <PopularLocations />
            {/* <Hero
                image={hotel_image}
                mainHeader='Get the best offer for your trip'
                secondaryHeader='Choose your desired hotel'
            /> */}
            <MainGallery />
            <Aboutus />
            <Acordion />
            <BestHotels />
            {/* <Contact /> */}
            {/* <LandingSections /> */}
            <AnimatePresence>
                {showChatIcon && (
                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 100}}
                        transition={{duration: 0.2}}
                        className='fixed bottom-4 right-0 z-50 '
                    >
                        <Button
                            className='size-50 bg-indigo-600 rounded-full p-3 shadow-lg'
                            onClick={toggleChat}
                            ref={chatIconRef}
                        >
                            {!isChatOpen ? (
                                <MessageCircle className='size=25' />
                            ) : (
                                <ArrowDownCircleIcon />
                            )}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>{' '}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        transition={{duration: 0.2}}
                        className='fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px] bg-slate-400 rounded-md '
                    >
                        <Card className='border-2'>
                            <CardHeader className='flex justify-between flex-row items-center space-y-0 pb-3'>
                                <CardTitle className='text-lg font-bold'>
                                    Chat with monjoooAI
                                </CardTitle>

                                <Button
                                    onClick={toggleChat}
                                    size='sm'
                                    variant='ghost'
                                    className='rounded-full px-2 py-0'
                                >
                                    <X className='size-8' />
                                    <span className='sr-only'>Close chat</span>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className='h-[300px]  pr-4 '>
                                    {messages?.length === 0 && (
                                        <div className='flex flex-col items-center justify-center gap-3 mt-32 w-full text-gray-500'>
                                            {' '}
                                            No messages yet.
                                        </div>
                                    )}
                                    {messages?.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`mb-4 ${
                                                message.role == 'user'
                                                    ? 'text-right'
                                                    : 'text-left'
                                            }`}
                                        >
                                            <div
                                                className={`inline-block p-4 rounded-lg ${
                                                    message.role === 'user'
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-muted'
                                                } `}
                                            >
                                                <ReactMarkdown
                                                    className={message.content}
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        code({
                                                            node,
                                                            inline,
                                                            className,
                                                            children,
                                                            ...props
                                                        }) {
                                                            return inline ? (
                                                                <code
                                                                    {...props}
                                                                    className='bg-gray-200 px-1 rounded'
                                                                >
                                                                    {children}
                                                                </code>
                                                            ) : (
                                                                <prev
                                                                    {...props}
                                                                    className='bg-gray-200 p-2 rounded'
                                                                >
                                                                    <code>
                                                                        {
                                                                            children
                                                                        }
                                                                    </code>
                                                                </prev>
                                                            );
                                                        },
                                                        ul: ({children}) => {
                                                            <ul className='list-disc pl-4 space-y-1'>
                                                                {children}
                                                            </ul>;
                                                        },
                                                        ul: ({children}) => {
                                                            <ul className='list-disc pl-4 space-y-1'>
                                                                {children}
                                                            </ul>;
                                                        },
                                                        ol: ({children}) => {
                                                            <ol className='list-decimal pl-4 space-y-1'>
                                                                {children}
                                                            </ol>;
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className='w-full items-center flex justify-center gap-3'>
                                            <Loader2 className='animate-spin h-5 w-5 text-primary' />
                                            <button
                                                className='underline'
                                                type='button'
                                                onClick={() => stop()}
                                            >
                                                abort
                                            </button>
                                        </div>
                                    )}
                                    {error && (
                                        <div className='w-full items-center flex justify-center gap-3'>
                                            <div>An error occured.</div>
                                            <Loader2 className='animate-spin h-5 w-5 text-primary' />
                                            <button
                                                className='underline'
                                                type='button'
                                                onClick={() => reload()}
                                            >
                                                Retry
                                            </button>
                                        </div>
                                    )}
                                    <div ref={scrollRef}></div>
                                    {/* <Card className='bg-slate-800 border-0'></Card> */}
                                </ScrollArea>
                            </CardContent>
                            <CardFooter>
                                <form
                                    onSubmit={handleSubmit}
                                    className='flex w-full items-center space-x-2'
                                >
                                    <Input
                                        value={input}
                                        onChange={handleInputChange}
                                        className='flex-1'
                                        placeholder='Type your message here...'
                                    />
                                    <Button
                                        type='submit'
                                        className='size-9'
                                        disabled={isLoading}
                                        size='icon'
                                    >
                                        <Send className='size-4' />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
