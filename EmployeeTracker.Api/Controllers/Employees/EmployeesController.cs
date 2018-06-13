
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
        private readonly IEmployee _employee;

        public EmployeesController(IEmployeeService service)
        {
            _service = service;
        }
        public EmployeesController(IEmployeeService service, IEmployee employee)
        {
            _service = service;
            _employee = employee;
        }


        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IEmployee))]
        public async Task<IHttpActionResult> GetEmployees()
        {
            var result = await _service.GetEmployeesAsync();
            return Ok(result);
        }
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(IEmployee))]
        public async Task<IHttpActionResult> AddEmployee([FromBody] Employee newEmployee)
        {
            IEmployee employee = newEmployee;
            var result = await _service.AddEmployeeAsync(employee);
            return Ok(result);
        }

        [Route("~/api/offices")]
        [HttpGet]
        [ResponseType(typeof(IOffice))]
        public async Task<IHttpActionResult> GetOffices()
        {
            var result = await _service.GetOfficesAsync();
            return Ok(result);
        }

        [Route("~/api/positions")]
        [HttpGet]
        [ResponseType(typeof(IPosition))]
        public async Task<IHttpActionResult> GetPositions()
        {
            var result = await _service.GetPositionsAsync();
            return Ok(result);
        }
    }
}
