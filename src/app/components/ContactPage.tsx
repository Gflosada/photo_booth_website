import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ScrollReveal, ScaleOnScroll } from './ScrollReveal';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const faqs = [
    {
      question: 'How far do you travel?',
      answer: 'We primarily serve the Greater Orlando area, including surrounding cities within 50 miles. For events outside this area, please contact us for custom arrangements.',
    },
    {
      question: 'Do you require a deposit?',
      answer: 'Yes, we require a 50% deposit to secure your booking. The remaining balance is due 7 days before your event date.',
    },
    {
      question: 'What happens if I need to reschedule?',
      answer: 'We understand plans change! You can reschedule your event up to 30 days before the original date without penalty. Changes within 30 days may incur a rescheduling fee.',
    },
    {
      question: 'Do you provide props and backdrops?',
      answer: 'Yes! We offer a variety of props packages and custom backdrop options. These can be added to any package during booking.',
    },
    {
      question: 'How do guests receive their photos?',
      answer: 'Guests receive instant prints at the event and can also access all digital photos via QR code or our online gallery. All photos are delivered within 48 hours of the event.',
    },
    {
      question: 'Is an attendant included?',
      answer: 'Yes, all our packages include a professional attendant who will set up, manage the booth, assist guests, and pack up at the end of your event.',
    },
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Orlando, Florida' },
    { icon: Phone, label: 'Phone', value: '(407) 555-BOOTH' },
    { icon: Mail, label: 'Email', value: 'hello@oralndoohitiboothevents.com' },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have questions? Ready to book? We're here to help make your event unforgettable.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <h2 className="text-2xl text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label className="text-white mb-2 block">Name</Label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Event Type</Label>
                  <Select value={formData.eventType} onValueChange={(value) => setFormData({...formData, eventType: value})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white mb-2 block">Event Date (Optional)</Label>
                  <Input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Message</Label>
                  <Textarea
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 rounded-xl">
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <ScrollReveal direction="right" className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white text-lg">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
              </div>
            </Card>

            {/* Map */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl overflow-hidden">
              <div className="h-64 bg-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
                <p className="text-white/60 relative z-10">Orlando, FL</p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl text-white text-center mb-12">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          </ScrollReveal>

          <ScaleOnScroll>
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="px-8 py-6 text-white hover:text-purple-400 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          </ScaleOnScroll>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="#"
        className="fixed bottom-24 left-8 z-40 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
          <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </div>
      </motion.a>
    </div>
  );
}
