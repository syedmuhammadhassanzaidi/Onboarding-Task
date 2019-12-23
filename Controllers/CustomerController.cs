using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnboardingTask.Models;

namespace OnboardingTask.Controllers
{
    [ApiController]
    [Route("api/customer")]
    public class CustomerController : Controller
    {
        private readonly onboardingContext _dbContext;
        public CustomerController(onboardingContext context)
        {
            _dbContext = context;
        }
        //[HttpGet]
        //public IActionResult GetCusotmers()
        //{
        //    var customers = _dbContext.Customer;
        //    return Ok(customers);
        //}

        //[HttpPost]
        //public void AddCustomer()
        //{
            
        //}
    }
}