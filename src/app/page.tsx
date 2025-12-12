"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TagAbout from '@/components/sections/about/TagAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactParallax from '@/components/sections/contact/ContactParallax';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function CoffeeHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="noiseDiagonalGradient"
      cardStyle="spotlight"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Coffee Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547343751-1u4ejlim.jpg"
          logoAlt="Coffee Haven logo"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Coffee Haven"
          description="Freshly brewed excellence in every cup. Discover our premium selection of artisan coffees and cozy atmosphere."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "https://example.com" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547345173-1jkbbrux.jpg"
          imageAlt="Coffee shop interior"
          showDimOverlay={true}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Featured Drinks"
          description="Discover our most popular coffee selections, crafted by our expert baristas"
          products={[
            {
              id: "1",
              name: "Premium Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547347362-6wchnpqg.jpg",
              imageAlt: "Premium espresso shot"
            },
            {
              id: "2",
              name: "Silky Cappuccino",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547348608-dehx5qmp.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",
              name: "Iced Breeze",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547350105-qk7lvw0b.jpg",
              imageAlt: "Iced coffee cold drink"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Coffee Haven was founded with a passion for delivering the finest coffee experience. We source premium beans from sustainable farms around the world, roast them in-house, and serve each cup with care and expertise. Every visit to Coffee Haven is an invitation to slow down, savor the moment, and experience coffee the way it was meant to be."
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Join hundreds of coffee lovers who have made Coffee Haven their daily ritual"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547353416-9rjaxbr2.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Freelance Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547354831-h9xktrfx.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Writer",
              company: "Publishing House",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547356149-i0mcggep.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Coffee Enthusiast",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547357354-ezjckiqf.jpg",
              imageAlt: "David Park"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Coffee Haven and our services"
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source premium beans from sustainable farms worldwide and roast them fresh in-house daily. Our expert baristas are trained to extract the perfect flavor profile for each drink."
            },
            {
              id: "2",
              title: "Do you offer vegan options?",
              content: "Yes! We offer almond, oat, soy, and coconut milk alternatives for all our espresso-based drinks. We also have dairy-free pastry options available."
            },
            {
              id: "3",
              title: "Can I order online?",
              content: "Absolutely! You can order through our website or mobile app for pickup or delivery. Just visit our ordering page to get started."
            },
            {
              id: "4",
              title: "What are your hours of operation?",
              content: "We're open Monday to Friday from 6 AM to 8 PM, Saturday and Sunday from 8 AM to 6 PM. We're closed on major holidays."
            },
            {
              id: "5",
              title: "Do you have a loyalty program?",
              content: "Yes! Every purchase earns you points toward free drinks and pastries. Sign up in-store or on our app to start earning rewards."
            },
            {
              id: "6",
              title: "Can you cater for events?",
              content: "We offer catering services for offices, meetings, and events. Contact us for custom packages and quotes tailored to your needs."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactParallax
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547359417-rp4yzbvv.jpg"
          imageAlt="Coffee Haven storefront"
          buttons={[
            { text: "Get Directions", href: "https://maps.google.com" },
            { text: "Call Us", href: "tel:+1555123456" }
          ]}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765547343751-1u4ejlim.jpg"
          logoWidth={32}
          logoHeight={32}
          copyrightText="© 2025 Coffee Haven | All rights reserved"
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Mon - Fri: 6 AM - 8 PM", href: "#" },
                { label: "Sat - Sun: 8 AM - 6 PM", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "123 Coffee Street, City", href: "#" },
                { label: "(555) 123-4567", href: "tel:+1555123456" }
              ]
            },
            {
              title: "Follow",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}