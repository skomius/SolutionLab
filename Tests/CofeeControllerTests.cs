using NUnit.Framework;
using Moq;
using System.Threading.Tasks;

public class CofeeControllerTests
{
    [Test]
    public async Task CoffeeController_Get_ShouldReturnCoffee()
    {
        var mock = new Mock<IRepository<Coffee>>();
   
        mock.Setup(p => p.Get(It.IsAny<int>())).Returns(Task.FromResult<Coffee>(new Coffee()
        {
            Id = 1,
            Name = "Test",
            Price = 1,
            PicUrl = "Test"
        }));

        var controller = new CoffeeController(mock.Object);
        var result = await controller.Get(1);

        Assert.AreEqual(result.Value.Id, 1);
        Assert.AreEqual(result.Value.Name, "Test");
        Assert.AreEqual(result.Value.Price, 1);
        Assert.AreEqual(result.Value.PicUrl, "Test");
    }
}
