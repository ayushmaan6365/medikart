/**
 * MEDIKART - Central State Store (Browser localStorage Persistence)
 * Handles Products CRUD, Cart, Wishlist, Orders, Coupons, RFQs, Reviews, Auth, i18n
 */

const STORAGE_KEYS = {
  PRODUCTS: "medikart_products_v1",
  CATEGORIES: "medikart_categories_v1",
  BRANDS: "medikart_brands_v1",
  CART: "medikart_cart_v1",
  WISHLIST: "medikart_wishlist_v1",
  ORDERS: "medikart_orders_v1",
  RFQS: "medikart_rfqs_v1",
  REVIEWS: "medikart_reviews_v1",
  COUPONS: "medikart_coupons_v1",
  BANNERS: "medikart_banners_v1",
  USER: "medikart_user_v1",
  RECENT_SEARCHES: "medikart_recents_v1",
  LANGUAGE: "medikart_lang_v1"
};

// Initialize Storage with Defaults if Empty
function initStore() {
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(DEFAULT_CATEGORIES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.BRANDS)) {
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(DEFAULT_BRANDS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.COUPONS)) {
    localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(DEFAULT_COUPONS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.BANNERS)) {
    localStorage.setItem(STORAGE_KEYS.BANNERS, JSON.stringify(DEFAULT_BANNERS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CART)) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.WISHLIST)) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(["prod-101", "prod-201"]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.RECENT_SEARCHES)) {
    localStorage.setItem(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify([
      "ICU Monitor", "ECG Machine", "Hospital Bed", "Ultrasound", "N95 Masks"
    ]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.LANGUAGE)) {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, "en");
  }
  if (!localStorage.getItem(STORAGE_KEYS.USER)) {
    const defaultUser = {
      name: "Dr. Rajesh K. Nair",
      email: "dr.rajesh@medicityhospital.com",
      phone: "+91 98450 12345",
      hospital: "Medicity Multispecialty Hospital & Research Institute",
      gstin: "29AABCM1234D1Z2",
      address: "Survey No. 42, Outer Ring Road, Bellandur",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560103",
      isLoggedIn: true
    };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(defaultUser));
  }
  if (!localStorage.getItem(STORAGE_KEYS.RFQS)) {
    const defaultRFQs = [
      {
        id: "RFQ-8021",
        date: "2026-10-04",
        hospital: "Metro Heart & Neuro Institute",
        contactPerson: "Dr. S. Chatterjee",
        email: "purchase@metroheart.org",
        phone: "+91 98301 44556",
        itemsRequired: "12 units Multi-Parameter ICU Patient Monitors (MK-CC-101), 6 units Volumetric Infusion Pumps",
        status: "Quoted",
        estimatedValue: 680000,
        notes: "Need delivery within 14 days with onsite bio-medical technician calibration."
      },
      {
        id: "RFQ-8022",
        date: "2026-10-08",
        hospital: "Lotus Maternity & Child Health Center",
        contactPerson: "Dr. Ananya Rao",
        email: "drananya@lotushealth.in",
        phone: "+91 99001 88776",
        itemsRequired: "2 units Infant Radiant Warmers (MK-MC-701), 3 units Phototherapy Units",
        status: "New",
        estimatedValue: 239000,
        notes: "Please quote with 3-year extended warranty AMC package."
      }
    ];
    localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(defaultRFQs));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ORDERS)) {
    const sampleOrders = [
      {
        id: "MK-782941",
        date: "2026-09-25",
        status: "Delivered",
        items: [
          {
            id: "prod-101",
            name: "Apex 12.1\" Multi-Parameter ICU Patient Monitor",
            sku: "MK-CC-101",
            price: 48500,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "prod-204",
            name: "Hospital Clinical Fingertip Pulse Oximeter",
            sku: "MK-CD-204",
            price: 1450,
            quantity: 5,
            image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
          }
        ],
        subtotal: 104250,
        discount: 0,
        gst: 18765,
        total: 123015,
        paymentMethod: "Net Banking (HDFC Corporate)",
        shippingAddress: {
          hospital: "Medicity Multispecialty Hospital",
          address: "Survey No. 42, Outer Ring Road, Bellandur, Bengaluru, Karnataka - 560103",
          gstin: "29AABCM1234D1Z2"
        },
        tracking: [
          { step: "Order Placed", date: "25 Sep, 10:30 AM", done: true },
          { step: "Quality Checked & Packed", date: "25 Sep, 04:15 PM", done: true },
          { step: "Dispatched via Bluedart MedExpress", date: "26 Sep, 09:00 AM", done: true },
          { step: "Delivered & Inspected", date: "28 Sep, 02:40 PM", done: true }
        ]
      },
      {
        id: "MK-791024",
        date: "2026-10-06",
        status: "Shipped",
        items: [
          {
            id: "prod-201",
            name: "CardioSync 12-Channel ECG Machine with Glasgow Algorithm",
            sku: "MK-CD-201",
            price: 54000,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
          }
        ],
        subtotal: 54000,
        discount: 0,
        gst: 9720,
        total: 63720,
        paymentMethod: "UPI (Corporate)",
        shippingAddress: {
          hospital: "Medicity Multispecialty Hospital",
          address: "Survey No. 42, Outer Ring Road, Bellandur, Bengaluru, Karnataka - 560103",
          gstin: "29AABCM1234D1Z2"
        },
        tracking: [
          { step: "Order Placed", date: "06 Oct, 11:20 AM", done: true },
          { step: "Packed & Serial Verified", date: "06 Oct, 03:45 PM", done: true },
          { step: "In Transit (Bluedart AWB: 88472910)", date: "07 Oct, 08:30 AM", done: true },
          { step: "Expected Delivery", date: "10 Oct, 2026", done: false }
        ]
      }
    ];
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(sampleOrders));
  } else {
    // Reconcile existing stored demo orders if needed
    try {
      const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || "[]");
      let changed = false;
      existingOrders.forEach(o => {
        if (o.id === "MK-782941" && o.total !== 123015) {
          o.subtotal = 104250;
          o.discount = 0;
          o.gst = 18765;
          o.total = 123015;
          changed = true;
        } else if (o.id === "MK-791024" && o.total !== 63720) {
          o.subtotal = 54000;
          o.discount = 0;
          o.gst = 9720;
          o.total = 63720;
          changed = true;
        }
      });
      if (changed) {
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));
      }
    } catch (e) {
      console.warn("Order reconciliation skipped:", e);
    }
  }
}

