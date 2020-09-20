using NUnit.Framework;
using SolutionLab.Controllers;
using Microsoft.AspNetCore.Mvc.Core;

public class Tests
{
    [SetUp]
    public void Setup()
    {

    }

    [Test]
    public void Test1()
    {
        var controller = new ValuesController();
        var result = controller.Get(3).Value;

        Assert.AreEqual(3.ToString(), result);
    }
}
