﻿using System;
using System.Collections.Generic;

namespace OnboardingTask.Models
{
    public partial class Store
    {
        public Store()
        {
            Properties = new HashSet<Properties>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Properties> Properties { get; set; }
    }
}