// Call on load
initStore();

// Store API
const Store = {
  // PRODUCTS
  getProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS) || "[]");
  },
  getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  },
  saveProduct(product) {
    const list = this.getProducts();
    const idx = list.findIndex(p => p.id === product.id);
    if (idx >= 0) {
      list[idx] = product;
    } else {
      list.unshift(product);
    }
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(list));
    return product;
  },
  deleteProduct(id) {
    let list = this.getProducts();
    list = list.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(list));
  },

  // CATEGORIES & BRANDS
  getCategories() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || "[]");
  },
  getBrands() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BRANDS) || "[]");
  },

  // CART
  getCart() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || "[]");
  },
  addToCart(productId, quantity = 1) {
    const product = this.getProductById(productId);
    if (!product) return false;
    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        mrp: product.mrp,
        image: product.images[0] || "",
        brand: product.brand,
        quantity: quantity,
        bulkSlabs: product.bulkSlabs || []
      });
    }
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    this.emitChange("cart");
    return true;
  },
  updateCartQty(productId, quantity) {
    let cart = this.getCart();
    if (quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    } else {
      const item = cart.find(i => i.id === productId);
      if (item) item.quantity = quantity;
    }
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    this.emitChange("cart");
  },
  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    this.emitChange("cart");
  },
  clearCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    this.emitChange("cart");
  },

  // Calculate totals including bulk slab discounts + coupons + 18% GST
  getCartSummary(couponCode = "") {
    const cart = this.getCart();
    let grossSubtotal = 0;
    let bulkSavings = 0;

    cart.forEach(item => {
      let itemPrice = item.price;
      // Check bulk slabs
      if (item.bulkSlabs && item.bulkSlabs.length > 0) {
        // find highest qualifying slab
        const sorted = [...item.bulkSlabs].sort((a, b) => b.minQty - a.minQty);
        const slab = sorted.find(s => item.quantity >= s.minQty);
        if (slab) {
          const discountAmt = Math.round(itemPrice * (slab.discountPct / 100));
          bulkSavings += discountAmt * item.quantity;
        }
      }
      grossSubtotal += itemPrice * item.quantity;
    });

    let netSubtotal = grossSubtotal - bulkSavings;
    let couponDiscount = 0;

    if (couponCode) {
      const coupons = this.getCoupons();
      const cp = coupons.find(c => c.code.toUpperCase() === couponCode.trim().toUpperCase() && c.active);
      if (cp && netSubtotal >= cp.minOrder) {
        couponDiscount = Math.round(netSubtotal * (cp.discountPct / 100));
      }
    }

    const taxableAmount = Math.max(0, netSubtotal - couponDiscount);
    // GST 18% (standard for medical electronics & healthcare equipment in India)
    const gst = Math.round(taxableAmount * 0.18);
    const total = taxableAmount + gst;

    return {
      itemCount: cart.reduce((acc, curr) => acc + curr.quantity, 0),
      grossSubtotal,
      bulkSavings,
      netSubtotal,
      couponDiscount,
      taxableAmount,
      gst,
      cgst: Math.round(gst / 2),
      sgst: Math.round(gst / 2),
      total
    };
  },

  // WISHLIST
  getWishlist() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST) || "[]");
  },
  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },
  toggleWishlist(productId) {
    let list = this.getWishlist();
    let added = false;
    if (list.includes(productId)) {
      list = list.filter(id => id !== productId);
    } else {
      list.push(productId);
      added = true;
    }
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    this.emitChange("wishlist");
    return added;
  },

  // ORDERS
  getOrders() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || "[]");
  },
  createOrder(orderData) {
    const orders = this.getOrders();
    const orderId = "MK-" + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderId,
      date: new Date().toISOString().split("T")[0],
      status: "Packed",
      ...orderData,
      tracking: [
        { step: "Order Confirmed", date: "Just now", done: true },
        { step: "Packed & Serial Logged", date: "Processing at MediKart Hub", done: true },
        { step: "Dispatch", date: "Expected in 24 hrs", done: false },
        { step: "Delivery to Facility", date: "Estimated 3-5 days", done: false }
      ]
    };
    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    this.clearCart();
    return newOrder;
  },
  updateOrderStatus(orderId, newStatus) {
    const orders = this.getOrders();
    const ord = orders.find(o => o.id === orderId);
    if (ord) {
      ord.status = newStatus;
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
      return true;
    }
    return false;
  },

  // RFQ (Bulk Quote Requests)
  getRFQs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RFQS) || "[]");
  },
  createRFQ(rfqData) {
    const rfqs = this.getRFQs();
    const id = "RFQ-" + Math.floor(1000 + Math.random() * 9000);
    const newRFQ = {
      id,
      date: new Date().toISOString().split("T")[0],
      status: "New",
      ...rfqData
    };
    rfqs.unshift(newRFQ);
    localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(rfqs));
    return newRFQ;
  },
  updateRFQStatus(id, status) {
    const rfqs = this.getRFQs();
    const r = rfqs.find(item => item.id === id);
    if (r) {
      r.status = status;
      localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(rfqs));
      return true;
    }
    return false;
  },

  // REVIEWS
  getReviews(productId = null) {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS) || "[]");
    return productId ? all.filter(r => r.productId === productId) : all;
  },
  addReview(reviewData) {
    const reviews = this.getReviews();
    const newRev = {
      id: "rev-" + Date.now(),
      date: new Date().toISOString().split("T")[0],
      helpfulCount: 0,
      ...reviewData
    };
    reviews.unshift(newRev);
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    return newRev;
  },
  deleteReview(id) {
    let reviews = this.getReviews();
    reviews = reviews.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  },

  // COUPONS
  getCoupons() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUPONS) || "[]");
  },
  saveCoupon(coupon) {
    const list = this.getCoupons();
    const idx = list.findIndex(c => c.code === coupon.code);
    if (idx >= 0) list[idx] = coupon;
    else list.push(coupon);
    localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(list));
  },
  toggleCoupon(code) {
    const list = this.getCoupons();
    const cp = list.find(c => c.code === code);
    if (cp) {
      cp.active = !cp.active;
      localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(list));
    }
  },

  // BANNERS
  getBanners() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BANNERS) || "[]");
  },
  saveBanner(banner) {
    const banners = this.getBanners();
    const idx = banners.findIndex(b => b.id === banner.id);
    if (idx >= 0) banners[idx] = banner;
    else banners.push(banner);
    localStorage.setItem(STORAGE_KEYS.BANNERS, JSON.stringify(banners));
  },

  // USER PROFILE
  getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || "{}");
  },
  saveUser(userData) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    this.emitChange("user");
  },
  logout() {
    const user = this.getUser();
    user.isLoggedIn = false;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    this.emitChange("user");
  },
  login(userData) {
    let current = this.getUser();
    if (!current.name) {
      current = {
        name: "Dr. Rajesh K. Nair",
        email: "dr.rajesh@medicityhospital.com",
        phone: "+91 98450 12345",
        hospital: "Medicity Multispecialty Hospital & Research Institute",
        gstin: "29AABCM1234D1Z2",
        address: "Survey No. 42, Outer Ring Road, Bellandur",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560103"
      };
    }
    if (userData) {
      Object.assign(current, userData);
    }
    current.isLoggedIn = true;
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(current));
    this.emitChange("user");
  },

  // RECENT SEARCHES
  getRecentSearches() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT_SEARCHES) || "[]");
  },
  addRecentSearch(query) {
    if (!query || !query.trim()) return;
    let list = this.getRecentSearches().filter(q => q.toLowerCase() !== query.toLowerCase());
    list.unshift(query.trim());
    list = list.slice(0, 8);
    localStorage.setItem(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify(list));
  },

  // LANGUAGE (English / Hindi)
  getLanguage() {
    return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || "en";
  },
  setLanguage(lang) {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    this.emitChange("language");
  },

  // EVENT DISPATCHER
  emitChange(key) {
    window.dispatchEvent(new CustomEvent("medikart_store_updated", { detail: { key } }));
  }
};

// Currency Formatter Utility
function formatINR(number) {
  if (isNaN(number)) return "₹0";
  return "₹" + Number(number).toLocaleString("en-IN");
}
