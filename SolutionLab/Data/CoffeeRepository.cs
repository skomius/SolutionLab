
public class CoffeeRepository : AbstractRepository<Coffee, CoffeeContext>
{
    public CoffeeRepository(CoffeeContext context) : base(context)
    {

    }
}