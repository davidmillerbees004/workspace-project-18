import { FileText, Shield, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { format } from "date-fns";

const DocumentLanding = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDocument = () => {
    setIsLoading(true);
    // Simulate document processing instead of external link
    setTimeout(() => {
      setIsLoading(false);
      alert("Document would be displayed here in a real implementation");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg mx-auto shadow-xl border-2">
        <CardHeader className="text-center pb-4">
          {/* Company/System Branding */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Document Center
          </h1>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg">
            Internal Document Management System
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Document Info Card */}
          <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg p-6 border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Quarterly Report Q3 2024
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Created</p>
                  <p className="text-muted-foreground">{format(new Date(), "MMM dd, yyyy")}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Security</p>
                  <p className="text-muted-foreground">Encrypted</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Type</p>
                  <p className="text-muted-foreground">PDF Report</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Size</p>
                  <p className="text-muted-foreground">2.4 MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            className="w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
            onClick={handleViewDocument}
            disabled={isLoading}
            size="lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                <span>Opening Document...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <FileText className="w-5 h-5" />
                <span>Open Document</span>
              </div>
            )}
          </Button>

          {/* System Info */}
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <Shield className="w-4 h-4 inline mr-2" />
              This document is part of our internal document management system.
              All documents are securely stored and access is logged for compliance.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentLanding;