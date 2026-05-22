import Banner from "@/component/Banner";
import FeaturedAnimal from "@/component/FeaturedAnimal";
import QurbaniBreads from "@/component/QurbaniBreads";
import QurbaniGuide from "@/component/QurbaniGuide";
import QurbaniTips from "@/component/QurbaniTips";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedAnimal></FeaturedAnimal>
      <QurbaniTips></QurbaniTips>
      
      <QurbaniBreads></QurbaniBreads>
      <QurbaniGuide></QurbaniGuide>

    </div>
  );
}
