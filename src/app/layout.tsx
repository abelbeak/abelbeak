import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './_views/Header';

export const metadata: Metadata = {
  title: 'AbelBeak 홈페이지',
  description: 'Abel Beak 개인 홈페이지',
  generator: 'Abel',
  applicationName: 'www.abelbeak.com',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Abel',
    'Abel Beak',
    '백범준',
    '프론트엔드',
    '백엔드',
    '풀스택',
    '개발자',
    '포트폴리오',
    '이력서',
    '자기소개',
    '블로그',
    '개발자 블로그',
    '개발자 포트폴리오',
  ],
  authors: [{ name: '백범준' }, { name: 'Abel' }, { name: 'Abel Beak' }],
  creator: 'Abel Beak',
  publisher: 'Abel Beak',
};

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={myFont.className.concat(' ', `bg-gray-50 text-gray-900`)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
