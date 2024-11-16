import { useState } from "react";

const FeatureSection = ({ opportunities, loading, error }) => {
  const [selectedProduct, setSelectedProduct] = useState("All");

  // Get unique product names from the programmes
  const productCategories = [
    "All",
    ...new Set(
      opportunities.flatMap(
        (opportunity) =>
          opportunity.programmes?.map(
            (program) => program.short_name_display
          ) || []
      )
    ),
  ];

  // Filter opportunities based on the selected product
  const filteredOpportunities =
    selectedProduct === "All"
      ? opportunities
      : opportunities.filter((opportunity) =>
          opportunity.programmes?.some(
            (program) => program.short_name_display === selectedProduct
          )
        );

  return (
    <div className="relative  min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Explore{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            our opportunities
          </span>
        </h2>
      </div>

      {/* Product Filter Dropdown */}
      <div className="flex justify-center items-center mt-10">
        <label htmlFor="product" className="mr-4">
          Filter by Product:
        </label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2"
        >
          {productCategories.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      {/* Opportunities Grid */}
      <div className="mt-10 lg:mt-20 mx-10">
        {loading ? (
          <p>Loading opportunities...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              >
                <div className="h-40 w-full relative">
                  <img
                    src={
                      opportunity.cover_photo?.url ||
                      "https://via.placeholder.com/300"
                    }
                    alt={opportunity.title || "No title"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">
                    {opportunity.title || "No title available"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {opportunity.branch?.company?.name || "Unknown company"} -{" "}
                    {opportunity.branch?.name || "Unknown branch"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Status: {opportunity.status || "Not specified"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Applicants: {opportunity.applicants_count || 0}
                  </p>
                  <p className="text-sm text-gray-500">
                    Openings: {opportunity.openings || 0}
                  </p>
                  <a
                    href={`https://aiesec.org/opportunity/${opportunity.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition self-start"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            No opportunities found for this product.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
