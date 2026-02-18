# 🧠 React Turing Machine Simulator

A fully interactive **Turing Machine Simulator** built with **React + TypeScript**, designed following **SOLID principles**, and production-ready with **Docker** (multi-stage build + Nginx).

This project emphasizes **secure programming practices**, including:

- Strict TypeScript usage with strict mode enabled (`strict: true`)
- Avoidance of `any` types and unsafe type assertions
- Input validation & sanitization for all file-based configuration parsing
- Safe dependency management with regular vulnerability scans (`npm audit`)
- Principle of least privilege in Docker images (using non-root user where possible)
- No hardcoded secrets or credentials in source code
- Controlled async execution to prevent stack overflows and infinite loops
- Clear separation of concerns to reduce attack surface and improve auditability
- Use of immutable data patterns where appropriate

https://github.com/sharfuzzaman/turing_machine_SOLID_react

## 🚀 Project Overview

This project simulates a **deterministic Turing Machine** with:

- Infinite tape visualization
- Step-by-step & continuous execution with adjustable speed
- Infinite loop detection
- Execution history tracking
- File-based configuration support (.tmprog.txt & .tmprog.json)
- Clean, scalable architecture using **SOLID principles**

The application cleanly separates:

- UI logic  
- Machine logic  
- Configuration parsing  
- Execution engine  

for maximum maintainability, testability, and security.

## 🏗️ Tech Stack

- ⚛️ **React** (with Vite)  
- 🟦 **TypeScript**  
- 🐳 **Docker** (multi-stage build)  
- 🌐 **Nginx** (production static serving)

## 📂 Supported File Formats

- `.tmprog.txt` – human-readable text format  
- `.tmprog.json` – structured JSON format  

Parsing is implemented using abstraction (following the **Open/Closed Principle**).

## 🧩 Architecture & SOLID Principles

- **S** — Single Responsibility Principle  
- **O** — Open/Closed Principle  
- **L** — Liskov Substitution Principle  
- **I** — Interface Segregation Principle  
- **D** — Dependency Inversion Principle  

(True dependency injection is used, especially for the tape head via factory pattern.)

## 🧠 Features

- Step-by-step execution  
- Continuous run mode with adjustable speed  
- Infinite loop detection  
- Full execution history (snapshots of tape state)  
- Dynamic, real-time tape visualization  
- Clean separation of concerns  
- Robust error handling for invalid configurations  
- Production-ready Docker setup

## 🛠️ Installation (Local Development)

```bash
# Clone the repository
git clone https://github.com/sharfuzzaman/turing_machine_SOLID_react.git
cd react-turing-simulator_SOLID

# Install dependencies
npm install

# Start development server
npm run dev
```
## Project Structure

```bash
src/
 ├── core/
 │   ├── TuringMachine.ts          # Core machine logic
 │   ├── Tape.ts                   # Tape implementation
 │   ├── State.ts
 │   ├── RuleEngine.ts
 │   └── types.ts
 │
 ├── parsers/
 │   ├── ITuringParser.ts          # Parser abstraction
 │   ├── JsonParser.ts
 │   └── TextParser.ts
 │
 ├── hooks/
 │   └── useExecution.ts           # Execution control & state
 │
 ├── components/
 │   ├── TapeView.tsx              # Visual tape rendering
 │   ├── Controls.tsx              # Play/pause/step UI
 │   └── ...                       # other UI pieces
 │
 ├── App.tsx
 └── main.tsx
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-turing-simulator_SOLID
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

# 🐳 Run with Docker (Production Mode)

This project uses a multi-stage Docker build to create a small, secure, and optimized production image.
Features of the Docker setup

- Multi-stage build: Only runtime dependencies are included in the final image
- Non-root user: Runs as a non-privileged user (node) for better security
- Minimal base image: Uses nginx:alpine for serving static files
- No dev dependencies in final image → smaller attack surface
- Static file serving: Extremely fast and secure with Nginx

## Steps to Build and Run

**1. Build the production image**
```bash
docker build -t react-turing-simulator
```

**2. Run the container (recommended secure flags)**
```bash
docker run -d \
  --name turing-simulator \
  -p 3000:80 \
  --read-only \
  --tmpfs /tmp \
  --restart unless-stopped \
  react-turing-simulator
  ```
  **Open in your browser:**
→ http://localhost:3000

## Stop and Remove (When Needed)
**Stop the running container**
```bash
docker stop turing-simulator
```
**Remove the container (optional)**
```bash
docker rm turing-simulator
```

**Remove the image (optional, frees disk space)***
```bash
docker rmi react-turing-simulator
```
## 🎯 Learning Outcomes
This project helped strengthen understanding of:

- Clean Architecture & separation of concerns
- Applying SOLID design principles in real code
- Proper Dependency Injection & factory patterns
- TypeScript interface design & type safety
- React hooks & state synchronization patterns
- Async execution with controlled delays
- Docker multi-stage builds for small production images
- Secure container deployment practices

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License.
Happy Turing Machine simulating! 🧠✨
