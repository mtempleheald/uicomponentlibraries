using Microsoft.AspNetCore.Http.HttpResults;

namespace UIComponentDemo.Shoelace;

public partial class Apis
{
    public static async Task<IResult> Shoelace(
        HttpContext httpContext,
        ILogger<Apis> logger
    )
    {
        return new RazorComponentResult(typeof(ShoelaceComponent), new
        {
            
        })
        {
            StatusCode = 200,
            ContentType = "text/html",
        };
    }
}
