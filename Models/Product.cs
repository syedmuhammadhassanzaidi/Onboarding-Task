using System;
using System.Collections.Generic;

namespace OnboardingTask.Models
{
    public partial class Product
    {
        public Product()
        {
            Properties = new HashSet<Properties>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Properties> Properties { get; set; }
    }
}
