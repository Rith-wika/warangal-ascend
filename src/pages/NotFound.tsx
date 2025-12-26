import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center px-4">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
