namespace EmployeeTracker.Services.Dashboards
{
    using Charts;
    using System.Collections.Generic;
    public class Dashboard:IDashboard
    {
        public int TotalPositions { get; set; }
        public int TotalOffices { get; set; }
        public int TotalEmployees { get; set; }

        public IEnumerable<ChartData> EmployeesPerYear { get; set; }
        public IEnumerable<ChartData> EmployeesPerOffice { get; set; }
    }
}
