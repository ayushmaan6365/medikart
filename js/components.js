/**
 * MEDIKART - Shared Components & UI System
 * Renders Header, Mega Menu, Footer, Toasts, Search Autocomplete, Language Switcher
 */

// I18N Translations Dictionary
const TRANSLATIONS = {
  en: {
    topNotice: "B2B Medical Marketplace • Verified Hospital Supplies & 18% GST Invoicing",
    demoBadge: "Demo Build",
    adminDemo: "Admin Panel",
    searchPlaceholder: "Search 45+ medical devices, ECG, monitors, beds, surgical kits...",
    allCategories: "All Medical Categories",
    deals: "Deals & Clearance",
    brands: "Brands A-Z",
    rfq: "Bulk Quote (RFQ)",
    orders: "My Orders",
    account: "Account",
    cart: "Cart",
    wishlist: "Wishlist",
    help: "Help & FAQ",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    inclGst: "Inclusive of 18% GST",
    callHelp: "24/7 Hospital Desk: 1800-419-6334"
  },
  hi: {
    topNotice: "बी2बी मेडिकल मार्केटप्लेस • प्रमाणित अस्पताल उपकरण और 18% जीएसटी चालान",
    demoBadge: "डेमो संस्करण",
    adminDemo: "व्यवस्थापक पैनल",
    searchPlaceholder: "45+ चिकित्सा उपकरण, ईसीजी, मॉनिटर, बेड, सर्जिकल किट खोजें...",
    allCategories: "सभी मेडिकल श्रेणियां",
    deals: "ऑफ़र और छूट",
    brands: "ब्रांड्स सूची",
    rfq: "थोक कोटेशन (RFQ)",
    orders: "मेरे ऑर्डर",
    account: "खाता",
    cart: "कार्ट",
    wishlist: "विशलिस्ट",
    help: "सहायता और प्रश्न",
    addToCart: "कार्ट में जोड़ें",
    buyNow: "अभी खरीदें",
    inclGst: "18% जीएसटी सहित",
    callHelp: "अस्पताल सहायता डेस्क: 1800-419-6334"
  }
};

