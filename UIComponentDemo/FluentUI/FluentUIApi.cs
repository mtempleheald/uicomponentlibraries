using Microsoft.AspNetCore.Http.HttpResults;

namespace UIComponentDemo.FluentUI;

public partial class Apis
{
    public static async Task<IResult> FluentUI(
        HttpContext httpContext,
        ILogger<Apis> logger
    )
    {
        return new RazorComponentResult(typeof(FluentUIComponent), new
        {
            
        })
        {
            StatusCode = 200,
            ContentType = "text/html",
        };
    }
}
