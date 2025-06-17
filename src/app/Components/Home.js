// pages/Landing.js or components/Landing.js
import { Roboto } from 'next/font/google'
import Image from 'next/image'




const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export default function Landing() {
  return (
    <div className='home '>
       <div className="name_container">

        <Image
            src="/name.png"       // Place the image inside /public folder
            alt="Description"
            width={1020}
            height={1020}
            className="h-[500px] w-auto relative left-25 "
          />

        
        <div className="icon_container ">
          <a href='https://www.facebook.com/profile.php?id=100016918140881' target='_blank'>
          <Image
            src="/fb.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="fb"
          />
          </a>

          <Image
            src="/linkedin.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="linkedin"
          />
          <Image
            src="/mail.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="mail"
          />
          <Image
            src="/github.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="github"
          />

          


        </div>

        <p className="home_words ">
            I'm a creative individual with a keen interest in designing, passionate about creating clean and user-friendly interfaces with a strong focus on UX in the tech field. I'm always eager to learn and grow as a designer and developer.
          </p>
      </div>


   


    

      



  

    </div>


  )
}
