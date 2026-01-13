# React Turing Simulator

This project implements a Turing Machine using React.js, adhering to SOLID design principles. It can read and execute Turing machine programs from both `.tmprog.txt` and `.tmprog.json` files.

## Features

- Visual representation of the Turing machine's tape and head position.
- User controls for loading Turing machine programs and executing them.
- Support for both text and JSON formats for Turing machine programs.
- Modular architecture following SOLID principles for maintainability and scalability.

## Project Structure

```
react-turing-simulator
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── styles
│   │   └── global.css
│   ├── components
│   │   ├── TuringVisualizer.tsx
│   │   ├── TapeView.tsx
│   │   ├── Controls.tsx
│   │   └── FileLoader.tsx
│   ├── machine
│   │   ├── TuringMachine.ts
│   │   ├── Tape.ts
│   │   ├── Transition.ts
│   │   └── State.ts
│   ├── parsers
│   │   ├── tmprogTxtParser.ts
│   │   └── tmprogJsonParser.ts
│   ├── loaders
│   │   ├── fileLoader.ts
│   │   ├── tmprogTxtLoader.ts
│   │   └── tmprogJsonLoader.ts
│   ├── services
│   │   └── ExecutionService.ts
│   ├── hooks
│   │   └── useExecution.ts
│   ├── utils
│   │   └── validators.ts
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── examples
│   ├── sample.tmprog.txt
│   └── sample.tmprog.json
├── .eslintrc.js
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-turing-machine
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the **File Loader** component to upload a Turing machine program in either `.tmprog.txt` or `.tmprog.json` format.
- Control the execution of the Turing machine using the provided buttons in the **Controls** component.
- Observe the tape and head position in real-time through the **Turing Visualizer**.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
