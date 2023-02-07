using Microsoft.AspNetCore.Mvc;
using Mission04_owenk7.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_owenk7.controllers
{
    public class subviewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult FormView()
        {
            return View();
        }

        [HttpPost]
        public IActionResult FormView(FormModel model)
        {
            return View();
        }
    }
}