import { version } from "react";

export const LANGUAGES = {
  javascript: {
    id: 1,
    name: "JavaScript",
    value: "javascript",
    version:"18.15.0",
    defaultCode: `// JavaScript Example
function greet() {
  console.log("Hello, JavaScript!");
}
greet();`,
  },
  python: {
    id: 2,
    name: "Python",
    value: "python",
    version:"3.10.0",
    defaultCode: `# Python Example
def greet():
    print("Hello, Python!")

greet()`,
  },
  java: {
    id: 3,
    name: "Java",
    value: "java",
    version:"15.0.2",
    defaultCode: `// Java Example
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
  },
  typescript: {
    id: 4,
    name: "Typescript",
    value: "typescript",
    version:"5.0.3",
    defaultCode: `// TypeScript Example
function greet(name: string = "TypeScript"): void {
  console.log(\`Hello, ${name}!\`);
}

greet();
`,
  },
};
