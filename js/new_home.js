window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
    `<tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
    <tr>
    <td><img class = "Profile" src="../assets/images/Ellipse -01.png" alt="profile_img-1"></td>
    <td>Surraiya Nirban</td>
    <td>female</td>
    <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Engineer</div>
    </td>
    <td>&#8377; 5000000</td>
    <td>07 jun 2022</td>
    <td>
        <img src="../assets/images/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/images/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
    </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}