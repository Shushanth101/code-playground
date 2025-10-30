export const LANGUAGES = {
  javascript: {
    id: 1,
    name: "JavaScript",
    value: "javascript",
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
    defaultCode: `# Python Example
def greet():
    print("Hello, Python!")

greet()`,
  },
  java: {
    id: 3,
    name: "Java",
    value: "java",
    defaultCode: `// Java Example
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
  },
  cpp: {
    id: 4,
    name: "C++",
    value: "cpp",
    defaultCode: `// C++ Example
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
  },
};
