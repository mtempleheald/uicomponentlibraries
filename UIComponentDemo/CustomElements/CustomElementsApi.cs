using Microsoft.AspNetCore.Http.HttpResults;

namespace UIComponentDemo.CustomElements;

public partial class Apis
{
    public static async Task<IResult> CustomElements(
        HttpContext httpContext,
        ILogger<Apis> logger
    )
    {
        return new RazorComponentResult(typeof(CustomElementsComponent), new
        {
            
        })
        {
            StatusCode = 200,
            ContentType = "text/html",
        };
    }
}
