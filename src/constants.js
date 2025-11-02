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

export const DEFAULT_CODE_SNIPPETS = {
  javascript: {
    defaultCode: `// JavaScript Code
console.log("Hello World!");

function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result);`,
  },
  python: {
    defaultCode: `# Python Code
print("Hello World!")

def add(a, b):
    return a + b

result = add(5, 3)
print(result)`,
  },
  java: {
    defaultCode: `// Java Code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        
        int result = add(5, 3);
        System.out.println(result);
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`,
  },
  cpp: {
    defaultCode: `// C++ Code
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    cout << "Hello World!" << endl;
    
    int result = add(5, 3);
    cout << result << endl;
    
    return 0;
}`,
  },
  typescript: {
    defaultCode: `// TypeScript Code
function add(a: number, b: number): number {
    return a + b;
}

const result: number = add(5, 3);
console.log("Hello World!");
console.log(result);`,
  },
  go: {
    defaultCode: `// Go Code
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    fmt.Println("Hello World!")
    
    result := add(5, 3)
    fmt.Println(result)
}`,
  },
  
  csharp: {
    defaultCode: `// C# Code
using System;

class Program {
    static int Add(int a, int b) {
        return a + b;
    }
    
    static void Main(string[] args) {
        Console.WriteLine("Hello World!");
        
        int result = Add(5, 3);
        Console.WriteLine(result);
    }
}`
  },
  
  ruby: {
    defaultCode: `# Ruby Code
def add(a, b)
  a + b
end

puts "Hello World!"
result = add(5, 3)
puts result`
  },

  rust: {
    defaultCode: `// Rust Code
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    println!("Hello World!");
    
    let result = add(5, 3);
    println!("{}", result);
}`
  },

  php: {
    defaultCode: `<?php
// PHP Code
function add($a, $b) {
    return $a + $b;
}

echo "Hello World!\n";
$result = add(5, 3);
echo $result . "\n";
?>`
  }
};
