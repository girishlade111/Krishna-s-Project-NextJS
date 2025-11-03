import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, PlayCircle, ExternalLink, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const newsItems = [
  {
    id: 1,
    category: 'TUM in the media',
    title: 'Lifelong learning in the field of AI and data',
    description: 'The "TUM Institute for LifeLong Learning" is launching a new certificate program in "Artificial Intelligence and Data...',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&q=80',
    date: '1 day ago',
    imageHint: 'AI data visualization'
  },
  {
    id: 2,
    category: 'Research',
    title: 'New materials from node protein',
    description: 'A research team has for the first time used the node protein from a thermostable spider species to produce...',
    image: 'https://images.unsplash.com/photo-1581092921434-08d403a5e8c1?w=800&q=80',
    date: '2 days ago',
    imageHint: 'protein structure research'
  },
  {
    id: 3,
    category: 'University',
    title: 'The role of AI in the transformation of flying',
    description: 'How can artificial intelligence make the aviation of the future more sustainable and competitive? A new...',
    image: 'https://images.unsplash.com/photo-1488779929849-54c7a58a69f3?w=800&q=80',
    date: '2 days ago',
    imageHint: 'AI in aviation'
  },
    {
    id: 4,
    category: 'Studies',
    title: 'Vocational pedagogical competence from a single source',
    description: 'Starting in the winter semester 2024/25, the new master\'s degree program in "Vocational Education" will start at the TUM...',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    date: '3 days ago',
    imageHint: 'people in discussion'
  },
];

const upcomingEvents = [
    { date: "11/4-5", title: "University election days", color: "bg-blue-300/20 text-blue-300", time: "All day", details: "All locations" },
    { date: "11/8", title: "Dies academicus", color: "bg-yellow-300/20 text-yellow-300", time: "Starts at 10:00 am", details: "Audimax, Arcisstr. 21 and livestream"},
    { date: "11/20", title: "Professional Scan Lunch", color: "bg-green-300/20 text-green-300", time: "Starts at 12:30 pm", details: "Online"},
    { date: "12/4", title: "Venturecon", color: "bg-blue-300/20 text-blue-300", time: "Starts at 4:30 pm", details: "Faculty of Mechanical Engineering and online"},
]

