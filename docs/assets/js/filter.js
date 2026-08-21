document.addEventListener('DOMContentLoaded', function() {

    function setupFilter(selectId, contentClass, dataAttribute) {
        const select = document.getElementById(selectId);
        if (!select) return;

        select.addEventListener('change', function() {
            const selectedValue = this.value;
            const contents = document.querySelectorAll(`.${contentClass}`);

            contents.forEach(content => {
                if (selectedValue === 'all' || content.dataset[dataAttribute] === selectedValue) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    }

    // Initialize filters
    //// Beware that content.dataset in dataAttribute uses camelCase

    //// Generic filters
    setupFilter('alt-subclass-select', 'subclass-content', 'subclass');
    setupFilter('subclass-select', 'subclass-content', 'subclass');
    setupFilter('level-select', 'level-content', 'level');
    setupFilter('type-select', 'type-content', 'type');

    //// Base classes filters
    setupFilter('metamagic-select', 'metamagic-content', 'metamagicCost')

    //// Kibbles Psion filters
    setupFilter('discipline-select', 'discipline-content', 'discipline');
    setupFilter('talent-select', 'talent-content', 'talent');
    setupFilter('upgrade-select', 'upgrade-content', 'upgrade')

    //// 2CGaming Elementalist filters
    setupFilter('shape-select', 'shape-content', 'shape');
    setupFilter('hybrid-select', 'hybrid-content', 'hybrid');

    //// Kibbles Occultist & Laserllama Bloodhunter filters
    setupFilter('rite-select', 'rite-content', 'rite');
});
