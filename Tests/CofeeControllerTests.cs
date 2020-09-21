using NUnit.Framework;
using Moq;
using System.Threading.Tasks;

public class CofeeControllerTests
{
    [Test]
    public void CoffeeController_Get_ShouldReturnCoffee()
    {
        var mock = new Mock<IRepository<Coffee>>();
        mock.Setup(p => p.Get(1)).Returns(new Task<Coffee>(() => new Coffee() {
            Id = 1,
            Name = "Test",
            Price = 1,
            PicUrl = "Test"
        }));

        var controller = new CoffeeController(mock.Object as CoffeeRepository);
        var result = controller.Get(1).Result.Value;

        Assert.AreEqual(result.Id, 1);
        Assert.AreEqual(result.Name, "Test");
        Assert.AreEqual(result.Price, 1);
        Assert.AreEqual(result.PicUrl, "Test");
    }
}
