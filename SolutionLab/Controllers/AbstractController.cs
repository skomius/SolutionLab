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


    // GET: api/[controller]
    [HttpGet]
    public async Task<JsonResult> Get()
    {
        var obj = await repository.GetAll();
        return new JsonResult(obj);
    }

    // GET: api/[controller]/5
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

    // PUT: api/[controller]/5
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

    // POST: api/[controller]
    [HttpPost]
    public async Task<ActionResult<TEntity>> Post(TEntity obj)
    {
        await repository.Add(obj);
        return CreatedAtAction("Get", new { id = obj.Id }, obj);
    }

    // DELETE: api/[controller]/5
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

