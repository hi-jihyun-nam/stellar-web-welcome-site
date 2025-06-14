import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
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
    <section className="py-32 px-6 relative bg-gradient-to-b from-purple-50/20 via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-teal-100/30 to-cyan-100/20 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 left-1/6 w-60 h-60 bg-gradient-to-br from-teal-200/30 to-green-300/40 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
      <div className="absolute bottom-1/4 right-1/5 w-44 h-44 bg-gradient-to-br from-cyan-200/40 to-teal-300/30 rounded-full blur-2xl animate-bounce [animation-duration:10s] [animation-delay:2s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-contact" width="55" height="55" patternUnits="userSpaceOnUse">
              <path d="M 55 0 L 0 0 0 55" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" className="text-gray-300/40"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Connect with our expert team for personalized consultation and guidance.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 shadow-lg max-w-2xl w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400 backdrop-blur-sm"
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
                      <FormLabel className="text-gray-900 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400 backdrop-blur-sm"
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
                      <FormLabel className="text-gray-900 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your healthcare needs and how we can assist you..."
                          className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400 min-h-[120px] backdrop-blur-sm"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white font-medium py-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
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
