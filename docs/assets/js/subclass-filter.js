document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('subclass-select');
    
    if (select) {
        select.addEventListener('change', function() {
            const selectedValue = this.value;
            const subclassContents = document.querySelectorAll('.subclass-content');
            
            subclassContents.forEach(function(content) {
                if (selectedValue === 'all') {
                    content.style.display = 'block';
                } else if (content.dataset.subclass === selectedValue) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    }
});