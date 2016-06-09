using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace zingchart_dashboard.ServiceLayer
{
    public class PlanAccess : IPlanAccess
    {
        private dashboard_demo dbContext;

        public PlanAccess(dashboard_demo context)
        {
            this.dbContext = context;
        }

        public IEnumerable<plan> GetAllPlans()
        {
            return dbContext.plans;
        }
    }
}