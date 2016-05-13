using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Optimization;

namespace zingchart_dashboard
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/home").Include(
                          "~/Scripts/ZingChart/zingchart.min.js",
                          "~/Scripts/ZingChart/models/total_revenue_area_chart.js",
                          "~/Scripts/ZingChart/models/plans_breakout_pie_chart.js",
                          "~/Scripts/ZingChart/home.js"));
        }
    }
}
