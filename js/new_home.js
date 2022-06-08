window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

let innerHtml = `${headerHtml}`;
let employeePayrollDataList = createEmployeePayrollJSON();

for(const employeePayrollData of employeePayrollDataList){
innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" src="${employeePayrollData._profileImage}" alt="profile_img-1"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>
        
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="../assets/images/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/images/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Kalyani Rathod',
        _gender: 'female',
        _department: [
          'HR',
          'Engineer'
        ],
        _salary: 20000000,
        _startDate: '07 jun 2022',
        _note: 'Employee payroll application',
        _id: new Date().getTime(),
        _profileImage: '../assets/images/Ellipse -01.png'
      },
      {
        _name: 'Ayansh Jadhao',
        _gender: 'male',
        _department: [
          'HR',
          'sales'
        ],
        _salary: 4000000,
        _startDate: '07 jun 2022',
        _note: 'Employee details',
        _id: new Date().getTime(),
        _profileImage: '../assets/images/Ellipse -03.png'
      },
      {
        _name: 'Raj kawale',
        _gender: 'male',
        _department: [
          'HR'
         
        ],
        _salary: 50000000,
        _startDate: '08 jun 2022',
        _note: 'Employee payroll application',
        _id: new Date().getTime(),
        _profileImage: '../assets/images/Ellipse -08.png'
      },
      {
        _name: 'Swati Badole',
        _gender: 'female',
        _department: [
          'HR',
          'sales'
        ],
        _salary: 60000000,
        _startDate: '07 jun 2022',
        _note: 'Employee payroll application',
        _id: new Date().getTime(),
        _profileImage: '../assets/images/Ellipse -07.png'
      },
    ];
    return employeePayrollListLocal;
  }
  const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
  }