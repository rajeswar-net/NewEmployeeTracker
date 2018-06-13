namespace EmployeeTracker.Services.Employees
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee>> GetEmployeesAsync();

        Task<IEnumerable<Employee>> AddEmployeeAsync(IEmployee newEmployee);

        Task<IEnumerable<Position>> GetPositionsAsync();
        Task<IEnumerable<Office>> GetOfficesAsync();
    }
}
