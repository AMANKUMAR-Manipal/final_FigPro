import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '@/components/ui/icons';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const { toast } = useToast();
  
  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation variant="fadeInLeft">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get in touch</h2>
                <p className="mt-4 text-lg text-slate-600">Have questions or need help? Our team is here for you.</p>
                
                <div className="mt-8 space-y-6">
                  <ScrollAnimation variant="fadeInUp" delay={0.3}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <MapPinIcon />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-slate-900">Visit us</h3>
                        <p className="mt-1 text-slate-600">Come say hello at our office.</p>
                        <p className="mt-2 text-sm text-slate-600">42 Innovation Hub<br />Bangalore, Karnataka 560001<br />India</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                
                <ScrollAnimation variant="fadeInUp" delay={0.4}>
                  <div className="mt-12">
                    <h3 className="text-lg font-medium text-slate-900">Follow us</h3>
                    <div className="mt-4 flex space-x-6">
                      <a href="#" className="text-slate-400 hover:text-slate-500">
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-slate-500">
                        <span className="sr-only">Instagram</span>
                        <InstagramIcon />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-slate-500">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedInIcon />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-slate-500">
                        <span className="sr-only">YouTube</span>
                        <YouTubeIcon />
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeInRight">
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">Send us a message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General inquiry">General inquiry</SelectItem>
                              <SelectItem value="Technical support">Technical support</SelectItem>
                              <SelectItem value="Billing question">Billing question</SelectItem>
                              <SelectItem value="Feature request">Feature request</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      Send message
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
