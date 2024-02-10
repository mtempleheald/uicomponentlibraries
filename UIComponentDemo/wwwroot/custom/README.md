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
