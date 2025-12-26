"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumePage() {
  const handleDownload = () => {
    // Create a temporary link to download the resume
    const link = document.createElement("a");
    link.href = "/Frank Ishimwe Resume 2025.pdf"; // Resume file path
    link.download = "Frank Ishimwe Resume 2025.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Download my resume in PDF format
            </p>
            <Button onClick={handleDownload} size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Resume Preview</CardTitle>
                </div>
                <CardDescription>
                  View or download the full PDF version
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[8.5/11] w-full rounded-lg overflow-hidden border">
                  <iframe
                    src="/Frank Ishimwe Resume 2025.pdf"
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
