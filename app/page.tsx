import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Cloud, Cpu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <ThemeToggle />

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <span className="text-sm font-medium text-purple-400">Available for opportunities</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Sakina Rupani
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">Full Stack Engineer</p>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Crafting secure, scalable, and high-performance web applications with expertise in Next.js, NestJS, and
                DevOps. Transforming ideas into digital reality.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <a href="mailto:sakiname72@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <a href="tel:+919370604900" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9370604900
                </a>
              </Button> */}
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/50">
                <a href="#" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/50">
                <a href="#" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Anime 3D character placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/anime-programmer.png"
                  alt="3D Anime Character - Sakina as a programmer"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 animate-bounce">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute top-1/2 -left-4 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 animate-bounce delay-1000">
                <Database className="w-6 h-6 text-green-500" />
              </div>
              <div className="absolute -bottom-4 left-1/4 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 animate-bounce delay-2000">
                <Cloud className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground">Building the future, one line of code at a time</p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <Cpu className="w-6 h-6 text-blue-400" />
                    </div>
                    Full Stack Engineer
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-400">
                    Tata Consultancy Services (TCS)
                  </CardDescription>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30"
                >
                  Aug 2024 – Present
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  "Developed enterprise-scale applications using Next.js (frontend) and NestJS (backend), improving load times by 25% and enhancing user experience",
                  "Designed and implemented secure CI/CD pipelines in Jenkins with Docker, reducing deployment time by 30% and eliminating manual release errors",
                  "Integrated SAST, DAST, and dependency vulnerability scans into pipelines, achieving 100% compliance with internal security standards",
                  "Deployed and maintained services on Azure Cloud, optimizing uptime to 99.9% and scaling resources dynamically based on traffic patterns",
                  "Partnered with designers, backend engineers, and QA teams to deliver 10+ major features within sprint deadlines while maintaining clean, reusable code",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-muted-foreground">Technologies I wield to create digital magic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programming",
                skills: ["Java", "Python", "JavaScript", "SQL"],
                icon: Code,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Frontend",
                skills: ["Next.js", "React.js", "HTML", "CSS", "Bootstrap"],
                icon: Code,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Backend",
                skills: ["NestJS", "Node.js", "Express.js", "Django"],
                icon: Database,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Databases",
                skills: ["MySQL", "MongoDB", "PostgreSQL"],
                icon: Database,
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Cloud & DevOps",
                skills: ["Azure", "Docker", "Jenkins", "Git", "CI/CD"],
                icon: Cloud,
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Concepts",
                skills: ["Microservices", "API Development", "LLMs", "Agile/Scrum"],
                icon: Cpu,
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div
                        className={`p-2 bg-gradient-to-r ${category.gradient}/20 rounded-lg group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent
                          className={`w-5 h-5 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-muted/50 hover:bg-muted/70 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">Showcasing innovation through code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                      Personalized AI Tutor
                    </CardTitle>
                    <div className="w-full h-48 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                      <img
                        src="/anime-ai-tutor.png"
                        alt="AI Tutor Project - 3D Anime Interface"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                >
                  <a href="#" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AI-powered learning platform built with Next.js and NestJS, integrating LangChain and OpenAI APIs for
                  personalized, multilingual content.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    NestJS
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    LangChain
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                    OpenAI
                  </Badge>
                  <Badge variant="outline" className="border-pink-500/30 text-pink-400">
                    WebSockets
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enabled real-time interactions and progress tracking with WebSockets, enhancing learner engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-green-400 transition-colors">
                      TeamTasker Microservices
                    </CardTitle>
                    <div className="w-full h-48 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                      <img
                        src="/anime-microservices.png"
                        alt="TeamTasker Project - 3D Microservices Visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                >
                  <a href="#" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Task management platform using microservices architecture with NestJS, Express.js, and Docker.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    NestJS
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                    Jenkins
                  </Badge>
                  <Badge variant="outline" className="border-pink-500/30 text-pink-400">
                    Microservices
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deployed via CI/CD pipelines in Jenkins with automated testing, vulnerability scans, and secure
                  production releases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <p className="text-xl text-muted-foreground">Building expertise through continuous learning</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center lg:text-left">Education</h3>
              <div className="space-y-4">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      SASTRA University • 2024 – Present
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Bachelor of Computer Applications (BCA)</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      VPIMSR College, Sangli • CGPA: 8.42 • 2021 – 2024
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center lg:text-left">Certifications</h3>
              <div className="space-y-4">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">Microsoft Azure AI Engineer Associate (AI-102)</CardTitle>
                    <CardDescription className="text-muted-foreground">Microsoft • March 2025</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">The Web Development Bootcamp</CardTitle>
                    <CardDescription className="text-muted-foreground">Udemy • 2023</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 Sakina Rupani. Crafted with passion using Next.js and Tailwind CSS.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/50">
                <a href="mailto:sakiname72@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/50">
                <a href="#">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/50">
                <a href="#">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
