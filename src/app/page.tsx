import { HomeAboutUs } from "@/modules/home/about-us";
import { HomeArrowDecoration } from "@/modules/home/arrow-decoration";
import { HomeChatWithUs } from "@/modules/home/chat-with-us";
import { HomeJumbotron } from "@/modules/home/jumbotron";
import { HomeOurFounder } from "@/modules/home/our-founder";
import { HomeOurKey } from "@/modules/home/our-key";
import { HomeOurTechStack } from "@/modules/home/our-tech-stack";
import { HomeService } from "@/modules/home/service";

export default function Home() {
  return (
    <main>
      <HomeJumbotron />
      <HomeService />
      <HomeOurKey />
      <HomeArrowDecoration />
      <HomeAboutUs />
      <HomeOurFounder />
      <HomeOurTechStack />
      <HomeChatWithUs />
    </main>
  );
}
