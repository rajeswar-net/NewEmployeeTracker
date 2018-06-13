namespace EmployeeTracker.Services.Employees
{
    using Dapper;
    using SqlServer;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class EmployeeService : IEmployeeService
    {
        private readonly IRepository _repo;
        public EmployeeService(IRepository repo)
        {
            _repo = repo;
        }

        public async Task<IEnumerable<Employee>> AddEmployeeAsync(IEmployee newEmployee)
        {
            var addEmployeeParams = new DynamicParameters();
            addEmployeeParams.Add("@FirstName", newEmployee.FirstName);
            addEmployeeParams.Add("@LastName", newEmployee.LastName);
            addEmployeeParams.Add("@PositionId", newEmployee.PositionId);
            addEmployeeParams.Add("@OfficeId", newEmployee.officeId);
            addEmployeeParams.Add("@Sex", newEmployee.Sex);
            addEmployeeParams.Add("@Age", newEmployee.Age);
            addEmployeeParams.Add("@StartDate", newEmployee.StartDate);
            addEmployeeParams.Add("@Salary", newEmployee.Salary);
            addEmployeeParams.Add("@Updated_Utc", DateTime.UtcNow);
            return await _repo.WithConnection(async c =>
            {
                var results = await c.QueryAsync<Employee>("AddEmployees",
                    addEmployeeParams,
                    commandType: CommandType.StoredProcedure);
                return results;
            });
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync()
        {
            return await _repo.WithConnection(async c =>
            {
                var results = await c.QueryAsync<Employee>("GetEmployees", commandType: CommandType.StoredProcedure);
                return results;
            });
        }
        public async Task<IEnumerable<Office>> GetOfficesAsync()
        {
            return await _repo.WithConnection(async c =>
            {
                var results = await c.QueryAsync<Office>("GetOffices", commandType: CommandType.StoredProcedure);
                return results;
            });
        }
        public async Task<IEnumerable<Position>> GetPositionsAsync()
        {
            return await _repo.WithConnection(async c =>
            {
                var results = await c.QueryAsync<Position>("GetPositions", commandType: CommandType.StoredProcedure);
                return results;
            });
        }
    }
}
