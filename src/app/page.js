import Banner from "@/component/Banner";
import FeaturedAnimal from "@/component/FeaturedAnimal";
import QurbaniBreads from "@/component/QurbaniBreads";
import QurbaniGuide from "@/component/QurbaniGuide";
import QurbaniTips from "@/component/QurbaniTips";

export const metadata = {
  title: 'Animal Home page',
  description: 'this is the animal home page',
}

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <FeaturedAnimal></FeaturedAnimal>
      <QurbaniTips></QurbaniTips>
      
      <QurbaniBreads></QurbaniBreads>
      <QurbaniGuide></QurbaniGuide>

    </div>
  );
}
