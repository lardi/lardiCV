import Typewriter from 'typewriter-effect';
import LogoComponent from '../components/LogoComponent';
import MyWorksSection from '../components/MyWorksSection';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const [sectionHeight, setSectionHeight] = useState('auto');
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (sectionRef.current) {
        const height = `${sectionRef.current.scrollHeight + 300}px`;
        setSectionHeight(height);
      }
    };

    window.addEventListener('resize', updateSectionHeight);
    updateSectionHeight(); // Update section height initially
    return () => window.removeEventListener('resize', updateSectionHeight);
  }, []);

  return (
    <main className='py-[100px]'>
      <div className='flex items-center w-screen justify-center'>
        <div className='p-4 bg-zinc-800 w-80
          rounded-md border
          border-zinc-700
          shadow-[8px_8px_0_0_rgb(95,95,95,0.6)]
          hover:shadow-[28px_28px_0_0_rgb(95,95,95,1)]
          hover:translate-x-[-0.5rem]
          hover:translate-y-[-0.5rem]
          transition duration-150 ease-out'>
          <h3 className='text-zinc-500'>Salam 👋</h3>
          <div className='flex'>
            <span className='me-3'>I&apos;m </span>
            <Typewriter
              options={{
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Muhammad <strong>Lardi</strong>!')
                  .pauseFor(1000)
                  .deleteAll()
                typewriter.typeString('Front-End <span class="text-yellow-200">Developer</span>')
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
      <section className='justify-center w-screen px-5'>
        <div className='container mx-auto'>
          <p className='pt-9 text-green-800 text-sm'>{"\u002F\u002F"} Delving into the realms of code exploration.</p>
          <p className='text-green-800 text-sm'>{"\u002F\u002F"} Fetching data.</p>
          <h2 className='mt-5 text-xl'>Exploring My <span className='text-yellow-500'>Playground</span></h2>
          <LogoComponent />
        </div>
      </section>
      <section ref={sectionRef} style={{ minHeight: sectionHeight }} >
        <div className='container mx-auto'>
          <h2 className='text-xl pt-9 px-5'>Techfolio <span className='text-sm text-green-800'>{"\u002F\u002F"}Showcasing My Portfolio</span></h2>
        </div>
        <MyWorksSection />
      </section>
      <section className='px-5'>
        <div className='container mx-auto bottom-0'>
          <h2 className='text-xl my-9 '>Reach me <span className='text-sm text-green-800'>{"\u002F\u002F"}Let&apos;s build beauty together!</span></h2>
          <div className='flex my-2'>
            <Image src="/icons/location.png" width={20} height={20} className='mr-3' alt="pin" />
            <p className='text-zinc-400'>Riyadh, Saudi Arabia</p>
          </div>
          <Link href="tel:+966565443454" className='flex hover:underline my-2'>
            <Image src="/icons/phone.png" width={20} height={20} className='mr-3' alt="phone" />
            <p className='text-zinc-400 cursor-pointer'>+966 56 5443454</p>
          </Link>
          <Link href="mailto:muhammad@lardhi.info" className='flex hover:underline items-center my-2'>
            <Image src="/icons/mail.png" width={20} height={10} className='mr-3'  alt="mail"/>
            <p className='text-zinc-400 cursor-pointer'>Muhammad@lardhi.info</p>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-lardhi" className='flex hover:underline items-center my-2'>
            <Image src="/icons/in.png" width={18} height={10} className='mr-3'  alt="linkedin"/>
            <p className='text-zinc-400 cursor-pointer'>muhammad-lardhi</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
