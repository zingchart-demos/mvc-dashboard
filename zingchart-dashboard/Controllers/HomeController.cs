using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using zingchart_dashboard.ServiceLayer;
using System.Dynamic;

namespace zingchart_dashboard.Controllers
{
    public class HomeController : Controller
    {
        private dashboard_demo dbContext;
        private ISaleAccess saleAccess;
        private IPlanAccess planAccess;

        // HomeController Constructor
        public HomeController()
        {
            // Initialize serviceLayer through dependency injection
            dbContext = new dashboard_demo();
            saleAccess = new SaleAccess(dbContext);
            planAccess = new PlanAccess(dbContext);
        }

        // GET: Home
        public ActionResult Index()
        {
            var allPlans = planAccess.GetAllPlans();
            var allSales = saleAccess.GetAllSales();

            // dynamic allows for javascript like object adding properties!
            dynamic sumPlanTotal = new ExpandoObject();
            sumPlanTotal.name = "Sum Total";
            sumPlanTotal.users = 0;
            sumPlanTotal.price = 0;
            sumPlanTotal.total = 0;

            // Instantiate ViewBag list so we can dynamically add entries
            ViewBag.monthlyPlans = new List<Object>();

            foreach(dynamic plan in allPlans)
            {
                // Create new dynamic object to display in DOM
                dynamic planEntry = new ExpandoObject();
                planEntry.name = plan.name;
                planEntry.users = plan.sales.Count;
                planEntry.price = plan.price;
                planEntry.total = plan.sales.Count * plan.price;
                ViewBag.monthlyPlans.Add(planEntry);

                // Calculate attributes for last row
                sumPlanTotal.users += plan.sales.Count;
                sumPlanTotal.total += plan.sales.Count * plan.price;
            }

            ViewBag.monthlyPlans.Add(sumPlanTotal);


            return View();
        }
    }
}