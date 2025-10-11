import { Building2, Users, Award, TrendingUp } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Building2, label: "Properties Listed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "1,200+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              About <span className="italic font-light">Estate</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We are a premier real estate agency dedicated to connecting discerning clients with exceptional properties
              that define luxury living and architectural excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Estate, we believe that finding the perfect home is more than just a transaction—it's about
                discovering a space where life's most precious moments unfold. Our team of experienced professionals is
                committed to providing personalized service and expert guidance throughout your real estate journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in the luxury real estate market, we have built a reputation for
                excellence, integrity, and unparalleled market knowledge. Whether you're buying, selling, or investing,
                we're here to make your real estate dreams a reality.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img src="/modern-luxury-real-estate-office-interior.jpg" alt="Estate office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
