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

        <h1 className=" name1  font-onest">
          AMB&nbsp; ER
        </h1>

        <h1 className="name2 font-onest ">
          H
        </h1>
        <h1 className="name3 ">
          C&nbsp; RIS
        </h1>
        <div className="icon_container ">
          <Image
            src="/fb.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="fb"
          />

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