const communityLinks = [
    { title: "For the last time: OPS", description: "Farewell interview with the Chancellor Albert Berger.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", imageHint: "man in suit" },
    { title: "Discover the campus", description: "A tour of the Garching campus.", image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80", imageHint: "modern building interior" },
    { title: "Stay connected!", description: "Benefit from our worldwide network of alumni.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", imageHint: "students collaborating" },
]

export default function TumClonePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const tumInFiguresStudentImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
  const youngResearcherImage = "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=800&q=80"
  
  return (
    <div className="bg-background font-body">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col justify-end pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
              TUM. The Entrepreneurial University
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              Innovation and excellence since 150 years
            </p>
          </div>
          <div className="absolute bottom-4 right-4 bg-background/50 p-2 rounded-full backdrop-blur-sm">
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">News from TUM</h2>
                <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1">
                    All News <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <p className="text-lg text-gray-300 mb-12">News, research results and events: everything that moves us at a glance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-card border-border overflow-hidden flex flex-col group transition-all duration-300 hover:border-primary">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={item.imageHint}
                      />
                    </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                    <h3 className="text-md font-semibold text-white mb-2">{item.title}</h3>
                    <p className="mt-1 text-gray-300 text-sm flex-grow">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-xs text-gray-400">{item.category}</p>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="mt-12 text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">Load more</Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Our upcoming event highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {upcomingEvents.map(event => (
                        <div key={event.title} className="bg-card border-border rounded-lg p-4 flex flex-col">
                            <div className={`text-lg font-bold p-3 rounded-md self-start mb-4 ${event.color}`}>{event.date}</div>
                            <h3 className="font-bold text-white mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-300 mb-1">{event.time}</p>
                            <p className="text-sm text-gray-300 flex-grow">{event.details}</p>
                            <Link href="#" className="mt-4 text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1 self-start">
                                To the event <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
                 <div className="mt-12">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">All Events</Button>
                </div>
            </div>
        </section>

        {/* What's new */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8">Discover what TUM has to offer</h2>
                 <div className="flex flex-wrap gap-2 mb-8">
                     {["Prospective Students", "Applicants", "Founders", "Employees", "Alumni", "Companies", "Scientists", "Public"].map(tag => (
                        <Button key={tag} variant="outline" className="rounded-full bg-card hover:bg-secondary text-gray-300 hover:text-white">
                            {tag}
                        </Button>
                     ))}
                 </div>
                 <div className="bg-yellow-400 text-black grid md:grid-cols-2 items-center rounded-lg overflow-hidden">
                    <div className="relative h-64 md:h-full min-h-[250px]">
                        <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" alt="Prospective Students" fill className="object-cover" data-ai-hint="graduates students" />
                        <div className="absolute inset-0 bg-yellow-400/50 mix-blend-multiply"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-8xl font-extrabold text-white tracking-tighter mix-blend-overlay">TUM</div>
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4">Prospective Students</h3>
                        <p className="mb-6">All the important information for your studies at the Technical University of Munich</p>
                        <Link href="#" className="font-bold flex items-center gap-1">
                            Learn more <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                 </div>
                 <div className="bg-primary text-white p-4 rounded-b-lg flex justify-between items-center">
                     <span>What are you looking for? Enter keyword</span>
                     <ChevronDown className="h-6 w-6" />
                 </div>
            </div>
        </section>

        {/* What drives us */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                     <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="President Hofmann in a meeting" fill className="object-cover" data-ai-hint="business meeting" />
                </div>
                <div className="bg-blue-200/20 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">What drives us: President Thomas F. Hofmann about TUM</h3>
                    <p className="text-gray-300 mb-6">"Our aspiration is to create lasting value for society through excellence in research and teaching, through active promotion of up-and-coming talent and a strong entrepreneurial spirit."</p>
                    <Button>Read more</Button>
                </div>
            </div>
        </section>

        {/* TUM in figures */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">TUM in figures</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 relative bg-primary text-white p-8 rounded-lg flex flex-col justify-between overflow-hidden">
                        <Image src={tumInFiguresStudentImage} alt="Students" fill className="object-cover opacity-10" data-ai-hint="university students" />
                         <div className="relative">
                            <h3 className="text-8xl font-extrabold">52,931</h3>
                            <p className="text-2xl mt-2">Students</p>
                         </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-yellow-400 text-black p-6 rounded-lg">
                            <p className="text-5xl font-bold">254</p>
                            <p>Alliances for startups</p>
                        </div>
                        <div className="bg-purple-400 text-black p-6 rounded-lg">
                             <p className="text-5xl font-bold">19</p>
                            <p>Nobel Prizes</p>
                        </div>
                    </div>
                </div>
                 <div className="mt-8">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">More facts and figures</Button>
                </div>
            </div>
        </section>

        {/* Our research goals */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Our research goals</h2>
                 <div className="relative p-8 md:p-16 rounded-lg text-center bg-card" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%232d3748\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")'}}>
                     <div className="grid grid-cols-2 gap-8 mb-8 text-white">
                        <p>Promoting digital transformation in a human-centered way</p>
                        <p>Shaping the bioeconomy and green technologies</p>
                        <p>Shaping the mobility transition and integrated transport systems</p>
                        <p>Understanding the fundamental principles of life</p>
                     </div>
                     <PlayCircle className="h-20 w-20 text-primary mx-auto my-8 cursor-pointer"/>
                     <div className="grid grid-cols-2 gap-8 mt-8 text-white">
                        <p>Developing sustainable and smart infrastructures</p>
                        <p>Advancing healthcare and medicine through digital technologies</p>
                     </div>
                 </div>
            </div>
        </section>

        {/* Young researcher */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-2 bg-orange-500 text-white p-8 rounded-lg">
                        <p className="font-bold mb-4">"The level of support for a young researcher at TUM is unprecedented."</p>
                        <p className="text-sm mb-6">Dr. Goran Kovacs, research group leader at the TUM Institute for Advanced Study</p>
                        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500">Read the story now</Button>
                    </div>
                    <div className="lg:col-span-3 relative aspect-video rounded-lg overflow-hidden">
                        <Image src={youngResearcherImage} alt="Dr. Goran Kovacs" fill className="object-cover" data-ai-hint="woman professional portrait" />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Community Section */}
        <section id="community" className="py-16 sm:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your lifelong travel companion</h2>
                <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1">
                    Discover <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <p className="text-lg text-gray-300 mb-12">Shaping the future together: Get involved as a committed member of our TUM community.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityLinks.map((item) => (
                <Card key={item.title} className="bg-card border-border overflow-hidden flex flex-col group transition-all duration-300 hover:border-primary">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={item.imageHint}
                      />
                    </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-white mt-2 flex-grow">{item.title}</h3>
                    <p className="mt-2 text-gray-300 text-sm ">{item.description}</p>
                    <Link href="#" className="mt-4 text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1 self-start">
                        Discover <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Hiring Section */}
        <section className="pb-16 sm:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-purple-200/20 p-12 rounded-lg text-center">
                    <p className="text-xl text-white mb-6">TUM is looking for the brightest minds - join us in shaping the future!</p>
                    <Button>See job ads</Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
