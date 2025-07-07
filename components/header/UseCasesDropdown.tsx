"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Gifthero specific use cases
const useCases = [
  { id: "experience-vouchers", label: "Experience Vouchers" },
  { id: "monetary-vouchers", label: "Monetary Vouchers" },
  { id: "gift-cards", label: "Gift Cards" },
  { id: "loyalty-rewards", label: "Loyalty Rewards" },
  { id: "employee-recognition", label: "Employee Recognition" },
  { id: "customer-retention", label: "Customer Retention" },
  { id: "marketing-campaigns", label: "Marketing Campaigns" },
];

const UseCasesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const lang = params.lang || "en";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 tracking-wide transition-colors duration-200 font-medium hover:text-primary focus:outline-none whitespace-nowrap"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Use Cases
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 min-w-[220px]">
          <div className="flex flex-col space-y-1">
            {useCases.map((item) => (
              <Link
                key={item.id}
                href={`/${lang}/use-cases/${item.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCasesDropdown;
