const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Can instantiate Employee instance", () => {
      const emp = new Employee();
      expect(typeof(emp)).toBe("object");
    });
  });

  describe("Name", () => {
    it("Can set name via constructor arguments", () => {
      const name = "Alice";
      const emp = new Employee(name);
      expect(emp.name).toBe(name);
    });
  });
  
  describe("ID", () => {
    it("Can set id via constructor argument", () => {
      const testValue = 100;
      const emp = new Employee("Foo", testValue);
      expect(emp.id).toBe(testValue);
    });
  });

  describe("Email", () => {
    it("Can set email via constructor argument", () => {
      const testValue = "test@test.com";
      const emp = new Employee("Foo", 1, testValue);
      expect(emp.email).toBe(testValue);
    });
  });

  describe("getName", () => {
    it("Can get name via getName()", () => {
      const testValue = "Alice";
      const emp = new Employee(testValue);
      expect(emp.getName()).toBe(testValue);
    });
  });

  describe("getId", () => {
    it("Can get id via getId()", () => {
      const testValue = 100;
      const emp = new Employee("Foo", testValue);
      expect(emp.getId()).toBe(testValue);
    });
  });

  describe("getEmail", () => {
    it("Can get email via getEmail()", () => {
      const testValue = "test@test.com";
      const emp = new Employee("Foo", 1, testValue);
      expect(emp.getEmail()).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
      const testValue = "Employee";
      const emp = new Employee("Alice", 1, "test@test.com");
      expect(emp.getRole()).toBe(testValue);
    });
  })
});

