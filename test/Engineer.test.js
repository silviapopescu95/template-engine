const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer", () => {
  describe("GitHub", () => {
    it("Can set GitHUb account via constructor", () => {
      const testValue = "GitHubUser";
      const emp = new Engineer("Foo", 1, "test@test.com", testValue);
      expect(emp.github).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it("getRole() should return \"Engineer\"", () => {
      const { testValue } = "Engineer";
      const emp = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
      expect(emp.getRole()).toBe(testValue);
    });
  });

  describe("getGithub", () => {
    it("Can get GitHub username via getGithub()", () => {
      const { testValue } = "GitHubUser";
      const emp = new Engineer("Foo", 1, "test@test.com", testValue);
      expect(emp.getGithub()).toBe(testValue);
    });
  });
});

