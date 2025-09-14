import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code, Globe, Gamepad2, Shield, Rocket, Brain, Terminal, Database, Zap, Target, Linkedin, Github, Mail, Instagram, Briefcase, GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
function App() {
  const handleProjectClick = () => {
    toast({
      title: "🚧 Projects Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: 'destructive'
    });
  };
  const skills = [{
    name: 'Python',
    icon: Code,
    level: 85,
    color: 'from-amber-400 to-yellow-500'
  }, {
    name: 'C/C++',
    icon: Terminal,
    level: 80,
    color: 'from-amber-400 to-yellow-500'
  }, {
    name: 'Java',
    icon: Database,
    level: 75,
    color: 'from-amber-400 to-yellow-500'
  }, {
    name: 'HTML/CSS',
    icon: Globe,
    level: 90,
    color: 'from-amber-400 to-yellow-500'
  }, {
    name: 'JavaScript',
    icon: Brain,
    level: 55,
    color: 'from-amber-400 to-yellow-500'
  }, {
    name: 'React & Vite',
    icon: Zap,
    level: 60,
    color: 'from-amber-400 to-yellow-500'
  }];
  const domains = [{
    title: 'Full-Stack Development',
    description: 'Building resilient and scalable web applications from front to back.',
    icon: Rocket
  }, {
    title: 'Game Development',
    description: 'Exploring immersive experiences and complex systems in game development.',
    icon: Gamepad2
  }, {
    title: 'Geopolitical Tech',
    description: 'Analyzing global affairs and defense through a technological lens.',
    icon: Shield
  }, {
    title: 'Modern Technologies',
    description: 'Learning and implementing cutting-edge tools to enhance productivity.',
    icon: Target
  }];
  const socialLinks = [{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/srijan-bajpai/',
    icon: Linkedin
  }, {
    name: 'GitHub',
    url: 'https://github.com/srijan-bajpai',
    icon: Github
  }, {
    name: 'Instagram',
    url: 'https://www.instagram.com/srijan.bajpai_/',
    icon: Instagram
  }, {
    name: 'Email',
    url: 'mailto:srijan.bajpai29@gmail.com',
    icon: Mail
  }];
  const timeline = [{
    icon: GraduationCap,
    date: "Present",
    title: "The Journey Begins",
    description: "Deep in the trenches of code, forging a path toward full-stack mastery. Current focus: advanced JavaScript, React ecosystems, and backend architecture.",
    side: "left"
  }, {
    icon: Briefcase,
    date: "Future",
    title: "Professional Goals",
    description: "Seeking a role as a Full-Stack or Game Developer, ready to apply a diverse technical arsenal to build impactful and innovative technology.",
    side: "right"
  }, {
    icon: MapPin,
    date: "Location",
    title: "Ready to Connect",
    description: "Operating remotely, with a keen interest in opportunities that bridge the gap between complex software engineering and strategic global thinking.",
    side: "left"
  }];
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  return <>
      <Helmet>
        <title>Srijan Bajpai // Full-Stack Developer</title>
        <meta name="description" content="The portfolio of Srijan Bajpai, a developer passionate about technology, strategy, and code." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-gray-300 overflow-hidden" style={{
      backgroundImage: backgroundPattern
    }}>
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center z-10 max-w-4xl mx-auto">
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }} className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-1 shadow-[0_0_20px_theme(colors.amber.500)]">
                 <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/93208351-44d4-40e5-9592-71f37003ba02/c453d73f4a99c852b946732d3b1e1eb1.jpg" alt="Srijan Bajpai" className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">SRIJAN BAJPAI</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="text-xl md:text-2xl mb-8 font-light text-gray-400 tracking-wider">
              Full-Stack Developer & Tech Enthusiast
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleProjectClick} className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-3 rounded-none text-lg font-bold tracking-widest transform hover:scale-105 transition-all duration-200">
                VIEW PROJECTS
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 rounded-none text-lg font-bold tracking-widest transform hover:scale-105 transition-all duration-200">
                    CONTACT
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-amber-800 text-gray-300 rounded-none">
                  {socialLinks.map(link => <DropdownMenuItem key={link.name} asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 cursor-pointer hover:!bg-amber-900/50 hover:!text-amber-300 focus:bg-amber-900/50 focus:text-amber-300 transition-colors duration-200 py-2 px-3">
                        <link.icon className="w-4 h-4" />
                        <span className="tracking-wider">{link.name.toUpperCase()}</span>
                      </a>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </motion.div>
        </header>
        
        <main>
        {/* My Story Section */}
        <section className="py-24 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
             <motion.div initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }} viewport={{
              once: true
            }}>
              <div className="text-center mb-12">
                <BookOpen className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-amber-400">MY STORY</h2>
              </div>
              <div className="text-lg text-gray-400 leading-relaxed font-light grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl text-white mb-2 tracking-wider">ACADEMIC FOUNDATION</h3>
                  <p className="mb-4">Hailing from Bhanupratappur, Chhattisgarh, my academic journey began at Jawahar Navodaya Vidyalaya, Kanker. I graduated as the school topper.</p>
                  {/* <ul className="list-none space-y-1">
                      <li><span className="text-amber-400 font-semibold">Physics:</span> 95/100</li>
                      <li><span className="text-amber-400 font-semibold">Chemistry:</span> 92/100</li>
                      <li><span className="text-amber-400 font-semibold">Maths:</span> 98/100</li>
                  </ul> */}
                </div>
                 <div>
                  <h3 className="font-bold text-xl text-white mb-2 tracking-wider">PASSIONS & PURSUITS</h3>
                  <p>
                  I'm deeply passionate about technology and its potential to solve real-world problems. Beyond the screen, I enjoy reading a variety of books, especially self-help and biographies. I have a diverse taste in music, but my go-to genre is country.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">TECHNICAL SKILLS</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto tracking-wider">
                A curated selection of tools I work with.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {skills.map((skill, index) => <motion.div key={skill.name} initial={{
                opacity: 0,
                y: 50
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 rounded-full bg-gray-900 border-2 border-amber-900 flex items-center justify-center group-hover:bg-amber-400 transition-all duration-300 group-hover:shadow-[0_0_20px_theme(colors.amber.500)]">
                      <skill.icon className="w-10 h-10 text-amber-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</h3>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="py-24 px-4 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">AREAS OF INTEREST</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto tracking-wider">
                Where my passions and skills converge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {domains.map((domain, index) => <motion.div key={domain.title} initial={{
                opacity: 0,
                y: 50
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.15
              }} viewport={{
                once: true
              }} className="bg-gray-900/50 p-6 border border-amber-900/50 hover:border-amber-400 transition-all duration-300 group">
                    <div className="mb-4">
                      <domain.icon className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white tracking-wider">{domain.title}</h3>
                    <p className="text-gray-400 font-light">{domain.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">MY PATH</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto tracking-wider">
                        Key milestones in my ongoing journey.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-amber-900/50" aria-hidden="true"></div>
                    {timeline.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: item.side === 'left' ? -100 : 100
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: index * 0.2
              }} viewport={{
                once: true
              }} className={`mb-12 flex items-center w-full ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                            <div className="w-1/2"></div>
                            <div className="w-1/2 px-4 md:px-8">
                                <div className={`p-6 bg-gray-900/50 border border-amber-900/50 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <item.icon className="w-6 h-6 text-amber-400 hidden md:block" />
                                        <h3 className="text-2xl font-bold text-white tracking-wide">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-amber-400 mb-2 font-semibold tracking-widest">{item.date}</p>
                                    <p className="text-gray-400 font-light">{item.description}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center">
                                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                            </div>
                        </motion.div>)}
                </div>
            </div>
        </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black border-t border-amber-900/50">
          <div className="max-w-4xl mx-auto text-center">
             <p className="text-gray-600 mb-2 tracking-widest">
                Passionate about building the future, one line of code at a time.
              </p>
              <p className="text-gray-500 text-sm">
                &copy; 2025 Srijan Bajpai. All rights reserved.
              </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>;
}
export default App;