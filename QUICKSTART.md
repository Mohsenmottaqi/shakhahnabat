# 🍽️ SHAKHAH NABAT Restaurant - Quick Start

## رستوران شاخه نبات

**Location:** Kunduz, Khanabad | کندز، بندر خان آباد

---

## 🚀 How to Run

1. Open `index.html` in any modern web browser
2. That's it! No installation or build process needed.

---

## 🎨 Color Palette (Food-Optimized)

These colors are scientifically proven to stimulate appetite:

- 🔴 **Red** (#E63946) - Urgency, excitement
- 🟠 **Orange** (#F77F00) - Energy, warmth
- 🟡 **Yellow** (#FCBF49) - Happiness, optimism  
- 🟢 **Green** (#06D6A0) - Fresh, healthy
- ⚪ **Cream** (#FFF8E7) - Comfortable, warm

---

## 🍕 Menu Categories

### Afghan Food 🇦🇫
- **Kabuli Pulao** - Traditional rice with lamb, raisins, carrots
- **Mantu** - Afghan dumplings with yogurt
- **Lamb Kebab** - Grilled skewers with rice
- **Qabuli Palau** - National dish of Afghanistan
- **Bolani** - Stuffed flatbread

### Pizza 🍕
- Margherita
- Pepperoni

### Fast Food 🍔
- Classic Burger
- Crispy Chicken

### Healthy Options 🥗
- Garden Salad

---

## 🌐 Language Support

Click the button in the navigation to toggle between:
- 🇬🇧 **English** (Left-to-Right)
- 🇦🇫 **فارسی/دری** (Right-to-Left)

All text, including prices, descriptions, and buttons, will update automatically.

---

## ✨ Key Features

1. **Category Filtering** - Click category buttons to filter menu items
2. **Hover Effects** - Cards lift and images zoom on hover
3. **Smooth Animations** - Food cards fade in with staggered timing
4. **Responsive Design** - Works on mobile, tablet, and desktop
5. **Contact Form** - Bilingual form with validation
6. **Real Food Images** - High-quality photos from Unsplash

---

## 📸 Image Sources

All food images are from [Unsplash](https://unsplash.com) with the following benefits:
- ✅ Free to use
- ✅ High quality
- ✅ No attribution required
- ✅ Commercial use allowed

To change images:
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for your desired food
3. Copy the image URL
4. Replace in `index.html`

**Format:** `https://images.unsplash.com/photo-XXXXXX?w=800&q=80`

---

## 🛠️ Customization

### Add New Menu Item

```html
<div class="food-card YOUR_CATEGORY" data-category="YOUR_CATEGORY">
    <div class="relative overflow-hidden rounded-2xl shadow-xl group">
        <img src="YOUR_IMAGE_URL" alt="Food Name" 
             class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 p-6 text-white">
                <button class="px-4 py-2 bg-food-red rounded-full font-semibold hover:bg-food-orange transition" data-en="Order Now" data-fa="سفارش">Order Now</button>
            </div>
        </div>
    </div>
    <div class="p-4 bg-white rounded-b-2xl">
        <h3 class="text-xl font-bold text-gray-800 mb-2" data-en="Food Name EN" data-fa="Food Name FA">Food Name</h3>
        <p class="text-gray-600 text-sm mb-3" data-en="Description EN" data-fa="Description FA">Description</p>
        <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-food-red">$9.99</span>
            <div class="flex text-food-yellow">
                ⭐⭐⭐⭐⭐
            </div>
        </div>
    </div>
</div>
```

### Change Colors

Edit the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'food-red': '#YOUR_COLOR',
                'food-orange': '#YOUR_COLOR',
                // ...
            }
        }
    }
}
```

---

## 📞 Contact Information

Update these in `index.html`:

- **Location:** Kunduz, Khanabad
- **Email:** info@shakhahnabat.com
- **Phone:** +93 XXX XXX XXX
- **Hours:** 
  - Sat-Thu: 10:00 AM - 11:00 PM
  - Friday: 12:00 PM - 11:00 PM
  - Delivery: 24/7

---

## 🔧 Technologies

- **Tailwind CSS** - Via CDN (no npm needed)
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Poppins & Vazirmatn
- **HTML5** - Semantic markup

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 📄 Files

```
shakhah-nabat-landing/
├── index.html       # Main HTML file
├── styles.css       # Custom styles & animations
├── script.js        # JavaScript functionality
├── README.md        # Full documentation
└── QUICKSTART.md    # This file
```

---

## 🎯 Next Steps

1. **Replace Images** - Use your own restaurant photos
2. **Update Prices** - Set your actual menu prices
3. **Add More Items** - Expand the menu
4. **Update Contact** - Add real phone/email
5. **Deploy** - Host on Netlify, Vercel, or GitHub Pages

---

## 🌟 Tips

- Use high-quality food images (1200x800px minimum)
- Keep descriptions short and appetizing
- Update prices regularly
- Test on mobile devices
- Add your logo to the navigation

---

**Made with ❤️ for SHAKHAH NABAT Restaurant**

Enjoy your beautiful new website! 🎉
