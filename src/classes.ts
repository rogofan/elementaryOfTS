abstract class Department {
  static yearOfBirth = 1993;
  //   name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(this: Department): void {
    console.log("It department -ID: " + this.name);
  }
}

class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report has been found...");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please ass some value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting("D2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting department id: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(name: string) {
    if (name === "Karlos") {
      return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const AccountingInheritance = new ITDepartment("D1", ["Karlos"]);

const AccountingDepartment = Accounting.getInstance();
AccountingDepartment.mostRecentReport = "report 1";
console.log(AccountingDepartment.mostRecentReport);

// AccountingInstance.printEmployeeInformation();

// AccountingInstance.describe();
// AccountingInheritance.describe();
AccountingDepartment.addEmployee("Petr");
AccountingDepartment.addReport("Karlos je ADMIN");
AccountingDepartment.printEmployeeInformation();
AccountingDepartment.printReports();
AccountingDepartment.describe();
AccountingDepartment.addEmployee("Karlos");
AccountingDepartment.addEmployee("Diana");

// Static call
const employeeDiana = Department.createEmployee("Diana Krtičková");
console.log(employeeDiana, Department.yearOfBirth);
