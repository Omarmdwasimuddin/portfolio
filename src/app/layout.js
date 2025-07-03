import "./globals.css";
import 'aos/dist/aos.css';



export const metadata = {
  title: "Wasim | Full Stack Web Developer",
  description: "I'm Wasim, a passionate full stack web developer skilled in Next.js, Tailwind CSS, Prisma.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
