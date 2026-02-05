// uicons-aliases.js
// Replace unsupported/custom fi- prefixes with available families so markup can use requested classes.
document.addEventListener('DOMContentLoaded', function(){
  const mappings = [
    {from: 'fi-sc-', to: 'fi-ss-'}, // sc -> solid straight
    {from: 'fi-dr-', to: 'fi-rr-'}, // dr -> regular rounded
    {from: 'fi-ds-', to: 'fi-rs-'}  // ds -> regular straight
  ];

  const els = Array.from(document.querySelectorAll('[class*="fi-"]'));
  els.forEach(el => {
    const parts = el.className.split(/\s+/).filter(Boolean);
    const newParts = parts.map(c => {
      for(const m of mappings){
        if(c.startsWith(m.from)) return m.to + c.slice(m.from.length);
      }
      return c;
    });
    const newClassName = newParts.join(' ');
    if(newClassName !== el.className){
      el.className = newClassName;
    }
  });
});
