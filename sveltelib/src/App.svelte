<!-- Use this file with `npm run dev` to test components out in isolation, not included in `npm run build` output -->

<script>
    import Counter from './lib/Counter.svelte'
    import OptionButtons from './lib/OptionButtons.svelte';
  </script>
  
  <main>
    <h1>Custom component library, published as custom elements</h1>
    
    <Counter />
    <br/>
    <OptionButtons></OptionButtons>
  
  </main>
  
  <style>
  </style>