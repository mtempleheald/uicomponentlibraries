using UIComponentDemo;

var builder = WebApplication.CreateSlimBuilder(args);

builder.Services.AddRazorComponents();
builder.Services.AddHttpContextAccessor();

builder.WebHost.UseStaticWebAssets();

var app = builder.Build();

app.UseStaticFiles();

app.MapEndpoints();

app.Run();
