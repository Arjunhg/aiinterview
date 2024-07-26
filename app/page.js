import Link from "next/link"
import { IconCloudDemo } from '../ComponentHelper/TechUsed'
import GradualSpacing from '../components/magicui/gradual-spacing'
import PulsatingButton from '../components/magicui/pulsating-button'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/blob.svg)' }}>
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BotIcon className="h-6 w-6" />
          <span className="text-black ml-2 mt-0.5 font-semibold">Interview Genie</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Features</Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Pricing</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>About</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Contact</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="w-full py-12 md:py-20 lg:py-24" >
          <div className="container px-4 md:px-6 mx-auto" >
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">

                  <GradualSpacing
                    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-center lg:text-left tracking-[-0.1em] text-black dark:text-white underline"
                    text="Ace Your Next Interview with AI"
                  />

                  <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                    Prepare for your dream job with our <span className="text-[#5046e6]">AI-powered</span> interview simulator. Get personalized feedback and practice anytime, anywhere.
                  </p>

                  <div className="flex flex-col gap-2 sm:flex-row">

                    <PulsatingButton className="hover:text-black transition-colors">Start Interview</PulsatingButton>

                    <Link
                      href="/dashboard"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <IconCloudDemo />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter lg:text-5xl">
                  Prepare for Success
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl lg:text-base xl:text-xl">
                  Our AI-powered interview simulator helps you practice answering common questions, get personalized
                  feedback, and build confidence for your next big interview.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-6">
                <ul className="grid gap-6">
                  {[
                    { title: "Personalized Feedback", description: "Get detailed feedback on your performance and suggestions for improvement." },
                    { title: "Practice Anytime", description: "Practice answering common interview questions whenever you have time." },
                    { title: "Build Confidence", description: "Gain confidence and feel prepared for your next big interview." }
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Get Started Today</h2>
                <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for our AI interview simulator and start practicing for your next big opportunity.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              <PulsatingButton className="hover:text-black transition-colors">Start Interview</PulsatingButton>
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 border-t">
        <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">&copy; 2024 AI Interview. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
      
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}