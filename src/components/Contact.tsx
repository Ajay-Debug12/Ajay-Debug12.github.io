import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
        read: false
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Keep success state for 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Let's Connect</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2">
          Have a project in mind, a dataset to explore, or simply want to chat about AI? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 flex flex-col gap-4 md:gap-6"
        >
          <div className="glass p-5 md:p-6 rounded-2xl border border-border flex items-start gap-4 group hover:border-primary/30 hover:shadow-md transition-all">
            <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors border border-border group-hover:border-primary/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-1 text-sm md:text-base">Email</h4>
              <p className="text-muted-foreground text-xs md:text-sm text-wrap break-all">ajayaj004@gmail.com</p>
            </div>
          </div>

          <div className="glass p-5 md:p-6 rounded-2xl border border-border flex items-start gap-4 group hover:border-emerald-500/30 hover:shadow-md transition-all">
            <div className="p-3 bg-emerald-500/5 rounded-xl text-emerald-600 group-hover:bg-emerald-500/10 transition-colors border border-border group-hover:border-emerald-500/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-1 text-sm md:text-base">Phone</h4>
              <p className="text-muted-foreground text-xs md:text-sm">+91-7094179335</p>
            </div>
          </div>

          <div className="glass p-5 md:p-6 rounded-2xl border border-border flex items-start gap-4 group hover:border-secondary/30 hover:shadow-md transition-all">
            <div className="p-3 bg-secondary/5 rounded-xl text-secondary group-hover:bg-secondary/10 transition-colors border border-border group-hover:border-secondary/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-1 text-sm md:text-base">Location</h4>
              <p className="text-muted-foreground text-xs md:text-sm">Nagercoil, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 glass p-6 md:p-8 rounded-2xl border border-border relative overflow-hidden"
        >

          <div className="space-y-5 md:space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-muted-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all shadow-sm resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm active:scale-[0.98] text-sm md:text-base disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                "Message Sent! ✨"
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
