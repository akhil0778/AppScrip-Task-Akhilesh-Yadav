const products = [
    {
      "id": 1,
      "name": "Classic Cotton Shirt",
      "description": "Soft and breathable cotton shirt perfect for casual and office wear.",
      "price": 799,
      "image": "https://images.unsplash.com/photo-1713881604560-085594ed2c3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENsYXNzaWMlMjBDb3R0b24lMjBTaGlydCUyMHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "category": "Men",
      "fabric": "Cotton"
    },
    {
      "id": 2,
      "name": "Denim Jacket",
      "description": "Stylish blue denim jacket for all seasons.",
      "price": 1499,
      "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERlbmltJTIwSmFja2V0JTIwcHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "category": "Men",
      "fabric": "Denim"
    },
    {
      "id": 3,
      "name": "Casual T-Shirt",
      "description": "Comfortable round-neck T-shirt available in multiple colors.",
      "price": 499,
      "image": "https://images.unsplash.com/photo-1641278859016-194b40d7230c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhc3VhbCUyMFQtU2hpcnQlMjBwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "category": "Men",
      "fabric": "Cotton"
    },
    {
      "id": 4,
      "name": "Summer Dress",
      "description": "Lightweight and colorful dress perfect for summer outings.",
      "price": 1199,
      "image": "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN1bW1lciUyMERyZXNzJTIwcHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "category": "Women",
      "fabric": "Linen"
    },
    {
      "id": 5,
      "name": "Leather Handbag",
      "description": "Elegant handbag made from premium leather with golden detailing.",
      "price": 2499,
      "image": "https://images.unsplash.com/photo-1657603635372-023411921d31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVhdGhlciUyMEhhbmRiYWclMjBwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "category": "Women",
      "fabric": "Leather"
    },
    {
      "id": 6,
      "name": "Running Shoes",
      "description": "Comfortable and lightweight shoes for running and gym workouts.",
      "price": 1799,
      "image": "https://images.unsplash.com/photo-1698995475439-f6fa0734e30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVubmluZyUyMFNob2VzJTIwcHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "category": "Unisex",
      "fabric": "Mesh"
    },
    {
      "id": 7,
      "name": "Wool Sweater",
      "description": "Warm wool sweater for winter evenings.",
      "price": 1599,
      "image": "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdvb2wlMjBTd2VhdGVyJTIwY2xvdGglMjBwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "category": "Men",
      "fabric": "Wool"
    },
    {
      "id": 8,
      "name": "Floral Top",
      "description": "Chic floral top perfect for casual outings.",
      "price": 899,
      "image": "https://media.istockphoto.com/id/2209750205/photo/close-up-image-of-blue-short-sleeved-summer-top-womens-clothing-hanging-on-clothing.webp?a=1&b=1&s=612x612&w=0&k=20&c=kVOJJxwWux28G0AhGsY3T5KU-7CWQeG9FT8I5J3v0g8=",
      "category": "Women",
      "fabric": "Silk"
    },
    {
      "id": 9,
      "name": "Kids Hoodie",
      "description": "Soft and cozy hoodie for kids, available in fun colors.",
      "price": 699,
      "image": "https://media.istockphoto.com/id/2188741484/photo/childrens-fleece-hoodies-hanging-on-clothes-rack-minimalist-fashion-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=Io61wwfivNZ6ryoeyj4qDsQ4zq9Y5gWQknMWk_ZCr6M=",
      "category": "Kids",
      "fabric": "Fleece"
    },
    {
      "id": 10,
      "name": "Formal Blazer",
      "description": "Tailored-fit blazer suitable for formal and business occasions.",
      "price": 2999,
      "image": "https://plus.unsplash.com/premium_photo-1661308219954-a8035fbeb546?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rm9ybWFsJTIwQmxhemVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "category": "Men",
      "fabric": "Polyester"
    }
  ];


export default products;
