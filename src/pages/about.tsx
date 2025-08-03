import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Nirosh Shetty | Software Engineer"
        description="Learn more about Nirosh Shetty, a software engineer passionate about clean code and purposeful products. Explore his background, skills, and professional journey."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Nirosh Shetty - Software Engineer",
          description:
            "Explore the background and development journey of Nirosh Shetty — a software engineer focused on building impactful digital solutions using modern web technologies.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Nirosh Shetty - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Nirosh Shetty, Software Engineer Portfolio, Developer Story, React Developer, Web Developer, JavaScript, Professional Background, Skills Showcase, Experience Timeline, Career Journey",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
