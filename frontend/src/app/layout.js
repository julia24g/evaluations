import './globals.css';
import { UserProvider } from './context/UserContext';

export const metadata = {
  title: 'Performance Evaluations',
  description: 'Web site created using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
