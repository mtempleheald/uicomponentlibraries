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

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/webcomponents) - Webcomponent library designed and maintained by Microsoft, for consistent feel across their sites and applications
- [Material Web components](https://github.com/material-components/material-web) - Webcomponent library following Google's Material design philosophy for consistent look and feel across native Android and web
- [Shoelace](https://github.com/shoelace-style/shoelace) - webcomponent library independent from corporate design, linked to fontawesome, built on top of Lit
- Fluent Blazor - Blazor components built on top of FluentUI's webcomponents, using web assembly to perform logic written in C# in the browser
- [Carbon components Svelte](https://github.com/carbon-design-system/carbon-components-svelte), compiled as web components/ custom elements - Svelte is pleasant to work with, this proves whether we can use Svelte component libraries too.
- Custom elements built using [Lit](https://github.com/lit/lit), similar in essence to what Shoelace does, but kept simpler
- Custom elements built [from scratch](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_custom_elements) - do we want a dependency on Lit/Shoelace?  If we follow web standards directly we're more future proof.
- ...

# Criteria

- Must align to the vision statement above or have a very good reason not to
- Must have all key form controls:
  - Text field + variants, e.g. email, password, text area
  - Number field
  - Datepicker
  - Checkbox/switch
  - Buttons
  - Select list/ drop down
  - Searchable typeahead
- Must have the option to extend with custom components without awaiting upstream PR approval
- Must have a consistent look and feel across all components, defined by a theme
- Must be able to tweak and/or replace the theme, dynamically selecting the correct theme based on brand is a backend concern not for this
- Must be flexible to override styling on individual components for special cases
- Must not be horrendous to work with, a learning curve is ok, but jumping through hoops for simple stuff long term is not
