# ⚡ Trovelo – Electric Scooter Marketplace (Frontend)

Trovelo is the frontend client for an electric scooter e-commerce platform. It lets users browse verified scooter listings, register/login, and manage their own scooter ads with full CRUD support — all connected to the [Trovelo backend API](https://github.com/karim-chebbi/trovelo-back).

Built with **React + Vite**, **Redux** for state management, and **Tailwind CSS** for a clean, modern UI.

---

## 🚀 Tech Stack

- **React** – component-based UI
- **Vite** – fast dev server & build tool
- **Redux** – global state management (auth & scooters)
- **React Router** – client-side routing
- **Tailwind CSS** – utility-first styling with a custom design system
- **Headless UI** – accessible modals & dialogs
- **Ant Design** – form controls & buttons
- **Lucide React** – icon set

---

## ✨ Features

- 🔐 User authentication (login & register) connected to the backend JWT API
- 🛴 Marketplace page with scooter listings and live data from MongoDB
- ➕ Add new scooters via a modal form (`AddScooter`)
- 📋 Detailed scooter description page with specs (brand, model, max speed, range, battery, price, stock)
- 📱 Responsive design with a sticky, blurred navigation bar
- 🎨 Custom Tailwind design tokens (`volt`, `ice`, `ink`) for a consistent electric-themed look
- ℹ️ About & Contact pages with React Router routes

---

## 📸 Screenshots

### 🔑 Login
<img width="1363" height="604" alt="trovelo login" src="https://github.com/user-attachments/assets/448724ea-0947-4596-9e0f-cd6ccb4bea9f" />


### 📝 Register
<img width="1365" height="604" alt="trovelo register" src="https://github.com/user-attachments/assets/f600e730-9897-4154-9f59-3a92c97903b3" />




### 🛍️ Marketplace
<img width="1365" height="606" alt="trovelo marketplace" src="https://github.com/user-attachments/assets/5bd5c447-0264-470b-81dc-3c3de4dccb7d" />


### 🛴 Scooter Description
<img width="1365" height="604" alt="trovelo scooter-desc" src="https://github.com/user-attachments/assets/e86841b5-3c11-4b4c-a999-782da7b5a676" />


---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/karim-chebbi/trovelo.git
cd trovelo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root folder:
```bash
cp .env.example .env
```

Then update it with your backend API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### 5. Build for production
```bash
npm run build
```

---

## 🔐 Authentication Flow

- Users register via the **Register** page, then log in on the **Login** page.
- On successful login, the backend returns a JWT token, stored client-side and attached to authenticated requests.
- Redux (`loginUser`, `registerUser`, `lougoutUser`) manages the auth state across the app.
- The navbar reflects auth state, showing **Log in / Register** or user-specific actions.

---

## 🛴 Scooter Management

- `getAllScooters` fetches listings for the **Marketplace** page.
- `addScooter` lets logged-in users list a new scooter via a modal form.
- Each scooter card links to a detailed description page with full specs and quick actions (edit/delete for the owner).

> ⚠️ Note: scooter fields are aligned with the Mongoose backend schema — `brand`, `model`, `price`, `image`, `maxSpeed`, `range`, `battery`.

---

## 📁 Project Structure

```
/src
  /components     # Reusable UI components (Navbar, Logo, ScooterCard, AddScooter, etc.)
  /pages          # Route-level pages (Login, Register, Marketplace, About, Contact)
  /redux          # Store, slices/actions for auth & scooters
  /assets         # Images & static assets
  App.jsx
  main.jsx
```

---

## 🎨 Design System

- **Colors**: `volt` (brand electric blue/green), `ice` (light backgrounds), `ink` (text hierarchy), plus `snow`, `mist`, and a gray/slate system for borders.
- **Layout**: sticky blurred navbar, white cards on soft `ice` backgrounds, `volt-500` as the primary action color.
- **Components**: consistent badges (e.g. `Zap` bolt icon in hero sections), responsive grids, and accessible modals via Headless UI.

---

## 🔗 Related

- Backend API: [Trovelo Backend](https://github.com/karim-chebbi/trovelo-back) — Node.js, Express, MongoDB, JWT auth, role-based access control.

---

## 📌 Future Improvements

- 💳 Stripe payment integration
- 📸 Image upload (Cloudinary)
- 🧾 Order system
- ❤️ Wishlist
- 🔍 Pagination & search filters
- 📊 User dashboard for managing listings

---

## 👨‍💻 Author

Built with ⚡ by **Karim Chebbi**

## 📄 License

This project is licensed under the MIT License.
