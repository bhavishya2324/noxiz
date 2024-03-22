import Image from 'next/image'

import AiImg from '@/public/images/AI-retail-planning1.jpg'
import Fbimg from '@/public/images/facebook-ads.jpeg'
import googleAds from '@/public/images/Google-Ads-1-43.jpg'
import websiteDesign from "@/public/images/website design.jpg";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}

          
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Telegram</div>
            <h1 className="h2 mb-4">Join Our Telegram Channel</h1>
           
            

            <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-purple-600 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://telegram.me/AbhisheksahusirPhysics">Telegram</a>
              </div>

          </div> */}
          

             {/* Section header */}




             <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">🌟 Transform Your Business with Noxiz and AI</h2>
            <p className="text-xl text-gray-400"> Let Noxiz and AI Propel Your Business Forward! 📈</p>
          </div>

          

          {/* Items */}
          <div className="grid gap-20">


  {/* 1nd item */}
  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={AiImg} width={540} height={305} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"> Transform Your Business with AI</div>
                  <h3 className="h3 mb-3"> Your Secret Weapon for Business Expansion AI  </h3>
                  <p className="text-xl text-gray-400 mb-4">

                  🔥 Embrace the mastery of AI and unlock a world of infinite possibilities! Imagine a future where every aspect of your business is optimized for peak performance, from marketing strategies tailored to individual preferences to operational efficiencies that streamline your workflow.  </p>
                 
                </div>
              </div>
            </div>




            {/* 2st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={googleAds} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Google Ads</div>
                  <h3 className="h3 mb-3"> Reach Your Audience 🎯, Grow Your Business </h3>
                  <p className="text-xl text-gray-400 mb-4">

                  Drive Traffic, Boost Sales, Dominate Your Market! 🔥
                  Are you ready to take your business to the next level? With Google Ads, the power to reach your audience and grow your business is at your fingertips. </p>
                 
                </div>
              </div>
            </div>

            {/* 3nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Fbimg} width={540} height={305} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"> Facebook Ads</div>
                  <h3 className="h3 mb-3">🤝 Partner with Facebook Ads </h3>
                  <p className="text-xl text-gray-400 mb-4">

🚀 Ready to propel your business to new heights? Dive into the world of Facebook Ads and watch your brand soar! With over billions of active users scrolling through their feeds daily, Facebook offers an unparalleled opportunity to reach your target audience with precision and impact.  </p>
                 
                </div>
              </div>
            </div>

             {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={websiteDesign}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Web Development
                  </div>
                  <h3 className="h3 mb-3">
                    
                  Discover the Artistry of Web Development! 🔥
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Embark on a voyage of innovation and creativity! Our web development expertise will sculpt your digital footprint and propel your success!
                  </p>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}
