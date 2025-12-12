import CardCarousel from "./CardCarousel";
import PromoCarousel from "./PromoCarousel";

export default function RightSideContent() {
  return (
    <div className="p-4 sm:p-6  h-full flex flex-col">
      {/* Promotional Card Carousel */}
      <PromoCarousel />

      {/* Card + Balance Wrapper */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            My Virtual Card
          </h2>
        </div>

        {/* Card Carousel */}
        <CardCarousel />

        {/* Balance & Top Up */}
        <div className="space-y-4 sm:space-y-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-500 text-xs sm:text-sm">Total Balance</p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                $259.75
              </p>
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              Card Top Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
