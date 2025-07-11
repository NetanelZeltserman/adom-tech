import { useLocation } from "react-router-dom";
import Button from "@/components/Button";

export default function CallToAction() {
  const location = useLocation();
  const isOnAboutPage = location.pathname === "/about";

  return <section className="py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Ready to Transform Your Ideas into Reality?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Button variant="primary" to="/contact">Get in Touch</Button>
        {!isOnAboutPage && (
          <Button variant="secondary" to="/about">Learn More</Button>
        )}
      </div>
    </div>
  </section>
}
