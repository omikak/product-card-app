class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  intro() {
    return `${super.intro()} I am studying ${this.major}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  intro() {
    return `${super.intro()} I teach ${this.subject}.`;
  }
}

export default function Inheritance() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Person Class Hierarchy
        </h2>

        {people.map((p, i) => (
          <div key={i} className="border rounded p-4 mb-3">
            <h3 className="font-semibold">
              {p.name} ({p.constructor.name})
            </h3>
            <p className="text-sm text-gray-600">Age: {p.age}</p>
            <p className="italic mt-1">{p.intro()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
