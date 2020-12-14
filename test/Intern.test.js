const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern", () => {
  describe("School", () => {
    it("Can set school via constructor", () => {
      const testValue = "UCLA";
      const emp = new Intern("Foo", 1, "test@test.com", testValue);
      expect(emp.school).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it("getRole() should return \"Intern\"", () => {
      const testValue = "Intern";
      const emp = new Intern("Foo", 1, "test@test.com", "UCLA");
      expect(emp.getRole()).toBe(testValue);
    });
  });

  describe("getSchool", () => {
    it("Can get school via getSchool()", () => {
      const { testValue } = "UCLA";
      const emp = new Intern("Foo", 1, "test@test.com", testValue);
      expect(emp.getSchool()).toBe(testValue);
    });
  });
});

