# Univents App

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Huseyn005/univents-app)

Univents is a comprehensive web application for discovering events, venues, and news in Azerbaijan. Built with Next.js and shadcn/ui, it provides a user-friendly platform to explore cultural gatherings, concerts, conferences, and more.

## ✨ Features

-   **Event Discovery**: Browse a curated list of upcoming events, view detailed information, dates, and locations.
-   **Venue Exploration**: Discover various venues with descriptions, capacity details, facilities, and upcoming events.
-   **Latest News**: Stay informed with the latest news articles related to events, hackathons, and cultural happenings.
-   **Interactive Map**: A dynamic map powered by Leaflet to visualize the locations of events and venues, with options for map and satellite views.
-   **Unified Search**: Instantly search across events, venues, and news with a live-suggestion search bar.
-   **User Accounts**: Simple registration and login functionality for users.
-   **Responsive Design**: A clean and accessible interface that works seamlessly on both desktop and mobile devices.
-   **Light & Dark Mode**: Switch between light and dark themes for comfortable viewing.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/huseyn005/univents-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd univents-app
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Application

To start the development server, run:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Mapping**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/)
-   **Schema Validation**: [Zod](https://zod.dev/)

## 📂 Project Structure

The project uses the Next.js App Router for routing and organization.

```
.
├── app/                  # Main application routes
│   ├── (pages)/          # Folders for each page (e.g., /events, /venues)
│   │   ├── [id]/         # Dynamic route pages for individual items
│   │   └── page.tsx
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout for the application
├── components/           # Reusable React components
│   ├── ui/               # UI components from shadcn/ui
│   ├── events-list.tsx   # Component to display a list of events
│   ├── map-component.tsx # The interactive map component
│   ├── header.tsx        # Application header
│   └── footer.tsx        # Application footer
├── lib/                  # Utility functions
└── public/               # Static assets like images
