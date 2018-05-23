namespace EmployeeTracker.Services.Dashboards
{
    using Charts;
    using System.Collections.Generic;

    public interface IDashboard
    {
        int TotalPositions { get; set; }
        int TotalOffices { get; set; }
        int TotalEmployees { get; set; }

        IEnumerable<ChartData> EmployeesPerYear { get; set; }

        IEnumerable<ChartData> EmployeesPerOffice { get; set; }
    }
}
