import { MoreHorizontal } from "lucide-react";
import {
  getStatusColor,
  getPriorityColor,
  getProgressColor,
} from "../../../utils/employee_task_progress";
import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../../../context/EmployeeContext";

const HRTaskProgressTableBody = () => {
  const { employees } = useContext(EmployeeContext);
  const [tasks, setTasks] = useState<any[]>([]); // later you can type it properly

  useEffect(() => {
    // Flatten all tasks from all employees
    const allTasks = employees
      .filter((emp) => emp.tasks) // only employees with tasks
      .flatMap((emp) => emp.tasks); // flatMap merges arrays into one

    setTasks(allTasks);
  }, [employees]);

  return (
    <tbody className="divide-y divide-slate-800">
      {tasks.map((task) => (
        <tr key={task.id} className="hover:bg-slate-800/60 transition-colors">
          <td className="py-4 px-6">
            <div>
              <div className="font-medium text-slate-100">{task.title}</div>
              <div className="text-sm text-slate-400 mt-1">{task.category}</div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">{task.assignee}</td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                task.status
              )}`}
            >
              {task.status}
            </span>
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getProgressColor(
                    task.progress
                  )}`}
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <span className="text-sm text-slate-300 min-w-[3rem]">
                {task.progress}%
              </span>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {task.dueDate.slice(1, 10)}
          </td>
          <td className="py-4 px-6 text-right">
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HRTaskProgressTableBody;
