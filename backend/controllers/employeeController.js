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
    console.error("Error :", error);
    res.status(500).json({ message: "Server error" });
  }
};