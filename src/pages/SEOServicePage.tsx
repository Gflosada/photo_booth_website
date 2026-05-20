import { Link, useLocation } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { SEO } from '@/components/seo/SEO';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { landingPages } from '@/data/seo';
import { faqs } from '@/data/faqs';
import { serviceAreas } from '@/lib/constants';

export default function SEOServicePage() {
  const { pathname } = useLocation();
  const page = landingPages[pathname as keyof typeof landingPages] || landingPages['/photo-booth-rental-orlando'];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <SEO title={page.title} description={page.description} path={pathname} />
      <ServiceSchema name={page.service} description={page.description} path={pathname} />
      <FAQSchema faqs={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center mb-20">
          <div>
            <p className="text-[#F5D76E] mb-4 uppercase tracking-[0.3em] text-sm">ORLANDO PHOTO BOOTH EVENTS</p>
            <h1 className="text-5xl md:text-6xl text-white mb-6">{page.h1}</h1>
            <p className="text-xl text-white/70 mb-8">{page.description} Our premium setups are built for beautiful guest content, easy sharing, and a polished event experience across Orlando and Central Florida.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="opbe-btn-primary px-8 py-6 rounded-full"><Link to="/booking">Book Your Booth <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-6 rounded-full"><Link to="/quote">Get a Free Quote</Link></Button>
            </div>
          </div>
          <Card className="opbe-premium-card rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl text-white mb-5">Why Orlando events choose us</h2>
            {['Fast quote response', 'Custom event packages', 'Digital sharing included', 'Premium backdrops and lighting', 'Wedding, party, and corporate-ready service'].map((item) => <div key={item} className="flex gap-3 text-white/75 mb-4"><CheckCircle2 className="w-5 h-5 text-[#F5D76E] flex-shrink-0" />{item}</div>)}
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {['Premium guest experience', 'Orlando-focused service', 'Share-ready content'].map((title) => (
            <Card key={title} className="opbe-premium-card rounded-3xl p-6">
              <h2 className="text-xl text-white mb-3">{title}</h2>
              <p className="text-white/60">Designed for events where the booth needs to look beautiful, run smoothly, and create content guests actually want to share.</p>
            </Card>
          ))}
        </div>

        <Card className="bg-[linear-gradient(135deg,rgba(212,175,55,0.18)_0%,rgba(11,11,11,0.94)_100%)] border border-[rgba(212,175,55,0.28)] border-0 rounded-3xl p-10 text-center mb-20">
          <h2 className="text-3xl text-white mb-4">Plan your {page.service.toLowerCase()} with ORLANDO PHOTO BOOTH EVENTS</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Tell us your date, venue, guest count, and event style. We will recommend a package that fits your timeline and goals.</p>
          <Button asChild className="opbe-btn-primary px-8 py-6"><Link to="/quote">Request My Quote</Link></Button>
        </Card>

        <div>
          <h2 className="text-3xl text-white text-center mb-8">Service areas near Orlando</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceAreas.map((area) => <span key={area} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/70">{area}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
