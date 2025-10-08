"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Page() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowMobileNav(scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const downloadResume = () => {
    // Create a dummy PDF download - replace with actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your actual resume file to public folder
    link.download = "Adin_Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-background">
      {showMobileNav && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={scrollToTop} className="font-bold text-lg hover:text-foreground/80 transition-colors">
              Adin
            </button>
            <Button variant="outline" size="sm" onClick={downloadResume} className="bg-transparent">
              Resume
            </Button>
          </div>
        </div>
      )}

{/* Social Buttons */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Home</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#blogs" className="transition-colors hover:text-foreground/80">
                Blogs
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto bg-transparent" onClick={downloadResume}>
            Resume
          </Button>
        </div>
      </header>

{/* Home Section */}
      <main>
        <section id="hero" className="py-6 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center">
              <div className="space-y-1 md:space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                  👋Hi, Im Adin
                </h1>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                  A Full Stack Data Scientist
                </h2>

                <p className="mx-auto max-w-[700px] text-sm md:text-base lg:text-xl text-gray-500 dark:text-gray-400 mt-2 md:mt-4">
I love building end-to-end data solutions — from web scraping, data transformation, dashboarding to model development and deployment - helping businesses make smarter, data-driven decisions.</p>

              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                  <Link href="https://github.com/adin11?tab=repositories" target="_blank">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/adinraja78/" target="_blank">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:adinraja78@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="https://medium.com/@adinraja78" target="_blank">
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Medium</span>
                    </Button>
                  </Link>
                </div>
                <div className="flex space-x-4 text-xs text-muted-foreground">
                  <span className="w-10 text-center">GitHub</span>
                  <span className="w-10 text-center">LinkedIn</span>
                  <span className="w-10 text-center">Email</span>
                  <span className="w-10 text-center">Medium</span>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* About Me Section */}
        <section id="about" className="py-6 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"></div>
                <div className="relative bg-card border rounded-lg px-6 py-3 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    About Me
                  </h2>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="space-y-4 md:space-y-6">

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong>👋 I’m Adin — A Data scientist/ Analyst / Machine learning Enthusiast who loves solving complex problems with data. </strong>
                    </p>

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong>🎓Education: I hold a Bachelor’s degree in Information Technology from Mumbai University. </strong>
                    </p>

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong> 💡Skills & Learning: I’ve mastered the complete data science toolkit through self-learning, online courses, and real-world projects.</strong>
                    </p>

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong> 🕸️ Data Collection & Engineering: I love data collection through Web Scraping (including api web scraping) and organizing the scraped data in databases.</strong> 
                    </p>

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong> 📜Certifications & Achievements: I’m also a Microsoft Certified Power BI Data Analyst (PL-300) and have successfully cleared the SQL-50 Challenge on LeetCode.</strong> 
                    </p>

                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <strong> 🚀 Currently, I’m learning and working on projects involving Generative AI, LLMs, MLOps and NLP.</strong> 
                    </p>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

{/* Projects Section */}
        <section id="projects" className="py-6 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg blur-sm"></div>
                <div className="relative bg-card border rounded-lg px-6 py-3 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    Projects
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <ProjectCard
                title="🚗DentAware - AI Powered Car Damage Detector"
                description="DentAware is an AI Powered Car Damage Detector that uses deep learning (ResNet50) to automatically detect and classify vehicle damage (crushing, breakage or none) from images. This Project automates the inspection process of insurance, rental and repair industries, shwocasing how AI can help make car inspection, faster and more reliable. "
                image="/car.png"
                githubLink="https://github.com/adin11/DentAware--car-damage-detector"
                blogLink="https://medium.com/@adinraja78/dentaware-ai-powered-car-damage-detection-system-87adfd9ff01c"
                tags={["Deep Learning","CNN", "Transfer Learning (Resnt50)" ,"PyTorch"]}
              />
              <ProjectCard
                title="🏡 Mumbai Property Price Estimator"
                description="This project MumbaiPriceteller is a Full-Stack machine learning solution for real-time property price estimation in Mumbai. It combines dynamic data scraping from MagicBricks API, with ETL workflows and advanced predictive models to deliver accurate price estimations. Built with Flask and deployed on Render, this app makes it easy for users to check property valuations."
                image="/bombay.png"
                githubLink="https://github.com/adin11/Mumbai-Property-Price-Estimator"
                blogLink="https://medium.com/@adinraja78/mumbai-property-price-estimator-b92a7dc8865d"
                tags={["Api Web Scraping","Pandas", "XG-Boost", "Regression","Flask","Render"]}
              />
              <ProjectCard
                title="💳RiskRadar - Credit Risk Modelling"
                description="RiskRadar is a production-ready Credit Risk Scoring System built for financial institutions mimicking a CIBIL-like credit scorecard. It classifies loan applicants into different risk bands (low, medium, high) using financial and behavioural indicators. Designed to support smarter, faster lending decisions while reducing default risk, this real-time system is fair, scalable, and data-driven. This app makes the loan approval process more efficient and secure."
                image="/credit.png"
                githubLink="https://github.com/adin11/RiskRadar--Credit-Risk-Modelling"
                blogLink="https://medium.com/@adinraja78/riskradar-credit-risk-modelling-647a0e9f3143"
                tags={["Pandas","Scikit-Learn", "Classification", "Streamlit","Render"]}
              />
              <ProjectCard
                title="🎬FlickerFlix - Movie Recommendation Engine"
                description="This app FlickerFlix is a content based movie recommendation engine that suggests similar movies to users based on their cinema taste. As most existing systems rely on outdated datasets, I freshly scraped 2 lakh+ movie metadata from the TMDB API, pre-processed the data using NLTK, and built a TF-IDF + cosine similarity model to generate more accurate and up-to-date recommendations. "
                image="/movie.png"
                githubLink="https://github.com/adin11/FlickerFlix--Movie-Recommendation-Engine"
                blogLink="https://medium.com/@adinraja78/flicker-flix-personalized-movie-recommendation-system-1c41e3f42e00"
                tags={["TMDB Api Scraping","Python", "NLTK", "TF-IDF", "Cosine Similarity"]}
              />
            </div>
          </div>
        </section>

