using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeTracker.Services.Employees
{
   public interface IOffice
    {
         int Id { get; set; }
         string OfficeName { get; set; }
    }
}
