using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_owenk7.Models
{
    public class FormModel
    {
        // variables that match the name in the form
        // validation with required and range fields from 0-100
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int group { get; set; }

        [Required]
        [Range(0, 100)]
        public int quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public int midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public int final { get; set; }

        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}