import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, FlaskConical, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const newsItems = [
  {
    id: 1,
    category: 'Research',
    title: 'Breakthrough in Quantum Computing',
    description: 'TUM researchers have developed a new algorithm that significantly speeds up quantum simulations.',
    image: PlaceHolderImages.find(p => p.id === 'news1'),
    date: 'July 26, 2024',
  },
  {
    id: 2,
    category: 'Campus',
    title: 'New Innovation Hub Opens in Garching',
    description: 'The state-of-the-art facility will foster collaboration between students, researchers, and industry partners.',
    image: PlaceHolderImages.find(p => p.id === 'news2'),
    date: 'July 24, 2024',
  },
  {
    id: 3,
    category: 'Awards',
    title: 'TUM Professor Receives Leibniz Prize',
    description: 'Prof. Dr. Anna Weber has been honored for her pioneering work in artificial intelligence.',
    image: PlaceHolderImages.find(p => p.id === 'news3'),
    date: 'July 22, 2024',
  },
];

const stats = [
    { value: '176', label: 'Degree Programs', icon: BookOpen },
    { value: '50,000+', label: 'Students', icon: Users },
    { value: '11,000+', label: 'Staff', icon: Users },
    { value: '18', label: 'Nobel Laureates', icon: FlaskConical },
];

const events = [
    { date: 'SEP 15', title: 'TUMi Welcome Week for Internationals', location: 'Online & Campus' },
    { date: 'OCT 01', title: 'Start of Winter Semester 2024/25', location: 'All Campuses' },
    { date: 'OCT 25', title: 'Long Night of Science', location: 'Garching Campus' },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] text-white">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-2xl">
              TUM: The Entrepreneurial University
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              We are a university of excellence with a clear focus on science and technology.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#">Discover TUM</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card">
            <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <stat.icon className="h-10 w-10 text-primary mb-2"/>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                            <p className="text-sm text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 sm:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">News from TUM</h2>
                <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1">
                    All News <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-card border-border overflow-hidden flex flex-col group transition-all duration-300 hover:border-primary">
                  {item.image && (
                    <div className="overflow-hidden">
                      <Image
                        src={item.image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={item.image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">{item.category}</Badge>
                        <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                    <h3 className="text-lg font-semibold text-white mt-2">{item.title}</h3>
                    <p className="mt-2 text-gray-300 text-sm flex-grow">{item.description}</p>
                    <Link href="#" className="mt-4 text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1 self-start">
                        Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events and Research Section */}
        <section className="bg-card py-16 sm:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
                {/* Events */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Upcoming Events</h2>
                    <ul className="space-y-6">
                        {events.map((event) => (
                            <li key={event.title} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 text-center">
                                    <div className="bg-background rounded-md p-2 w-20">
                                        <p className="text-xs text-primary font-bold">{event.date.split(' ')[0]}</p>
                                        <p className="text-2xl font-bold text-white">{event.date.split(' ')[1]}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{event.title}</h3>
                                    <p className="text-sm text-gray-300">{event.location}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                     <Link href="#" className="mt-8 text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1">
                        All Events <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Research */}
                <div id="research">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Research Highlights</h2>
                     <div className="space-y-4">
                        {PlaceHolderImages.filter(p => p.id.startsWith('research')).map(item => (
                            <Link href="#" key={item.id} className="flex gap-4 p-4 rounded-lg hover:bg-background group">
                                <Image src={item.imageUrl} alt={item.description} width={128} height={80} className="rounded-md object-cover" data-ai-hint={item.imageHint} />
                                <div>
                                    <h4 className="font-semibold text-white group-hover:text-primary">Excellence in {item.imageHint}</h4>
                                    <p className="text-sm text-gray-300">Discover our latest findings.</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                     <Link href="#" className="mt-8 text-sm font-semibold text-primary hover:text-primary/90 flex items-center gap-1">
                        More Research <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
