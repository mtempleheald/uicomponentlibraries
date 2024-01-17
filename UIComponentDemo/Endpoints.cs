namespace UIComponentDemo;
public static class Endpoints
{
    public static void MapEndpoints(this WebApplication app)
    {
        app.MapGet("/", () => Results.Content("""
            <a href="/fluentui">FluentUI</a>
            <br/>
            <a href="/shoelace">Shoelace</a>
            <br/>
            <a href="/svelte">Carbon Components Svelte</a>
        """, "text/html"));
        app.MapGet("/fluentui", Apis.FluentUI);
        app.MapGet("/shoelace", Apis.Shoelace);
        app.MapGet("/svelte", Apis.CarbonSvelte);
    }
}
