import { Fira_Code } from 'next/font/google';

const fira = Fira_Code({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fira.style.fontFamily};
        }
      `}</style>
      {children}
    </>
  );
}
