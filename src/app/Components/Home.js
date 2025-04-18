// pages/Landing.js or components/Landing.js
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import GithubIcon from './Icons/github'
import FacebookIcon from './Icons/facebook'
import LinkedInIcon from './Icons/linkedin'
import GmailIcon from './Icons/gmail'



const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export default function Landing() {
  return (
    <div>
      <div className={`${roboto.variable} flex justify-center `}>
        <h1 className="font-roboto font-bold text-[#353439] text-shadow-lg/30 text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[17rem]">
          AMBHER
        </h1>

      </div>

      <div className="flex flex-row max-md:flex-col justify-center lg:h-fit p-4 gap-6 text-center mb-10 md:mb-30 lg:mb-70 ">
        {/* Icons Section */}
        <div className="flex  justify-center items-center gap-4 md:gap-10 w-full sm:w-fit">
          <a href="https://github.com/AmbherChris" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="shadow-lg/30 rounded-lg w-7 h-7 sm:size-10 md:size-15" />
          </a>
          <a href="https://www.facebook.com/share/16QJEm4nkv/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="shadow-lg/30 rounded-lg w-7 h-7 sm:size-10 md:size-15" />
          </a>
          <a href="https://www.linkedin.com/in/ambherchris" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="shadow-lg/30 rounded-lg w-7 h-7 sm:size-10 md:size-15" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ambherchris@gmail.com" target="_blank" rel="noopener noreferrer">
            <GmailIcon className="shadow-lg/30 rounded-lg w-10 h-7 sm:w-14 sm:h-10 md:w-20 md:h-15" />
          </a>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center max-w-xl px-4">
          <p className="text-[#353439] text-[15px] md:text-[1rem] lg:text-[2rem] text-center">
            I’m a software designer with a passion for creating interfaces with a focus on simplicity and clarity.
          </p>
        </div>
      </div>




    </div>


  )
}
