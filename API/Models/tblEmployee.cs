//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace APIForReactApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblEmployee
    {
        public int emp_id { get; set; }
        public string emp_name { get; set; }
        public string emp_email { get; set; }
        public string emp_password { get; set; }
        public string emp_gender { get; set; }
        public Nullable<int> noOfDependants { get; set; }
        public Nullable<decimal> Additions { get; set; }
        public Nullable<decimal> ITex { get; set; }
        public Nullable<decimal> CPP { get; set; }
        public Nullable<decimal> EI { get; set; }
        public Nullable<decimal> FinalSalary { get; set; }
    }
}