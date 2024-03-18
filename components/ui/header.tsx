import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from "next/image";
import logonoxiz from "@/public/images/logo-noxiz.png"
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
            <Image
               
                src={logonoxiz}
                width={100}
                height={ 100}
                alt="Noxiz-logo"
              />
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">



           


              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  HOME
                </Link>
              </li>
              <li>

              <Link
                  href="/Features"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 FEATURES
                </Link>
              </li>
              <li>

              <Link
                  href="/About"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  ABOUT
                </Link>
              </li>
              <li>


              <Link
                  href="/Contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  CONTACT
                </Link>
              </li>
             
              

            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
