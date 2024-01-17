<svelte:options customElement='mth-option-buttons'/>
<!--<svelte:options customElement={{
    tag: 'mth-option-buttons',
    // shadow: 'none' // https://svelte.dev/docs/custom-elements-api
}} /> -->
<script>
    import "carbon-components-svelte/css/all.css"; // select option here
    import { Button } from "carbon-components-svelte";
</script>
  
<Button>A</Button>
<Button>B</Button>
<Button>C</Button>

<!--
    Currently only packages for use in Svelte apps, I want this to work in .NET HTMX with no knowledge of UI frameworks

    Official docs
        https://svelte.dev/docs/custom-elements-api
    Tracking issue
        https://github.com/sveltejs/kit/issues/2572
    Out of date solutions
        https://dev.to/this-is-angular/rendering-svelte-components-as-web-components-in-angular-a-step-by-step-guide-409a
        https://blog.logrocket.com/build-web-components-svelte/
        https://www.thisdot.co/blog/web-components-with-svelte
-->