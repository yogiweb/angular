export class Employee {
    constructor (
        public id: number,
        public name: string,
        public gender: string,
        public email: string,
        public phoneNMumber: number,
        public contractPrefarence: string,
        public dateOfBirth: Date,
        public department: string,
        public IsActive: boolean,
        public photoPath: string,
    ) {  }
}