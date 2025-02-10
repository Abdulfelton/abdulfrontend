
<template>
   <!-- Employee Table -->
   <table class="employee-table">
      <thead>
        <tr>
          <th>Payroll ID</th>
          <th>Employee ID</th>
          <th>Hours Worked </th>
          <th>Leave Deductions</th>
          <th>Salary</th>
          <th>Action</th> <!-- Add header for the action column -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="payroll in $store.state.payroll" :key="payroll.payroll_id">
          <td>{{ payroll.payroll_id }}</td>
          <td>{{ payroll.employee_id }}</td>
          <td>{{ payroll.hours_worked }}</td>
          <td>{{ payroll.leave_deductions }}</td>
          <td>{{ payroll.final_salary }}</td>
          <td><button @click="deletePayroll(payroll.payroll_id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
      <!-- Card with Button -->
</template>
<script>

 export default{
  mounted(){
    this.$store.dispatch('getPayroll');
    },
  methods: {
deletePayroll(payroll_id){
   this.$store.dispatch('deletePayroll',payroll_id);
  }

}
  }
// department ,position,

</script>


<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}
.employee-table {
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  background-color: #F4F4F9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 20px;
}
.employee-table th, .employee-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.employee-table th {
  background-color: #007BFF;
  color: white;
  text-transform: uppercase;
}
.employee-table tr:hover {
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.3s ease-in-out;
}
.employee-table tr:last-child td {
  border-bottom: none;
}
button {
  background-color: #FF0000;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #930000;
}
.add-employee-btn {
  background-color: #28A745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}
.add-employee-btn:hover {
  background-color: #218838;
}
.form-container {
  background-color: #F9F9F9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
}
form label {
  display: block;
  margin: 10px 0 5px;
}
form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
form button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
form button:hover {
  background-color: #0056B3;
}
</style>