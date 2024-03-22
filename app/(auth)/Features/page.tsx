import Image from 'next/image'







export const metadata = {
  title: 'Features - Noxiz',
  description: 'Page description',
}

import Link from 'next/link'

export default function books() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">🎯 Reach Your Audience, Grow Your Business </div>
            <h1 className="h3">Scale Your Business Beyond Limits 🚀  </h1>
          </div>




   {/* Items */}
   <div className="max-w-sm mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-18 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

{/* 1st item */}
<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
  <h4 className="h4 mb-2">AI Integrations</h4>
  <p className="text-lg text-gray-400 text-center">Our company specializes in seamlessly automating processes, harnessing the transformative capabilities of AI to optimize efficiency and drive growth. </p>
</div>

{/* 2nd item */}
<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
  <h4 className="h4 mb-2">Promotions</h4>
  <p className="text-lg text-gray-400 text-center">Transform your business with our targeted Google and Facebook ad campaigns. Drive traffic, boost brand visibility, and generate top-notch leads. </p>
</div>


{/* 6th item */}
<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
<svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
  <h4 className="h4 mb-2">Web Development</h4>
  <p className="text-lg text-gray-400 text-center">We specialize in crafting visually stunning websites that captivate audiences, elevating businesses to new levels of online success.</p>
</div>


</div>

        </div>
      </div>
    </section>
  )
}
