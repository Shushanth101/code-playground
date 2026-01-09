export const defaultCodeSnippets = {
  "javascript": {
    "filename": "index.js",
    "code": `// JavaScript - Node.js
console.log("Hello, World!");
`
  },

  "python": {
    "filename": "main.py",
    "code": `# Python
print("Hello, World!")
`
  },

  "java": {
    "filename": "Main.java",
    "code": `// Java
import java.util.*;
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`
  },

  "c": {
    "filename": "main.c",
    "code": `// C
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`
  },

  "c++": {
    "filename": "main.cpp",
    "code": `// C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`
  },
  "nls":{
    "filename": "unknown.nls",
    "code":"No language selected please select a language to start coding."

  }
};

export const languageIcons = {
  javascript: "fa-brands fa-js",
  python: "fa-brands fa-python",
  java: "fa-brands fa-java",
  c: "fa-solid fa-c",
  "c++": "fa-solid fa-code",
  "nls": "fa-solid fa-question"
};
