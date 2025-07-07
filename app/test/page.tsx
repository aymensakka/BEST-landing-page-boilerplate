'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function TestPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log('Test page mounted');
    console.log('Current path:', pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>
      <p className="mb-4">This is a test page to verify routing is working correctly.</p>
      
      <div className="flex flex-col gap-4 mt-8">
        <button 
          onClick={() => router.push('/en/use-cases/experience-vouchers')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Go to Experience Vouchers (EN)
        </button>
        
        <button 
          onClick={() => router.push('/fr/use-cases/experience-vouchers')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Go to Experience Vouchers (FR)
        </button>
        
        <button 
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors mt-4"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
