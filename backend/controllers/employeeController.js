import Employees from "../model/employeeModel.js";

//Get All Employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();

    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found!" });
    }

    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employees.findById(id);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Add new Employee
export const addEmployee = async (req, res) => {
  try {
    const newEmployee = req.body;
    const existedEmail = await Employees.findOne({ email: newEmployee.email });

    if (existedEmail) {
      return res.status(409).json({ message: "Email is already existed!" });
    }

    // Create and save the employee
    const createdEmployee = await Employees.create(newEmployee);

    // Send back the created employee
    res.status(201).json(createdEmployee);
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addTaskEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const taskData = req.body;

    const updateTaskEmployee = await Employees.findByIdAndUpdate(
      employeeId,
      { $push: { tasks: taskData } },
      { new: true }
    );

    if (!updateTaskEmployee) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    res.status(200).json(updateTaskEmployee);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all tasks for an employee
export const getEmployeeTasks = async (req, res) => {
  try {
    const { employeeId } = req.params;
    
    const employee = await Employees.findById(employeeId);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    res.status(200).json(employee.tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a task for an employee
export const updateEmployeeTask = async (req, res) => {
  try {
    const { employeeId, taskId } = req.params;
    const updateData = req.body;
    
    const employee = await Employees.findById(employeeId);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    const taskIndex = employee.tasks.findIndex(task => task._id.toString() === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found!" });
    }
    
    // Update the task fields
    Object.keys(updateData).forEach(key => {
      employee.tasks[taskIndex][key] = updateData[key];
    });
    
    await employee.save();
    
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a task for an employee
export const deleteEmployeeTask = async (req, res) => {
  try {
    const { employeeId, taskId } = req.params;
    
    const updatedEmployee = await Employees.findByIdAndUpdate(
      employeeId,
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );
    
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    res.status(200).json({ message: "Task deleted successfully", employee: updatedEmployee });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an employee
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const updatedEmployee = await Employees.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedEmployee = await Employees.findByIdAndDelete(id);
    
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ message: "Server error" });
  }
};