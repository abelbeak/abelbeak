import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-150px)] flex-shrink-0 flex-col items-center justify-center px-4 text-center">
      <ExclamationCircleIcon className="h-20 w-20 stroke-red-500" />
      <h1 className="mt-4 text-4xl font-extrabold md:mt-6 md:text-6xl">Error 404</h1>
      <h2 className="mt-6 text-xl font-extrabold md:mt-8 md:text-3xl">존재하지 않는 페이지입니다.</h2>
      <p className="mt-3 text-sm text-gray-400 md:text-lg">URL이 잘못되었거나 이 페이지가 잘못되었을 수 있습니다.</p>
      <button className="shadow-button mt-6 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-bold leading-normal text-white md:text-base">
        홈 화면으로 돌아가기
      </button>
    </div>
  );
}
