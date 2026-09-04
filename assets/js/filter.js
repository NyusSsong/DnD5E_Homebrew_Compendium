// Delegated filter wiring: every <select class="filter-select"> that carries
// data-filter-content + data-filter-attr self-registers on change — no per-filter
// code is ever needed here.
//
// The data-filter-attr value must be the camelCase form of the content's data-*
// attribute (e.g. "metamagicCost" for data-metamagic-cost; single words match
// as-is, e.g. "subclass" for data-subclass).
document.addEventListener('change', function (e) {
    const select = e.target.closest('select.filter-select[data-filter-content]');
    if (!select) return;

    const contents = document.querySelectorAll('.' + select.dataset.filterContent);
    contents.forEach(content => {
        if (select.value === 'all' || content.dataset[select.dataset.filterAttr] === select.value) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});