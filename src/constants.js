import { version } from "react";

export const LANGUAGES = {
  javascript: {
    id: 1,
    name: "JavaScript",
    value: "javascript",
    version: "18.15.0",
    extension: "js",
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
    version: "3.10.0",
    extension: "py",
    defaultCode: `# Python Example
def greet():
    print("Hello, Python!")

greet()`,
  },
  java: {
    id: 3,
    name: "Java",
    value: "java",
    version: "15.0.2",
    extension: "java",
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
    version: "5.0.3",
    extension: "ts",
    defaultCode: `// TypeScript Example
function greet(name: string = "TypeScript"): void {
  console.log(\`Hello, ${name}!\`);
}

greet();
`,
  },
  cpp: {
    id: 5,
    name: "C++",
    value: "cpp",
    version: "10.2.0",
    extension: "cpp",
    defaultCode: `// C++ Example
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
  go: {
    id: 6,
    name: "Go",
    value: "go",
    version: "1.19.0",
    extension: "go",
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
    id: 7,
    name: "C#",
    value: "csharp",
    version: "4.1.0",
    extension: "cs",
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
    id: 8,
    name: "Ruby",
    value: "ruby",
    version: "3.1.0",
    extension: "rb",
    defaultCode: `# Ruby Code
def add(a, b)
  a + b
end

puts "Hello World!"
result = add(5, 3)
puts result`
  },

  rust: {
    id: 9,
    name: "Rust",
    value: "rust",
    version: "1.5.0",
    extension: "rs",
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
    id: 10,
    name: "PHP",
    value: "php",
    version: "8.1.0",
    extension: "php",
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
  c:{
    defaultCode: `// C Code
#include <stdio.h>
int add(int a, int b) {
    return a + b;
}
int main() {
    printf("Hello World!\\n");  
    int result = add(5, 3);
    printf("%d\\n", result);
    return 0;
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
