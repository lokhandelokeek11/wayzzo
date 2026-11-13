import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-black text-emerald-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-slate-800">Page not found</h2>
      <p className="mt-2 text-slate-500">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
