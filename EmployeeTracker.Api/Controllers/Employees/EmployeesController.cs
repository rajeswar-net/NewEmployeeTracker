
namespace EmployeeTracker.Api.Controllers.Employees
{
    using Services.Employees;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.Http.Description;

    [RoutePrefix("api/employees")]
    public class EmployeesController : ApiController
    {
        private readonly IEmployeeService _service;

        public EmployeesController(IEmployeeService service)
        {
            _service = service;
        }

        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IEmployee))]
        public async Task<IHttpActionResult> GetEmployees()
        {
            var result = _service.GetEmployeesAsync();
            return Ok(result);
        }
    }
}
