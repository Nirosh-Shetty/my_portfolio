import Head from "next/head";
import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nirosh Shetty | Software Engineer"
        description="Welcome to the portfolio of Nirosh Shetty, a software engineer passionate about building useful web applications. Explore projects, skills, and experiences crafted with React, Next.js, TypeScript, and more."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Nirosh Shetty - Software Engineer",
          description:
            "Discover the work of Nirosh Shetty — a software engineer exploring clean design, functional apps, and modern web technologies. View personal and professional projects built with the MERN stack and beyond.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Nirosh Shetty - Portfolio Preview",
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
              "Nirosh Shetty, Software Engineer Portfolio, React Developer, MERN Stack, TypeScript, JavaScript Developer, Next.js, Web Development, Personal Projects, Full Stack Developer, Frontend Developer, Backend Developer, Web Applications, Software Development",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
