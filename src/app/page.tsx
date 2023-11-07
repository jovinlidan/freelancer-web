import { HomeAboutUs } from "@/modules/home/about-us";
import { HomeArrowDecoration } from "@/modules/home/arrow-decoration";
import { HomeJumbotron } from "@/modules/home/jumbotron";
import { HomeOurKey } from "@/modules/home/our-key";
import { HomeService } from "@/modules/home/service";

export default function Home() {
  return (
    <main>
      <HomeJumbotron />
      <HomeService />
      <HomeOurKey />
      <HomeArrowDecoration />
      <HomeAboutUs />
    </main>
  );
}
