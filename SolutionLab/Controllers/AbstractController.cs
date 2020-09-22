using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public abstract class AbstractController<TEntity, TRepository> : ControllerBase
        where TEntity : class, IEntity
        where TRepository : IRepository<TEntity>
{
    private readonly TRepository repository;

    public AbstractController(TRepository repository)
    {
        this.repository = repository;
    }

    [HttpGet]
    public async Task<JsonResult> Get()
    {
        var obj = await repository.GetAll();
        return new JsonResult(obj);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TEntity>> Get(int id)
    {
        
        var obj = await repository.Get(id);
        if (obj == null)
        {
            return NotFound();
        }
        return obj;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, TEntity obj)
    {
        if (id != obj.Id)
        {
            return BadRequest();
        }
        await repository.Update(obj);
        return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<TEntity>> Post(TEntity obj)
    {
        obj = await repository.Add(obj);
        return new JsonResult(obj);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<TEntity>> Delete(int id)
    {
        var obj = await repository.Delete(id);
        if (obj == null)
        {
            return NotFound();
        }
        return obj;
    }
}

