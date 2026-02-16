import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mango font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Come Say Hello
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <iframe
              title="Juice Kitchen Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3!2d-80.2095!3d26.2795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d905d7e5e9b38f%3A0x4acf0b0a0f32c6e!2s4352%20N%20State%20Rd%207%2C%20Coral%20Springs%2C%20FL%2033067!5e0!3m2!1sen!1sus!4v1700000000000!5m2!1sen!1sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  4352 N State Rd 7<br />
                  Coral Springs, FL 33067
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                <Clock className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Every Day<br />
                  9:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+19545092024" className="text-muted-foreground hover:text-primary transition-colors">
                  (954) 509-2024
                </a>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border/50">
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                "It's refreshing to find a place with a menu so full of healthy options at a reasonable price. Everything I've tried here is delicious and the staff is very friendly."
              </p>
              <p className="mt-3 text-xs text-muted-foreground/70 font-medium">— Jose S., via Uber Eats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
