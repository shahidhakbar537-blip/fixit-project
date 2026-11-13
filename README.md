# ✦ Aurelia FixIt — Ultra-Luxury Home Services & Mechanics Radar

> **Aurelia FixIt** is an ultra-luxury, full-stack single-page web application and interactive prototype for on-demand home maintenance, repair diagnostics, real-time mechanics telemetry, and verified homeowner reviews.

---

## 🌟 Key Features

### 1. 📍 Live Telemetry & Nearby Mechanics Radar
- **High-Precision GPS Detection**: Automatically calibrates coordinates or allows manual area lookup.
- **Interactive Leaflet Radar**: Displays real-time location pins for verified active technicians, custom radar waves, and route polylines.
- **Dynamic Trade Filtering**: Instant filtering across **Climate & AC (❄️)**, **Power & Circuits (⚡)**, **Water & Sanitary (🚿)**, **Woodcraft (🪵)**, and **Appliances (🧺)**.
- **Instant Dispatch**: Live tracking panel tracking technician journey milestones (*Dispatched* → *En Route* → *Arrived* → *Completed*).

### 2. 🎨 100% Pure CSS Vector Design & Obsidian Glassmorphism
- **Zero AI Stock Images**: Powered completely by clean midnight obsidian radial mesh gradients, SVG icons, and gold monogram avatar badges.
- **Ambient Particle Canvas**: Lightweight, silky particle physics rendering on an HTML5 canvas overlay.
- **Responsive Layout**: Designed for seamless desktop and mobile browser experiences without fragmented frames.

### 3. ⭐ Post-Service Rating & Verified Homeowner Reviews
- **Lifecycle Feedback**: Triggered upon completion of any service with interactive 5-star scoring and real-time descriptive feedback labels.
- **Compliment Tags & Tips**: Multi-select appreciation tags (*Punctual & On-Time*, *Spotless Cleanliness*, *Expert Diagnostic*) and optional 100% technician tip options.
- **Instant Feed Publication**: Immediately prepends submitted reviews into the public live reviews feed with a verified homeowner badge and activates the 30-day workmanship warranty.

### 4. 🛠️ Transparent Curated Services Catalog & Booking Studio
- Upfront flat pricing with detailed inclusion and exclusion checklists.
- Automated transparent bill breakdowns including diagnostic waivers and GST calculations.
- Rapid arrival slot selector and address note instructions.

### 5. ✨ AI Problem Diagnostic & Emergency Hazard Triage
- Neural diagnostic parser identifying common plumbing, AC, and appliance failure modes.
- Instant safety alerts and emergency protocols for hazardous electrical arcing or gas leaks.

### 6. 🛡️ Household Asset Vault & Preventative Maintenance
- Registry tracking appliance warranties, service intervals, and health scores to avoid unexpected breakdowns.

---

## 🚀 Getting Started

No build tools, bundlers, or package installations are required! Aurelia FixIt is built with vanilla web technologies.

### Quick Start
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/fixit-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fixit-project
   ```
3. Open `index.html` in any modern web browser:
   - On Windows: Double-click `index.html` or run:
     ```powershell
     Start-Process index.html
     ```
   - Or serve using any static server (e.g. Python, Live Server):
     ```bash
     python -m http.server 8000
     ```

---

## 📁 Project Structure

```
├── index.html       # Unified single-page application structure & modals
├── styles.css       # Obsidian luxury theme, Leaflet styles & responsive UI
├── app.js           # Core application engine, Leaflet radar, dispatch & review logic
├── tracking.html    # Standalone tracking prototype
├── tracking.css     # Standalone tracking styles
├── tracking.js      # Standalone tracking logic
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

---

## 💻 Tech Stack
- **HTML5 & CSS3**: Custom CSS variables, glassmorphic cards, Flexbox & Grid layouts.
- **JavaScript (ES6+)**: Vanilla JS architecture with reactive DOM state management.
- **Leaflet.js & CartoDB**: Dark luxury map tiles, custom HTML div markers, and routing polylines.
- **Google Fonts**: *Plus Jakarta Sans* and *Inter*.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
