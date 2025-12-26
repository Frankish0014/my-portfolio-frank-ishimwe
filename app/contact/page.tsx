"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, Send, ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ishimwefrank0014@gmail.com",
    label: "Send me an email",
    description: "Get in touch via email",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+250782658368",
    label: "Call me",
    description: "+250 782 658 368",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/250782658368",
    label: "Chat on WhatsApp",
    description: "Message me on WhatsApp",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Frankish0014",
    label: "View my GitHub profile",
    description: "Check out my code and projects",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ishimwe-frank-096256371/",
    label: "Connect on LinkedIn",
    description: "Professional networking",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your message! I will get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7f8c8d]/5 dark:bg-[#7f8c8d]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#34495e]/5 dark:bg-[#34495e]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3.5s", animationDuration: "10s" }} />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#34495e] via-[#5d6d7e] to-[#7f8c8d] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              I&apos;m always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
            <p className="text-base text-muted-foreground font-medium">
              Open to internships, collaborations, and impact-driven opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                  >
                    <Card className="h-full hover:border-primary/50 transition-all duration-300 cursor-pointer group border-2 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block h-full"
                      >
                        <CardHeader className="relative z-10">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="p-4 bg-primary/10 rounded-2xl w-fit mb-4 group-hover:bg-primary/20 transition-colors"
                          >
                            <Icon className="h-6 w-6 text-primary" />
                          </motion.div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{link.name}</CardTitle>
                          <CardDescription className="group-hover:text-foreground/80 transition-colors">{link.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <Button variant="ghost" className="group/btn w-full justify-start rounded-xl">
                            {link.label}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </CardContent>
                      </a>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Optional Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl mb-2">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below or reach out directly via email
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium block"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all disabled:opacity-50"
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium block"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all disabled:opacity-50"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium block"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all disabled:opacity-50"
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium block"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary resize-none transition-all disabled:opacity-50"
                      placeholder="Your message..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-4 rounded-xl border-2 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                          : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="group rounded-xl" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
