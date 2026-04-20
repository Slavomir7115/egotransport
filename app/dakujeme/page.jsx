import Link from "next/link";
import PrimaryButton from "../../components/UI/PrimaryButton";

export default function page() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Správa odoslaná!
        </h1>
        <p className="text-gray-600 mb-8">
          Ďakujeme za váš záujem. Vašu požiadavku sme prijali a budeme vás
          kontaktovať v čo najkratšom čase.
        </p>
        <Link href="/">
          <PrimaryButton>späť na domovskú stránku</PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
