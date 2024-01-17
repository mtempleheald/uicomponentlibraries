using Microsoft.AspNetCore.Http.HttpResults;

namespace UIComponentDemo;

public partial class Apis
{
    public static async Task<IResult> CarbonSvelte(
        HttpContext httpContext,
        ILogger<Apis> logger
    )
    {
        return new RazorComponentResult(typeof(CarbonSvelteComponent), new
        {
            
        })
        {
            StatusCode = 200,
            ContentType = "text/html",
        };
    }
}
