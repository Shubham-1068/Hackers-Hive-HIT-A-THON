import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Finance() {
  const [filters, setFilters] = useState({
    rating: 0,
    price: "all",
    category: "all",
  });
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  const businesses = [
    {
      name: "Acme Cafe",
      description: "Delicious homemade meals and baked goods",
      rating: 4.8,
      reviews: 342,
      price: "$$",
      category: "food",
      phone: "555-1234",
      address: "123 Main St, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Bloom Florist",
      description: "Fresh flowers and custom arrangements",
      rating: 4.6,
      reviews: 215,
      price: "$$",
      category: "retail",
      phone: "555-5678",
      address: "456 Oak Rd, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Tidy Cleaners",
      description: "Professional dry cleaning and laundry services",
      rating: 4.7,
      reviews: 178,
      price: "$",
      category: "services",
      phone: "555-9012",
      address: "789 Elm St, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Bookworm Library",
      description: "Cozy neighborhood library with a wide selection",
      rating: 4.9,
      reviews: 401,
      price: "$",
      category: "retail",
      phone: "555-3456",
      address: "321 Oak Ln, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Fitness Fusion",
      description: "Boutique fitness studio offering yoga, Pilates, and more",
      rating: 4.5,
      reviews: 290,
      price: "$$$",
      category: "services",
      phone: "555-7890",
      address: "654 Maple Ave, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Gourmet Grocers",
      description: "Specialty grocery store with organic and local produce",
      rating: 4.7,
      reviews: 325,
      price: "$$",
      category: "food",
      phone: "555-2109",
      address: "987 Pine St, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Artisan Crafts",
      description: "Handmade goods and unique gifts from local artisans",
      rating: 4.8,
      reviews: 260,
      price: "$$",
      category: "retail",
      phone: "555-6543",
      address: "159 Birch Rd, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
    {
      name: "Wellness Spa",
      description: "Relaxing spa treatments and holistic therapies",
      rating: 4.6,
      reviews: 192,
      price: "$$$",
      category: "services",
      phone: "555-8765",
      address: "753 Oak St, Anytown USA",
      image: "/placeholder.svg",
      website: "#",
    },
  ];
  const filteredBusinesses = businesses.filter((business) => {
    const { rating, price, category } = filters;
    return (
      (rating === 0 || business.rating >= rating) &&
      (price === "all" || business.price === price) &&
      (category === "all" || business.category === category)
    );
  });
  const randomBusinesses = filteredBusinesses
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
  return (
    <>
      <div className="flex h-screen w-screen absolute top-[70px]">
        <div className="bg-[#f5f5f5] p-8 md:w-[25%] h-full w-full md:max-w-xs border-r md:fixed left-0 top-[70px] md:block">
          <div className="space-y-4">
            <div className="space-y-2 cursor-default">
              <h2 className="text-3xl font-bold tracking-tighter text-[#272727]">
                Explore Businesses
              </h2>
              <p className="text-slate-500 border-b-2 border-slate-500 pb-6">
                Discover a curated selection of thriving local businesses in
                your community.
              </p>
            </div>
            <div className="relative">
              <Search size={24} className="absolute top-[8px] left-[10px]" />
              <input
                type="search"
                placeholder="Search businesses..."
                className="w-full rounded-lg bg-white pl-12 py-2 text-[#272727] focus:outline-none focus:ring-2 focus:ring-[#67da20] "
              />
            </div>
            <p className="font-semibold w-full text-xl pt-2">Filters :</p>
            <div className="space-y-6 w-full border-2 p-2 pb-3 bg-white rounded-lg">
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="rating"
                  className="block text-md font-medium text-[#272727] pb-2"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  value={filters.rating}
                  onChange={(e) =>
                    handleFilterChange("rating", parseFloat(e.target.value))
                  }
                  className="mt-1 block md:w-full w-[90%] rounded-lg bg-[#f5f5f5] px-4 py-2 text-[#272727] focus:outline-none focus:ring-2 focus:ring-[#67da20] text-sm"
                >
                  <option value="0">All</option>
                  <option value="4">4 stars and above</option>
                  <option value="4.5">4.5 stars and above</option>
                  <option value="5">5 stars</option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="price"
                  className="block text-md font-medium text-[#272727] pb-2"
                >
                  Price
                </label>
                <select
                  id="price"
                  value={filters.price}
                  onChange={(e) => handleFilterChange("price", e.target.value)}
                  className="mt-1 block md:w-full w-[90%] rounded-lg bg-[#f5f5f5] px-4 py-2 text-[#272727] focus:outline-none focus:ring-2 focus:ring-[#67da20] text-sm"
                >
                  <option value="all">All</option>
                  <option value="$">Rs 10000 - 50000</option>
                  <option value="$$">Rs 50000 - 100000</option>
                  <option value="$$$">Rs 100000+</option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-center">
                <label
                  htmlFor="category"
                  className="block text-md font-medium text-[#272727] pb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="mt-1 block md:w-full w-[90%] rounded-lg bg-[#f5f5f5] px-4 py-2 text-[#272727] focus:outline-none focus:ring-2 focus:ring-[#67da20] text-sm"
                >
                  <option value="all">All</option>
                  <option value="food">Food</option>
                  <option value="retail">Retail</option>
                  <option value="services">Services</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen md:w-[78%] flex-1 py-10 absolute right-0 top-[540px] md:top-0">
          <div className="container px-4 md:px-6 w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {randomBusinesses.map((business) => (
                <div
                  key={business.name}
                  className="group relative overflow-hidden rounded-lg w-full md:max-w-[300px] border border-[#d1d1d1]"
                >
                  <a href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">Visit {business.name}</span>
                  </a>
                  <div className="card-header">
                    <img
                      src="https://picsum.photos/300/225"
                      alt={business.name}
                      width={300}
                      height={225}
                      className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105"
                      style={{ aspectRatio: "300/225", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-content p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 fill-primary"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {business.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 fill-muted-foreground"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {business.reviews} reviews
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{business.name}</h3>
                    <p className="text-sm text-[#272727]">
                      {business.description}
                    </p>
                    <div className="flex flex-col gap-2 items-start justify-between">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 fill-muted-foreground"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {business.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 fill-muted-foreground"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="text-sm font-medium">
                          {business.address}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="w-full rounded-b-lg bg-[#67da20] px-4 py-2 text-sm font-medium text-[#f5f5f5] transition-colors hover:bg-[#5ac31b]">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-16 gap-4 pr-7">
              <button className="rounded-lg border border-[#67da20] px-4 py-2 text-sm font-medium text-[#67da20] transition-colors hover:bg-[#67da20] hover:text-[#f5f5f5]">
                Explore More Businesses
              </button>
              <button className="rounded-lg bg-[#67da20] px-4 py-2 text-sm font-medium text-[#f5f5f5] transition-colors hover:bg-[#5ac31b]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}