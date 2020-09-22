using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace SolutionLab
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            using (var serviceScope = host.Services.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<CoffeeContext>();
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                context.AddRange(
                    new Coffee()
                    {
                        Name = "Espresso macchiatto",
                        Price = 10,
                        PicUrl = "media/espresso_macchiatto.jpg"
                    },
                    new Coffee()
                    {
                        Name = "Cappuccino",
                        Price = 10,
                        PicUrl = "media/cappuccino.jpg"
                    },
                    new Coffee()
                    {
                        Name = "Coffee creme",
                        Price = 10,
                        PicUrl = "media/caffe_creme.jpg"
                    },
                    new Coffee()
                    {
                        Name = "Caffe latte",
                        Price = 10,
                        PicUrl = "media/cafe_latte.jpg"
                    },
                     new Coffee()
                     {
                         Name = "Espresso doppio ",
                         Price = 10,
                         PicUrl = "media/espresso_doppio.jpg"
                     },
                      new Coffee()
                      {
                          Name = "Freshpresso",
                          Price = 10,
                          PicUrl = "media/freshpresso.jpg"
                      },
                      new Coffee()
                      {
                          Name = "Kavos glotnutis ",
                          Price = 10,
                          PicUrl = "media/coffee_smoothie.jpg"
                      }
                );

                context.SaveChanges();
            };

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
