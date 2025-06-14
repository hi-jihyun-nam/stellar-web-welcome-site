
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-teal-600/20 to-cyan-600/10 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 left-1/6 w-60 h-60 bg-gradient-to-br from-teal-400/20 to-green-500/30 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
      <div className="absolute bottom-1/4 right-1/5 w-44 h-44 bg-gradient-to-br from-cyan-400/30 to-teal-500/20 rounded-full blur-2xl animate-bounce [animation-duration:10s] [animation-delay:2s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-contact" width="55" height="55" patternUnits="userSpaceOnUse">
              <path d="M 55 0 L 0 0 0 55" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" className="text-white/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Ready to begin your healthcare journey? Connect with our expert team for personalized consultation and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-8 drop-shadow-lg">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 drop-shadow-sm">Email</h4>
                    <p className="text-gray-200">info@cpventures.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 drop-shadow-sm">Phone</h4>
                    <p className="text-gray-200">+82 2-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 drop-shadow-sm">Location</h4>
                    <p className="text-gray-200">Seoul, South Korea</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400 backdrop-blur-sm"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400 backdrop-blur-sm"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your healthcare needs and how we can assist you..."
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400 min-h-[120px] backdrop-blur-sm"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
