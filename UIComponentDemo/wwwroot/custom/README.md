# Components

I think it is helpful to think of components as functions - they accept inputs and produce an output.  
Simple elements should produce primitive output, typically string, number, datetime, boolean, or an array of primitive output.  
This thought process lets you easily visualise how these compose to build up state and ultimately integrate user interactions with something important.  
Start with the most basics of elements which will be reused everywhere and build out.  

Sadly, some people only notice cosmetics, no matter how beautiful the logic.  
Component definition needs to include presentation and, crucially, the notion of a theme.  
Modern CSS variables are ideal for this purpose, but the component-scoped styles of web components needs to be theme-aware.  
The balance here is to use the minimum number of variables we can get away with, at the detriment to flexibility (this is a good thing, software architecture is all about picking the appropriate constraints).

This work has been done in very general cases by much more motivated and probably cleverer developers in big tech firms, but I want a simple solution I can offload to non-technical content editors via a CMS, so every CSS variable and every input parameter needs to be simple and clear, the below is illustrative, names/values will change.  

- Label - extends HTMLLabelElement
    - used in many higher-level components, defined here for guaranteed consistency
    - theme variables
        - font colour
        - font colour :invalid
        - background colour
        - background color :invalid
        - padding horizontal
        - padding vertical
- Display block - extends HTMLParagraphElement
    - used to display markdown content in a consistent fashion
    - inputs
        - content (markdown)
    - theme variables
        - font colour
        - background colour
        - padding horizontal
        - padding vertical
        - border
- Help/Info tooltip - extends HTMLDetailsElement
    - inputs
        - message (markdown)
        - label (plain text/ icon)
    - theme variables
        - ...
- Popover - extends HTMLDialogElement
    - inputs
        - message (markdown)
        - open label (plain text/ icon)
        - close label (plain text/ icon)
    - theme variables
        - ...
- Anchor - extends HTMLAnchorElement
    - For consistent behaviour when content editors define the website content, need to theme anchors for target _blank vs no _blank etc
    - ...
- Input - extends HTMLInputElement
    - inputs
        - label
        - help label
        - help message
        - error message default
    - outputs
        - value
    - theme variables
        - label position - before | after | above | below
        - help position - before label | after label | before input | after input | ...
        - font colour
        - font colour :invalid
        - background colour
        - background colour :invalid
        - padding horizontal
        - padding vertical
        - border width
        - border radius

# Conclusion

Further reading on the topic raises some questions about whether this is the right approach...  

I approach this investigation from the perspective of guarantees.  
I want to enforce that css variables are the only way to style these very restricted components, using a closed shadow root.  
However, I think this stems from the professional working conditions I've been stuck with for a while.  
If I was able to pick developers, do away with the abuse of "Agile" (Scrum) which confuses velocity with speed and focus on quality for longterm delivery, this may not be a real issue.  
I also want to ensure that component functionality lives in/with the component and is never exposed, but this is easily achieved in other ways.  
Really, what I'm after is the ability to create a reusable template, plus the ability to restrict styling to some css variables declared in a theme.  

Specific discoveries that raise red flags:
- Custom elements are verbose to write, that's obvious from even the small amount of code I've written here.  
  I use Svelte components as a benchmark for comparison, I'm willing to take a small tradeoff on verbosity vs reusability and to avoid a build step, but this is limited.
- I was instinctively aiming to build "higher level" web components - combine label + input + help + contextual text to make one interactive form component that is trivial to reuse.  
  It does not seem that this is their intended use, given that you can extend HTMLInputElement and HTMLLabelElement, but not at the same time.  
  This raises red flags in that I therefore probably have to handle my own accessibility implementation, which was one of the big wins I saw from this approach.  
  Another perspective on this is that [web components can help with accessibility](https://medium.com/dev-channel/the-future-of-accessibility-for-custom-elements-291cfb3ffabe), but this depends on somebody writing just the component I want and making sure it is accessible so that I don't have to. 
- According to one [web component summary](https://kinsta.com/blog/web-components/#getting-started-with-web-components), extending specific elements is also Firefox-specific, so this reinforces my previous point, I don't want to reinvent the wheel.  
- General advice seems to be not to create custom elements unless you need them.  
- Web components all feels very JS-first, I still see the web as HTML-first, JS was added just for scripts to improve UI/UX.  
  Rich Harris seems to agree, which is probably why I like Svelte compared to other frontend frameworks.

I may well end up using custom elements, but I don't think I'll be using them for every component, which was the original idea.  
Until I went through this exercise, I didn't really appreciate the FluentUI, Carbon or Shoelace approaches.