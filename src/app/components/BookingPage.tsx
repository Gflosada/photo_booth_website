import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Checkbox } from './ui/checkbox';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Video, Sparkles, Smartphone, ImageIcon, Award, ChevronRight, ChevronLeft, CheckCircle2, Lightbulb } from 'lucide-react';
import { Progress } from './ui/progress';

export function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedBooth, setSelectedBooth] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    location: '',
    eventType: '',
    addOns: [] as string[],
    name: '',
    email: '',
    phone: '',
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const boothOptions = [
    { id: 'mirror', icon: Camera, title: 'Classic Mirror Booth', gradient: 'from-purple-500 to-blue-500' },
    { id: '360', icon: Video, title: '360° Glam Booth', gradient: 'from-pink-500 to-orange-500' },
    { id: 'ai', icon: Sparkles, title: 'AI Filter Booth', gradient: 'from-purple-500 to-pink-500' },
    { id: 'selfie', icon: Smartphone, title: 'Selfie Pod', gradient: 'from-green-500 to-teal-500' },
    { id: 'wall', icon: ImageIcon, title: 'Event Wall Booth', gradient: 'from-orange-500 to-red-500' },
    { id: 'brand', icon: Award, title: 'Brand Activation Booth', gradient: 'from-blue-500 to-purple-500' },
  ];

  const addOns = [
    { id: 'props', label: 'Premium Props Package', price: '+$150' },
    { id: 'backdrop', label: 'Custom Backdrop Design', price: '+$200' },
    { id: 'branding', label: 'Custom Branding Overlay', price: '+$100' },
    { id: 'album', label: 'Guest Book Album', price: '+$75' },
    { id: 'attendant', label: 'Extra Attendant', price: '+$125' },
  ];

  const handleAddOnToggle = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addonId)
        ? prev.addOns.filter(id => id !== addonId)
        : [...prev.addOns, addonId]
    }));
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h2 className="text-3xl text-white mb-8 text-center">Select Your Booth Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boothOptions.map((booth) => (
                <button
                  key={booth.id}
                  onClick={() => setSelectedBooth(booth.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all ${
                    selectedBooth === booth.id
                      ? 'border-purple-500 bg-white/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${booth.gradient} flex items-center justify-center mb-4`}>
                    <booth.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-white text-left">{booth.title}</h3>
                  {selectedBooth === booth.id && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-3xl text-white mb-8 text-center">Choose Date & Time</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl mb-6">
                <Label className="text-white mb-4 block">Event Date</Label>
                <div className="bg-white/10 rounded-xl p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="text-white"
                  />
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl">
                <Label className="text-white mb-4 block">Event Time</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Start time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {i === 0 ? '12:00 AM' : i < 12 ? `${i}:00 AM` : i === 12 ? '12:00 PM' : `${i - 12}:00 PM`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="End time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {i === 0 ? '12:00 AM' : i < 12 ? `${i}:00 AM` : i === 12 ? '12:00 PM' : `${i - 12}:00 PM`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl flex gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm">
                  <strong>Tip:</strong> Sunset sessions are most popular — book early for golden hour events!
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-3xl text-white mb-8 text-center">Add Event Location</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <Label className="text-white mb-2 block">Venue Name</Label>
                    <Input
                      placeholder="e.g., The Alfond Inn"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Event Address</Label>
                    <Input
                      placeholder="Search Orlando area..."
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
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
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="graduation">Graduation</SelectItem>
                        <SelectItem value="other">Other Celebration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-white/5 border-white/10 p-4 rounded-2xl mt-6">
                <div className="h-64 bg-white/10 rounded-xl flex items-center justify-center">
                  <p className="text-white/40">Map preview of Orlando area</p>
                </div>
              </Card>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-3xl text-white mb-8 text-center">Select Add-Ons</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl">
                <div className="space-y-4">
                  {addOns.map((addon) => (
                    <div
                      key={addon.id}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        formData.addOns.includes(addon.id)
                          ? 'border-purple-500 bg-white/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => handleAddOnToggle(addon.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Checkbox
                            checked={formData.addOns.includes(addon.id)}
                            onCheckedChange={() => handleAddOnToggle(addon.id)}
                            className="border-white/30"
                          />
                          <div>
                            <p className="text-white">{addon.label}</p>
                          </div>
                        </div>
                        <span className="text-purple-400">{addon.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-3xl text-white mb-8 text-center">Contact & Payment</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl mb-6">
                <h3 className="text-xl text-white mb-6">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-white mb-2 block">Full Name</Label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Email</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Phone</Label>
                    <Input
                      type="tel"
                      placeholder="(407) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl text-white mb-6">Booking Summary</h3>
                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between text-white/70">
                    <span>Booth Type</span>
                    <span className="text-white">
                      {boothOptions.find(b => b.id === selectedBooth)?.title || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Date</span>
                    <span className="text-white">{date?.toLocaleDateString() || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Add-ons</span>
                    <span className="text-white">{formData.addOns.length} selected</span>
                  </div>
                </div>
                <div className="flex justify-between text-xl text-white">
                  <span>Estimated Total</span>
                  <span className="text-purple-400">$1,250</span>
                </div>
                <p className="text-white/50 text-sm mt-4">
                  * A 50% deposit is required to secure your booking. Final pricing will be confirmed via email.
                </p>
              </Card>

              <Button
                onClick={() => {
                  // Show success animation
                  setStep(6);
                }}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 rounded-xl text-lg"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl text-white mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-white/70 mb-8">
              Thank you for choosing Lumea Booth. We'll send a confirmation email shortly.
            </p>
            <Card className="bg-white/5 border-white/10 p-8 rounded-2xl text-left">
              <h3 className="text-xl text-white mb-4">What's Next?</h3>
              <div className="space-y-3 text-white/70">
                <p>✓ Check your email for booking confirmation</p>
                <p>✓ Our team will contact you within 24 hours</p>
                <p>✓ Deposit invoice will be sent separately</p>
                <p>✓ We'll finalize all details together</p>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Progress Bar */}
      {step < 6 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="mb-4 flex justify-between text-sm text-white/60">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {/* Step Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {step < 6 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-between">
          <Button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button
            onClick={() => setStep(step + 1)}
            disabled={step === 5}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
