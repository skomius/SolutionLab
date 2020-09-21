using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class CoffeeController : AbstractController<Coffee, IRepository<Coffee>>
{
    public CoffeeController(IRepository<Coffee> repository) : base(repository)
    {

    }
}
