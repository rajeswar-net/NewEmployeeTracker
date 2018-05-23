namespace EmployeeTracker.Api.Controllers.Dashboards
{
    using Services.Dashboards;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.Http.Description;

    [RoutePrefix("api/dashboards")]
    public class DashboardsController : ApiController
    {
        private readonly IDashboardService _service;
        public DashboardsController(IDashboardService service)
        {
            _service = service;
        }

        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IDashboard))]
        public async Task<IHttpActionResult> GetDashboardSettings()
        {
            var result = await _service.GetDashboardSettingAsync();
            return Ok(result);
        }
    }
}
