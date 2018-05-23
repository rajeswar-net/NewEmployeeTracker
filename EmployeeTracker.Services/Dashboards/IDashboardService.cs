namespace EmployeeTracker.Services.Dashboards
{
    using System.Threading.Tasks;

    public interface IDashboardService
    {
        Task<Dashboard> GetDashboardSettingAsync();
    }
}
