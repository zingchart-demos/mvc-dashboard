using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace zingchart_dashboard.ServiceLayer
{
    public class SaleAccess : ISaleAccess
    {
        private dashboard_demo dbContext;

        public SaleAccess(dashboard_demo context)
        {
            this.dbContext = context;
        }

        // Grab all sales records
        public IEnumerable<sale> GetAllSales()
        {
            return dbContext.sales;
        }

        // Lets Generate a couple data points
        public void GenerateSales()
        {
            int[] planIds = { 5, 4, 2, 3, 1 };
            int i = 1;
            int j = 1;

            // Arbitrary loop to generate 10 entries
            while (j < 3)
            {
                sale saleEntry = new sale
                {
                    // DateTime(year,month,day)
                    date = new DateTime(2016, 1, i),
                    planId = planIds[i++ - 1]
                };

                // Add Entry to DB
                dbContext.sales.Add(saleEntry);

                if (i == 6)
                {
                    i = 1;
                    j++;
                }
            }

            dbContext.SaveChanges();
        }
    }
}