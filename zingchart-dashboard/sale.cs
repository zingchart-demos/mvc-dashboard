//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace zingchart_dashboard
{
    using System;
    using System.Collections.Generic;
    
    public partial class sale
    {
        public int planId { get; set; }
        public System.DateTime date { get; set; }
        public int id { get; set; }
    
        public virtual plan plan { get; set; }
    }
}
