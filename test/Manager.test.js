const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("Office Number", () => {
    it("Can set office number via constructor argument", () => {
      const testValue = 100;
      const emp = new Manager("Foo", 1, "test@test.com", testValue);
      expect(emp.officeNumber).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it('getRole() should return "Manager"', () => {
      const testValue = "Manager";
      const emp = new Manager("Foo", 1, "test@test.com", 100);
      expect(emp.getRole()).toBe(testValue);
    });
  });

  describe("getOfficeNumber", () => {
    it("Can get office number via getOffice()", () => {
      const { testValue } = 100;
      const emp = new Manager("Foo", 1, "test@test.com", testValue);
      expect(emp.getOfficeNumber()).toBe(testValue);
    });
  });
});

