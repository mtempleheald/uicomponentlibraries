# UI Component Libraries

A cursory investigation into UI component libraries, is it worth using one?  
Specifically, for a customer-facing HTMX application with a .NET8+ backend, where the website maintenance will be 100% developer-free.

## Initial thoughts

- Accessibility is hard, if someone has done this hard work already, it makes sense to build on top of this rather than repeat the effort
- Theming is critical - I am only interested in component libraries because I want to scale well into the future, if I can't easily customise components with a simple theme it isn't going to scale to multiple customers
- Ethos matters - What is the library for?  Who is it for?  What are its priorities?  If they don't align with mine I'd be well advised to avoid
- Future proofing - Frameworks come and go, it is better to rely on a framework-agnostic component library (if any), typically that means web components
- Copy/paste open source component examples seem to be gaining traction (vs traditional UI components which are dependencies of the project) e.g. shadcn
- Working > Accessibility > UX (inc performance) > UI (theming) > DX

## Vision Statement prior to the investigation (this may change):

- Keep dependencies to a minimum
- Must be accessible
- Avoid tailwind or any non-standard CSS methods, the theme ideally consists of nothing but CSS variables
- Avoid build steps if possible

## Candidates

- Fluent UI - Webcomponent library designed and maintained by Microsoft, for consistent feel across their sites and applications
- Material UI - Webcomponent library following Google's Material design philosophy for consistent look and feel across native Android and web
- Shoelace - webcomponent library independent from corporate design, linked to fontawesome
- Fluent Blazor - Blazor components built on top of FluentUI's webcomponents, using web assembly to perform logic written in C# in the browser
- ...
