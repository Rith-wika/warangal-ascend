import { Layout } from '@/components/Layout';
import { HeroSlider } from '@/components/HeroSlider';
import { LeadershipSection } from '@/components/LeadershipSection';
import { VisionSection } from '@/components/VisionSection';
import { InitiativesSection } from '@/components/InitiativesSection';
import { StatsSection } from '@/components/StatsSection';
import { StoriesSection } from '@/components/StoriesSection';

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta Tags handled by document head */}
      <HeroSlider />
      <LeadershipSection />
      <VisionSection />
      <InitiativesSection />
      <StatsSection />
      <StoriesSection />
    </Layout>
  );
};

export default Index;
