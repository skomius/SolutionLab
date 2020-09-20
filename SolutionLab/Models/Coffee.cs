using System;
using Microsoft.EntityFrameworkCore;


public class CoffeeContext : DbContext
{
    public DbSet<Coffee> ScheduledTaxes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=Coffee.db");
}

public class Coffee: IEntity 
{
    public Guid CoffeeId { get; set; }

    public string Name { get; set; }

    public Double Price { get; set; }

    public String PicUrl { get; set; }
}
