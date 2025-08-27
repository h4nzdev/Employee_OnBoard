// MainLayout.tsx
import { useState, type ReactNode } from "react";

import Sidebar from "../components/HRComponents/Sidebar";
import Header from "../components/HRComponents/Header";

/**
 * Props for the `MainLayout` component.
 */
interface MainLayoutProps {
  children: ReactNode;
}

/**
 * App shell providing the persistent sidebar and page header around page content.
 */
export default function MainLayout({ children }: MainLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen max-h-auto bg-slate-900 text-slate-200">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Main content */}
        <div
          className={`${
            isOpen ? "md:ml-64" : ""
          } transition-all duration-300 flex-1 flex flex-col min-h-screen bg-slate-900`}
        >
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <main className="p-8 bg-slate-900">{children}</main>
        </div>
      </div>
    </div>
  );
}
