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
        <label className="text-[350px] font-roboto text-[#353439] font-bold text-shadow-lg/30">AMBHER</label>
      </div>

      <div className='flex justify-center  h-130'>
        <div className='flex justify-center gap-10 mr-20 w-150 '>\

          <a href="https://github.com/AmbherChris">
            <GithubIcon className="mt-3 shadow-lg/30 rounded-lg" />
          </a>
          <a href="https://www.facebook.com/share/16QJEm4nkv/">
            <FacebookIcon className="mt-3 shadow-lg/30 rounded-lg" />
          </a>
          <a href='www.linkedin.com/in/ambherchris'>
            <LinkedInIcon className=" mt-3 shadow-lg/30 rounded-lg" />
          </a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ambherchris@gmail.com'>
            <GmailIcon className=" mt-3 shadow-lg/30 rounded-lg " />
          </a>
        </div>

        <div className=' h-100 w-170'>
          <p className='text-[50px] text-[#353439]'>I’m a software designer with a passion for creating interface with a focus on simplicity and clarity.</p>
        </div>

      </div>

    </div>
  )
}