function t(key) {
  const lang = Store.getLanguage() || "en";
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

// Toast Notification Manager
function showToast(message, type = "success") {
  let container = document.getElementById("medikart-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "medikart-toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  if (type === "warning") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else if (type === "danger") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  }

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span style="font-weight: 600;">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Render Global Navigation Header
function renderHeader() {
  const headerContainer = document.getElementById("header-mount");
  if (!headerContainer) return;

  const currentLang = Store.getLanguage();
  const cartSummary = Store.getCartSummary();
  const wishlistCount = Store.getWishlist().length;
  const categories = Store.getCategories();
  const user = Store.getUser();
  const isLoggedIn = user && user.isLoggedIn !== false;
  const currentPath = window.location.pathname.toLowerCase();
  const isHome = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "";
  const isCategory = currentPath.includes("category.html");
  const isRFQ = currentPath.includes("bulk-quote.html");
  const isCart = currentPath.includes("cart.html");
  const isOrders = currentPath.includes("orders.html") || currentPath.includes("account.html");

  const categoriesOptions = categories.map(c => 
    `<option value="${c.id}">${c.name}</option>`
  ).join("");

  const megaMenuItems = categories.map(c => `
    <a href="category.html?cat=${c.id}" class="mega-menu-item">
      <span>${c.name}</span>
      <span style="font-size: 0.75rem; color: #94A3B8;">${c.count} items</span>
    </a>
  `).join("");

  headerContainer.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="top-notice-bar">
      <div class="container top-notice-content">
        <div class="top-notice-left">
          <span class="demo-pill-badge">${t("demoBadge")}</span>
          <span class="notice-msg-text">${t("topNotice")}</span>
        </div>
        <div class="top-notice-right">
          <a href="tel:18004196334" class="call-desk-link" title="Call Bio-Desk Helpline: 1800-419-6334">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span class="call-desk-text">${t("callHelp")}</span>
            <span class="call-desk-short">1800-419-6334</span>
          </a>
          <button id="lang-switch-btn" class="lang-btn" onclick="toggleLanguage()" title="Change Language / भाषा बदलें">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>${currentLang === "en" ? "हिन्दी" : "English"}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="main-header">
      <div class="container header-inner">
        <!-- Left: Mobile Hamburger & Brand Logo -->
        <div class="header-left-cluster">
          <button type="button" class="mobile-hamburger-btn" onclick="toggleMobileNav(true)" aria-label="Open Navigation Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <a href="index.html" class="brand-logo" title="MediKart - B2B Medical Equipment">
            <div class="brand-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 10.5h-5.5V5a1.5 1.5 0 0 0-3 0v5.5H5a1.5 1.5 0 0 0 0 3h5.5V19a1.5 1.5 0 0 0 3 0v-5.5H19a1.5 1.5 0 0 0 0-3z"/>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-title">Medi<span>Kart</span></span>
              <span class="brand-sub">Healthcare B2B</span>
            </div>
          </a>
        </div>

        <!-- Desktop Search Bar with Category Selector -->
        <div class="header-search">
          <form class="search-form" id="global-search-form" onsubmit="handleSearchSubmit(event)">
            <select class="search-category-select" id="search-cat-select" aria-label="Search Category">
              <option value="">All Categories</option>
              ${categoriesOptions}
            </select>
            <input 
              type="text" 
              class="search-input" 
              id="search-input" 
              placeholder="${t("searchPlaceholder")}" 
              autocomplete="off"
              oninput="handleSearchInput(this.value)"
              onfocus="showSearchDropdown()"
            />
            <button type="submit" class="search-submit-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>

          <!-- Search Dropdown: Recents + Suggestions -->
          <div class="search-dropdown" id="search-dropdown-menu">
            <div id="recent-searches-box">
              <div class="search-section-title">
                <span>Recent Searches</span>
                <span style="cursor: pointer; color: var(--accent); font-size: 0.7rem;" onclick="clearRecents()">Clear</span>
              </div>
              <div class="recent-tags-wrapper" id="recent-tags-container"></div>
            </div>
            <div>
              <div class="search-section-title">
                <span>Recommended Equipment</span>
              </div>
              <div class="suggestion-list" id="search-suggestions-container"></div>
            </div>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="header-actions">
          <a href="bulk-quote.html" class="rfq-quick-btn hide-on-mobile" title="Request Bulk Pricing">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span class="action-label">${t("rfq")}</span>
          </a>

          <a href="wishlist.html" class="header-action-btn" title="Saved Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="action-label">${t("wishlist")}</span>
            <span class="badge-count" id="header-wishlist-count">${wishlistCount}</span>
          </a>

          <a href="cart.html" class="header-action-btn" title="Shopping Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span class="action-label">${t("cart")}</span>
            <span class="badge-count" id="header-cart-count">${cartSummary.itemCount}</span>
          </a>

          <a href="account.html" class="header-action-btn hide-on-mobile" title="${isLoggedIn ? ('Facility Account: ' + (user.name || 'Dr. Rajesh')) : 'Login to Facility Account'}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span class="action-label">${isLoggedIn ? t("account") : 'Login'}</span>
          </a>
        </div>
      </div>

      <!-- Dedicated Mobile Search Row (Instant Access on Phone/Tablet) -->
      <div class="mobile-search-bar-wrap">
        <div class="container">
          <form class="mobile-search-form" onsubmit="handleMobileSearchSubmit(event)">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              id="mobile-search-input" 
              class="mobile-search-input" 
              placeholder="${t("searchPlaceholder")}" 
              autocomplete="off"
            />
            <button type="submit" class="mobile-search-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Sub Navigation Bar (Smooth scrollable pills on mobile) -->
      <nav class="sub-navbar">
        <div class="container sub-nav-inner">
          <div class="nav-links-left">
            <div class="all-categories-trigger" onclick="toggleMobileNav(true)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              <span>${t("allCategories")}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>

              <!-- Mega Dropdown (Desktop) -->
              <div class="mega-menu-overlay">
                <div class="mega-menu-list">
                  ${megaMenuItems}
                </div>
              </div>
            </div>

            <a href="category.html?cat=critical-care" class="nav-link-item">Critical Care</a>
            <a href="category.html?cat=cardiology" class="nav-link-item">Cardiology</a>
            <a href="category.html?cat=furniture" class="nav-link-item">Hospital Beds</a>
            <a href="category.html?cat=surgical" class="nav-link-item">Surgical OT</a>
            <a href="deals.html" class="nav-link-item deal-highlight">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${t("deals")}
            </a>
            <a href="brands.html" class="nav-link-item">${t("brands")}</a>
            <a href="orders.html" class="nav-link-item">${t("orders")}</a>
          </div>

          <div class="nav-links-right">
            <a href="help.html" class="nav-link-item">${t("help")}</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile Navigation Drawer Backdrop & Panel -->
    <div id="mobile-nav-backdrop" class="mobile-nav-backdrop" onclick="toggleMobileNav(false)"></div>
    <aside id="mobile-nav-drawer" class="mobile-nav-drawer" aria-label="Mobile Navigation">
      <div class="drawer-header">
        <div class="brand-logo" style="gap: 8px;">
          <div class="brand-icon" style="width: 34px; height: 34px;">
            <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path d="M19 10.5h-5.5V5a1.5 1.5 0 0 0-3 0v5.5H5a1.5 1.5 0 0 0 0 3h5.5V19a1.5 1.5 0 0 0 3 0v-5.5H19a1.5 1.5 0 0 0 0-3z"/></svg>
          </div>
          <div class="brand-text">
            <span class="brand-title" style="font-size: 1.15rem;">Medi<span>Kart</span></span>
            <span class="brand-sub" style="font-size: 0.65rem;">Healthcare B2B</span>
          </div>
        </div>
        <button type="button" class="btn-close-drawer" onclick="toggleMobileNav(false)" aria-label="Close Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="drawer-user-strip">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <div class="verified-facility-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>${isLoggedIn ? (user.name || "Dr. Rajesh K. Nair") : "Guest User"}</span>
          </div>
          ${isLoggedIn ? `
            <button type="button" onclick="handleGlobalLogout(); toggleMobileNav(false);" style="background: #FFF1F2; color: #E11D48; border: 1px solid #FECDD3; border-radius: 6px; padding: 4px 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">
              Log Out
            </button>
          ` : `
            <a href="account.html" onclick="toggleMobileNav(false);" style="background: var(--primary-soft); color: var(--primary); border-radius: 6px; padding: 4px 10px; font-size: 0.72rem; font-weight: 700;">
              Log In
            </a>
          `}
        </div>
      </div>

      <div class="drawer-body">
        <div class="drawer-section-title">Medical Specialities (${categories.length})</div>
        <div class="drawer-cat-list">
          ${categories.map(c => `
            <a href="category.html?cat=${c.id}" class="drawer-cat-item" onclick="toggleMobileNav(false)">
              <span>${c.name}</span>
              <span class="drawer-cat-count">${c.count} items</span>
            </a>
          `).join("")}
        </div>

        <div class="drawer-section-title" style="margin-top: 20px;">Institutional Services</div>
        <div class="drawer-nav-links">
          <a href="bulk-quote.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <span>${t("rfq")}</span>
          </a>
          <a href="deals.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${t("deals")}</span>
          </a>
          <a href="brands.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <span>${t("brands")}</span>
          </a>
          <a href="orders.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${t("orders")}</span>
          </a>
          <a href="account.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>${t("account")}</span>
          </a>
          ${isLoggedIn ? `
          <button type="button" class="drawer-nav-item" style="width: 100%; border: none; background: transparent; cursor: pointer; color: #E11D48; text-align: left;" onclick="handleGlobalLogout(); toggleMobileNav(false);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E11D48" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span style="color: #E11D48; font-weight: 700;">Log Out / Sign Out</span>
          </button>
          ` : `
          <a href="account.html" class="drawer-nav-item" style="color: var(--primary);" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
            <span style="font-weight: 700;">Log In to Account</span>
          </a>
          `}
          <a href="help.html" class="drawer-nav-item" onclick="toggleMobileNav(false)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span>${t("help")}</span>
          </a>
        </div>

        <div class="drawer-footer-actions">
          <button class="drawer-lang-btn" onclick="toggleLanguage(); toggleMobileNav(false);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>${currentLang === "en" ? "हिन्दी में बदलें" : "Switch to English"}</span>
          </button>
          <a href="tel:18004196334" class="drawer-call-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Call Bio-Desk: 1800-419-6334</span>
          </a>
        </div>
      </div>
    </aside>

    <!-- Mobile Bottom Navigation Bar (Fixed for phones & tablets) -->
    <nav class="mobile-bottom-nav" aria-label="Bottom Navigation">
      <a href="index.html" class="mobile-nav-item ${isHome ? 'active' : ''}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Home</span>
      </a>
      <a href="category.html" class="mobile-nav-item ${isCategory ? 'active' : ''}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Catalogue</span>
      </a>
      <a href="bulk-quote.html" class="mobile-nav-item ${isRFQ ? 'active' : ''}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <span>RFQ Quote</span>
      </a>
      <a href="cart.html" class="mobile-nav-item ${isCart ? 'active' : ''}" style="position: relative;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <span>Cart</span>
        <span class="badge-count" id="mobile-bottom-cart-count">${cartSummary.itemCount}</span>
      </a>
      <a href="orders.html" class="mobile-nav-item ${isOrders ? 'active' : ''}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Orders</span>
      </a>
    </nav>
  `;

  // Update recent searches
  renderRecentSearches();
  // Listen for clicks outside search dropdown
  document.addEventListener("click", (e) => {
    const searchBox = document.querySelector(".header-search");
    const dropdown = document.getElementById("search-dropdown-menu");
    if (searchBox && dropdown && !searchBox.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}

// Render Global Footer
function renderFooter() {
  const footerContainer = document.getElementById("footer-mount");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="main-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Info & Mission -->
          <div class="footer-brand-col">
            <a href="index.html" class="brand-logo" style="color: #FFFFFF;">
              <div class="brand-icon">
                <svg viewBox="0 0 24 24"><path d="M19 10.5h-5.5V5a1.5 1.5 0 0 0-3 0v5.5H5a1.5 1.5 0 0 0 0 3h5.5V19a1.5 1.5 0 0 0 3 0v-5.5H19a1.5 1.5 0 0 0 0-3z"/></svg>
              </div>
              <div class="brand-text">
                <span class="brand-title" style="color: #FFFFFF;">Medi<span style="color: var(--accent);">Kart</span></span>
                <span class="brand-sub" style="color: #A3BFBD;">Hospital B2B Platform</span>
              </div>
            </a>
            <p>
              India’s trusted digital medical supply hub connecting 12,000+ hospitals, nursing homes, and diagnostic labs directly with certified medical equipment manufacturers.
            </p>
            <div class="footer-gst-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>100% GST Invoiced • Input Tax Credit (ITC) Eligible</span>
            </div>
          </div>

          <!-- Col 2: Top Categories -->
          <div class="footer-col">
            <h4>Equipment Categories</h4>
            <div class="footer-links">
              <a href="category.html?cat=critical-care">Critical Care & ICU</a>
              <a href="category.html?cat=cardiology">Cardiology & ECG</a>
              <a href="category.html?cat=furniture">Hospital Furniture</a>
              <a href="category.html?cat=surgical">Surgical OT Lights</a>
              <a href="category.html?cat=radiology">Ultrasound & X-Ray</a>
              <a href="category.html?cat=laboratory">Pathology & Lab</a>
            </div>
          </div>

          <!-- Col 3: B2B Services -->
          <div class="footer-col">
            <h4>Institutional Services</h4>
            <div class="footer-links">
              <a href="bulk-quote.html">Hospital RFQ & Bulk Slabs</a>
              <a href="deals.html">Institutional Clearance Deals</a>
              <a href="brands.html">Authorized Brand Directory</a>
              <a href="orders.html">Track Order & Status</a>
              <a href="account.html">Doctor & Clinic Profile</a>
              <a href="contact.html">24/7 Biomedical Support</a>
            </div>
          </div>

          <!-- Col 4: Corporate & Help -->
          <div class="footer-col">
            <h4>Support & Policies</h4>
            <div class="footer-links">
              <a href="help.html">Delivery & Pincode FAQs</a>
              <a href="help.html#warranty">OEM Warranty & Servicing</a>
              <a href="policies.html#gst">GST Invoicing Policy</a>
              <a href="policies.html#returns">Returns & Bio-Replacement</a>
              <a href="about.html">About MediKart</a>
              <a href="contact.html">Contact Bio-Desk</a>
            </div>
          </div>

          <!-- Col 5: Contact Desk -->
          <div class="footer-col">
            <h4>B2B Emergency Desk</h4>
            <div class="footer-contact-info">
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Toll-Free: 1800-419-MEDIKART<br>(Mon–Sat: 8 AM to 10 PM)</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>b2b-orders@medikart.demo</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>MediKart Tech Park, Sector 44, Gurugram, NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © 2026 MediKart Healthcare Private Limited. All Rights Reserved. Demo Showcase Prototype.
          </div>
          <div>
            ISO 13485:2016 Certified Medical Logistics • CDSCO Registered Vendor Network
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Search Logic
function showSearchDropdown() {
  const dropdown = document.getElementById("search-dropdown-menu");
  if (dropdown) dropdown.classList.add("active");
  renderRecentSearches();
  handleSearchInput(document.getElementById("search-input").value);
}

function handleSearchInput(query) {
  const container = document.getElementById("search-suggestions-container");
  if (!container) return;

  const products = Store.getProducts();
  let matches = [];

  if (!query || !query.trim()) {
    matches = products.slice(0, 4);
  } else {
    const q = query.toLowerCase().trim();
    matches = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
    ).slice(0, 5);
  }

  if (matches.length === 0) {
    container.innerHTML = `<div style="padding: 8px 12px; font-size: 0.82rem; color: #94A3B8;">No medical equipment found matching "${query}"</div>`;
    return;
  }

  container.innerHTML = matches.map(p => `
    <div class="suggestion-item" onclick="selectSearchItem('${p.id}')">
      <div class="suggestion-item-main">
        <img src="${p.images[0]}" alt="${p.name}" class="suggestion-item-thumb" onerror="this.src='https://placehold.co/40x40?text=Med'"/>
        <div>
          <div class="suggestion-item-text">${p.name.length > 45 ? p.name.substring(0, 45) + '...' : p.name}</div>
          <div class="suggestion-item-cat">${p.brand} • ${p.category}</div>
        </div>
      </div>
      <div class="suggestion-item-price">${formatINR(p.price)}</div>
    </div>
  `).join("");
}

function selectSearchItem(productId) {
  window.location.href = `product.html?id=${productId}`;
}

function renderRecentSearches() {
  const container = document.getElementById("recent-tags-container");
  const box = document.getElementById("recent-searches-box");
  if (!container || !box) return;

  const recents = Store.getRecentSearches();
  if (recents.length === 0) {
    box.style.display = "none";
    return;
  }
  box.style.display = "block";
  container.innerHTML = recents.map(r => `
    <span class="recent-tag" onclick="applyRecentSearch('${r}')">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      ${r}
    </span>
  `).join("");
}

function applyRecentSearch(term) {
  const input = document.getElementById("search-input");
  if (input) {
    input.value = term;
    handleSearchSubmit(new Event("submit"));
  }
}

function clearRecents() {
  localStorage.setItem(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify([]));
  renderRecentSearches();
}

function handleSearchSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("search-input");
  const catSelect = document.getElementById("search-cat-select");
  if (!input) return;

  const query = input.value.trim();
  const category = catSelect ? catSelect.value : "";

  if (query) {
    Store.addRecentSearch(query);
  }

  let targetUrl = `search.html?q=${encodeURIComponent(query)}`;
  if (category) {
    targetUrl += `&cat=${encodeURIComponent(category)}`;
  }
  window.location.href = targetUrl;
}

function handleMobileSearchSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("mobile-search-input");
  if (!input) return;

  const query = input.value.trim();
  if (query) {
    Store.addRecentSearch(query);
  }

  window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// Mobile Navigation Drawer Controller
function toggleMobileNav(open) {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  if (!drawer || !backdrop) return;
  if (open) {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Language Switcher
function toggleLanguage() {
  const current = Store.getLanguage();
  const next = current === "en" ? "hi" : "en";
  Store.setLanguage(next);
  renderHeader();
  showToast(next === "hi" ? "भाषा बदलकर हिन्दी कर दी गई है" : "Language switched to English", "success");
}

// Global Store Update Sync (Badges & Counts)
window.addEventListener("medikart_store_updated", (e) => {
  const cartSummary = Store.getCartSummary();
  const wishlistCount = Store.getWishlist().length;

  const cartEl = document.getElementById("header-cart-count");
  if (cartEl) cartEl.textContent = cartSummary.itemCount;

  const mobCartEl = document.getElementById("mobile-bottom-cart-count");
  if (mobCartEl) mobCartEl.textContent = cartSummary.itemCount;

  const wishEl = document.getElementById("header-wishlist-count");
  if (wishEl) wishEl.textContent = wishlistCount;
});

// Render Product Card Component (Reusable for grids, carousels, PLP, search)
function renderProductCard(p) {
  const inWishlist = Store.isInWishlist(p.id);
  const discountPct = Math.round(((p.mrp - p.price) / p.mrp) * 100);

  return `
    <div class="product-card" id="card-${p.id}">
      <div class="product-badges">
        ${discountPct > 0 ? `<span class="badge-discount">${discountPct}% OFF</span>` : ""}
        ${p.isSpecial ? `<span class="badge-special">B2B Deal</span>` : ""}
      </div>

      <button 
        class="btn-wishlist ${inWishlist ? 'active' : ''}" 
        onclick="handleWishlistToggle('${p.id}', event)"
        title="Add to Wishlist"
        aria-label="Wishlist"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? '#EF4444' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>

      <a href="product.html?id=${p.id}" class="product-thumb-link">
        <img 
          src="${p.images[0]}" 
          alt="${p.name}" 
          class="product-thumb-img" 
          loading="lazy" 
          onerror="this.src='https://placehold.co/400x400/e2e8f0/0e5f5b?text=Medical+Equipment'"
        />
      </a>

      <div class="product-body">
        <a href="brands.html" class="product-brand">${p.brand}</a>
        <a href="product.html?id=${p.id}" class="product-title" title="${p.name}">
          ${p.name}
        </a>

        <div class="product-rating-row">
          <span class="star-rating-pill">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${p.rating}
          </span>
          <span class="rating-count">(${p.reviewsCount} reviews)</span>
        </div>

        <div class="product-price-block">
          <span class="price-main">${formatINR(p.price)}</span>
          <span class="price-mrp">${formatINR(p.mrp)}</span>
          <span class="price-gst-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline; vertical-align:middle; margin-right:2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${t("inclGst")}
          </span>
        </div>

        <div class="product-card-actions">
          <button class="btn-add-cart" onclick="handleCardAddToCart('${p.id}', event)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>${t("addToCart")}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function handleCardAddToCart(productId, event) {
  if (event) event.stopPropagation();
  Store.addToCart(productId, 1);
  const product = Store.getProductById(productId);
  showToast(`Added "${product ? product.name.substring(0, 30) + '...' : 'Product'}" to Cart`, "success");
}

function handleWishlistToggle(productId, event) {
  if (event) event.stopPropagation();
  const added = Store.toggleWishlist(productId);
  const btn = event.currentTarget;
  if (btn) {
    btn.classList.toggle("active", added);
    const svg = btn.querySelector("svg");
    if (svg) svg.setAttribute("fill", added ? "#EF4444" : "none");
  }
  showToast(added ? "Saved to Wishlist" : "Removed from Wishlist", added ? "success" : "warning");
}

function handleGlobalLogout() {
  Store.logout();
  showToast("You have been logged out successfully.", "info");
  renderHeader();
  if (window.location.pathname.includes("account.html")) {
    if (typeof updateAuthState === "function") {
      updateAuthState();
    } else {
      window.location.reload();
    }
  }
}

// Auto-run Header & Footer initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});