{/* Tech Stack Section */}
        <section className="py-6 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg blur-sm"></div>
                <div className="relative bg-card border rounded-lg px-6 py-3 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    Tech Stack
                  </h2>
                </div>
              </div>
            </div>
            <TechStack />
          </div>
        </section>

{/* Blogs Section */}
        <section id="blogs" className="py-6 md:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-sm"></div>
                <div className="relative bg-card border rounded-lg px-6 py-3 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    Blogs
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid gap-2 md:gap-3 grid-cols-1 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="mx-auto w-[88%] md:w-[82%] lg:w-[78%]">
                  <div className="relative aspect-[21/9] rounded-md overflow-hidden">
                    <Image
                      src="/r2.png"
                      alt="Feature Engineering Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-2 md:p-3">
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    Why R² Isn’t Enough: Evaluating Regression Models with Error Margins
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Your regression model has an R² of 0.95 — sounds amazing, right? But what if that ‘perfect’ model is still predicting house prices ₹10 lakhs off? That’s where error margins matter more than R².
                  </p>
                  <Link href="https://medium.com/@adinraja78/why-r%C2%B2-isnt-enough-evaluating-regression-models-with-error-margins-876aada1d6c7" target="_blank">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Read on Medium
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="mx-auto w-[88%] md:w-[82%] lg:w-[78%]">
                  <div className="relative aspect-[21/9] rounded-md overflow-hidden">
                    <Image
                      src="/p.png"
                      alt="Statistical Significance Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-2 md:p-3">
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    Precision vs Recall: Finding the Perfect Balance 
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                   Imagine you’re running a bank. Do you care more about rejecting a loan of a reliable customer or lending money to a risky borrower?
                  </p>
                  <Link href="https://medium.com/@adinraja78/precision-vs-recall-in-business-finding-the-perfect-balance-fe0536b30d33" target="_blank">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Read on Medium
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="mx-auto w-[88%] md:w-[82%] lg:w-[78%]">
                  <div className="relative aspect-[21/9] rounded-md overflow-hidden">
                    <Image
                      src="/conf.png"
                      alt="Data Pipelines Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-2 md:p-3">
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    Simplifying the Confusion Matrix
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Explained how crucial it is to understand the confusion matrix for proper evaluation of a classification model.
                  </p>
                  <Link href="https://medium.com/@adinraja78/simplifying-the-confusion-matrix-5c1d6a89d4a1" target="_blank">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Read on Medium
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="mx-auto w-[88%] md:w-[82%] lg:w-[78%]">
                  <div className="relative aspect-[21/9] rounded-md overflow-hidden">
                    <Image
                      src="/bias.png"
                      alt="Model Interpretation Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-2 md:p-3">
                  <h3 className="font-semibold text-sm md:text-base mb-1">Bias-Variance Trade-off In Machine Learning</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Why Models which perform good on paper often fail in production, The answer lies in Bias-Variance Trade-off.
                  </p>
                  <Link href="https://medium.com/@adinraja78/bias-variance-trade-off-in-ml-935f22ac8597" target="_blank">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Read on Medium
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

{/* Footer Section */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <div className="text-center mb-6">
            <p className="text-base md:text-lg font-medium mb-4">Feel free to reach out</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Link
                href="mailto:adinraja78@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/adinraja78/"
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href=" https://github.com/adin11?tab=repositories"
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://x.com/AdinRaja11"
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Link>
              <Link
                href="https://medium.com/@adinraja78"
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Medium
              </Link>
            </div>
          </div>
          <div className="text-center border-t pt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 Adin - Data Scientist & Analyst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
