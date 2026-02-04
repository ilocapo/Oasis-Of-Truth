// Update profile icon in header based on localStorage.profileGender
(function(){
  // Use the Uicons "fi-rr-" (regular rounded) classes which are available in the vendor CSS
  const MAP = {
    // English
    man: '<i class="fi-rr-man-head"></i>',
    male: '<i class="fi-rr-man-head"></i>',
    woman: '<i class="fi-rr-woman-head"></i>',
    female: '<i class="fi-rr-woman-head"></i>',
    nonbinary: '<i class="fi-rr-venus-mars"></i>',
    other: '<i class="fi-rr-venus-mars"></i>',
    // French variants
    homme: '<i class="fi-rr-man-head"></i>',
    femme: '<i class="fi-rr-woman-head"></i>',
    'non-binaire': '<i class="fi-rr-venus-mars"></i>',
    'nonbinaire': '<i class="fi-rr-venus-mars"></i>',
    'non binaire': '<i class="fi-rr-venus-mars"></i>',
    autre: '<i class="fi-rr-venus-mars"></i>'
  };

  function setIcon(el, html, label){
    if(!el) return;
    el.innerHTML = html || 'U';
    if(label) el.setAttribute('aria-label', label);
  }

  function applyProfileIcon(){
    const raw = (localStorage.getItem('profileGender') || '').toLowerCase().trim();
    const key = raw || 'nonbinary';
    const iconHtml = MAP[key] || MAP['nonbinary'];
    const label = key === 'man' || key === 'male' ? 'Profil homme' : (key === 'woman' || key === 'female' ? 'Profil femme' : 'Profil non-binaire');

    // prefer element with id profileIcon
    const byId = document.getElementById('profileIcon');
    if(byId) { setIcon(byId, iconHtml, label); return; }

    // fallback: any .profile-icon
    const byClass = document.querySelector('.profile-icon');
    if(byClass) setIcon(byClass, iconHtml, label);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyProfileIcon); else applyProfileIcon();
})();
