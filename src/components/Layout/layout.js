import { Fira_Code } from 'next/font/google';
import Head from 'next/head'

const fira = Fira_Code({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lardhi iNFO</title>
      </Head>

      <style jsx global>{`
        html {
          font-family: ${fira.style.fontFamily};
        }
      `}</style>
      {children}
    </>
  );
}
