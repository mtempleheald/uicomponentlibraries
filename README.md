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
- Avoid unnecessary complexity - this is more for the final application than the investigation, but is a key consideration
- Avoid build steps if possible

## Candidates

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/webcomponents) - Webcomponent library designed and maintained by Microsoft, for consistent feel across their sites and applications
- [Material Web components](https://github.com/material-components/material-web) - Webcomponent library following Google's Material design philosophy for consistent look and feel across native Android and web
- [Shoelace](https://github.com/shoelace-style/shoelace) - webcomponent library independent from corporate design, linked to fontawesome, built on top of Lit
- Fluent Blazor - Blazor components built on top of FluentUI's webcomponents, using web assembly to perform logic written in C# in the browser
- [Carbon components Svelte](https://github.com/carbon-design-system/carbon-components-svelte), compiled as web components/ custom elements - Svelte is pleasant to work with, this proves whether we can use Svelte component libraries too.
- [Carbon Web Components](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/carbon-web-components) - as above without the Svelte build step [Demo](https://web-components.carbondesignsystem.com/?path=/story/introduction-welcome--page)
- Custom elements built using [Lit](https://github.com/lit/lit), used by Shoelace and Carbon
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

# Conclusion

I haven't really come to a conclusion, I think it was a worthwhile exercise but my thoughts haven't really changed.  
I believe the web has been getting steadily worse for years, I blame this on overcomplexity, marketing and a JS-everything mindset.  
Ultimately, whilst I can do frontend development, I just don't care what it looks like as long as it works, so I'm probably not best placed to judge.  
I am inclined to stick with standard HTML elements with small JS snippets and reach out to shoelace if I need styling that isn't supported by native HTML elements (looking at Select lists here).  Regardless, the project I was working on that prompted this deviation has stalled, so I need to park this nonsense and go back to that.

## Justification

I am wary of committing to a company's own design system, since they obviously have their own motivations and this may or may not conflict with our design goals, the last thing I want is to be fighting their design constraints.  
I also feel that it is all-or-nothing with these approaches, at least if you want consistency (which I do!).  

I do like the greyscale starting point for Carbon, but at a glance use of custom themes seems to require [jumping through some hoops](https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71), and I'd rather avoid a dependency on SCSS.  
I like FluentUI's [approach to mitigate cascading style issues](https://learn.microsoft.com/en-us/shows/fluent-ui-insights/fluent-ui-insights-styling) (shocking how many developers don't understand the C in CSS), however if theming is so complex that it requires a [theming designer tool](https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html), is this the right choice?  In their defence, that page is very helpful for understanding the styling properties which are available.

I like working with Svelte and scoped styles, and I was able to publish a custom element written in svelte to be used outside svelte.  
However, it would need to be all or nothing and I'd rather not have the extra dependencies, build step or impact on DX.

I'm not sure I see the point of Lit, but perhaps I've just not written enough custom elements from scratch to appreciate it, since Shoelace and Carbon both depend on it.

