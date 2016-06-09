using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zingchart_dashboard.ServiceLayer
{
    interface IPlanAccess
    {
        IEnumerable<plan> GetAllPlans();
    }
}
