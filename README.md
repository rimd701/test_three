
# 3D Shape Viewer

A React-based application that displays 3D shapes in a table format and allows users to render them in a 3D canvas. Users can create new shapes, delete existing shapes, and render all shapes side-by-side in a 3D view with interactive controls.

## Features

- **Shape Management**: Add, view, and delete shapes with their name and type.
- **3D Canvas Rendering**: View all shapes in a 3D space side by side when the "Render All Shapes" button is clicked.
- **Interactive Controls**: Use mouse controls (pan, zoom, rotate) to navigate the 3D canvas.
- **Shape Selection**: Shapes are clickable in the 3D view to identify and highlight each one.

## Project Structure

- **`App.tsx`**: Main app entry point.
- **`pages/ShapePage.tsx`**: The main page handling the display and rendering of shapes.
- **`components/ShapeTable.tsx`**: Renders the table with all shapes and delete functionality.
- **`components/CanvasRenderer.tsx`**: Renders all shapes in a 3D canvas.
- **`components/CreateShapeModal.tsx`**: Modal form for adding new shapes.
- **`hooks/useShapesStorage.ts`**: Manages shape data in local state.
- **`types/shapes.ts`**: Defines the `Shape` type.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/3d-shape-viewer.git
   cd 3d-shape-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the application locally:

```bash
npm start
# or
yarn start
```

The application should now be running on `http://localhost:3000`.

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will generate a `build` folder with the production-optimized application.



Here's how to add Docker support to your project, including a `Dockerfile` and an update to the `README.md` file with Docker instructions.

---

### Use Docker

Add Docker instructions to the README file:

```markdown
## Docker Instructions

To run the 3D Shape Viewer application using Docker:

### Build the Docker Image

From the project root directory, run the following command to build the Docker image:

```bash
docker build -t 3d-shape-viewer .
```

### Run the Docker Container

Run the following command to start a container from the image, mapping port 3000 on your host to port 3000 in the container:

```bash
docker run -p 3000:3000 3d-shape-viewer
```

The application should now be accessible at `http://localhost:3000`.

### Docker Cleanup

To remove the Docker image after you are done, you can run:

```bash
docker rmi 3d-shape-viewer
```

---

With these instructions, you should now be able to build and run your application in a Docker container. The app will be served at `http://localhost:3000`, allowing for a consistent deployment environment.