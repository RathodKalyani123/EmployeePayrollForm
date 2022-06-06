
    class EmployeePayrollData{
        get id() {
            return this._id;
        }
    
        set id(id) {
            this._id = id;
        }
      get name(){
            return this._name;
        }
        set name(name){
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(name))
            this._name = name;
            else
            throw "NAME IS INCORRECT!!!!!!!!!";
        }
    
        get profileImage(){
            return this._profileImage;
        }
        set profileImage(profileImage){
            this._profileImage = profileImage;
        }
        get gender(){
            return this._gender;
        }
        set gender(gender){
            let genderRegex = RegExp('^[female|male]+$');
            if(genderRegex.test(gener))
            this._gender = gender;
            else
            throw "Gendder is incorrect" ;
        }
        get department(){
            return this._department;
        }
        set department(department){
            this._department =department;
        }
        get salary(){
            return this._salary;
        }
        set salary(salary){
        let salaryRegx = RegExp('^[1-9][0-9]*$');
        if(salaryRegx.test(salary))
        this._salary =salary;
        else
        throw "Salary is incorrect !!!"
        }
        get startDate(){
            return this._startDate;
        }
        set startDate(startDate){
            this._startDate = startDate;
        }
    
        get notes() {
            return this._notes;
        }
    
        set notes(notes) {
            this._notes = notes;
        }
    
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
            return "Name = " + this.name + ", Profile Image = " + this.profileImage 
            + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = "
             + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
        }
    }


    window.addEventListener('DOMContentLoaded', (event) => {
        const name = document.querySelector('#name');
        const nameError = document.querySelector('.text-error');
        name.addEventListener('input', function () {
          if (name.value.length == 0) {
            nameError.textContent = "";
            return;
          }
          try {
            (new EmployeePayrollData()).name = name.value;
            nameError.textContent = "";
          }
          catch (e) {
            nameError.textContent = e;
          }
        });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
        });
    });
    
        const save = () => {
            try{
                let employeePayrollData=createEmployeePayroll();
                createAndUpdateStorage(employeePayrollData);
            }catch(e){
                return;
            }
        }

        const createEmployeePayroll=()=>{
            let employeePayrollData=new EmployeePayrollData();
            try{
                employeePayrollData._name=getInputValueById('#name');
            }catch (e) {
                setTextValue('.text-error',e);
                throw e;
             }
             employeePayrollData.profileImage=getSelectedValues('[name=profile').pop();
             
        }