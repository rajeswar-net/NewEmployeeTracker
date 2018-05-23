﻿namespace EmployeeTracker.Services.Employees
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee>> GetEmployeesAsync();
    }
}