document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    let originalContent = new Map(); // Store original content for reset

    // Toggle search bar
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        searchBtn.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            resetSearch();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target) && !searchBtn.contains(e.target)) {
            searchContainer.classList.remove('active');
            searchBtn.classList.remove('active');
            resetSearch();
        }
    });

    // Handle search input
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchQuery = searchInput.value.toLowerCase().trim();
            if (searchQuery) {
                performSearch(searchQuery);
            } else {
                resetSearch();
            }
        }, 300);
    });

    // Handle search on enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchQuery = searchInput.value.toLowerCase().trim();
            if (searchQuery) {
                performSearch(searchQuery);
            }
        }
    });

    function performSearch(query) {
        // Get the current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Define searchable content based on the current page
        let searchableContent = [];
        let container = null;
        
        switch(currentPage) {
            case 'teams.html':
                // Teams page has team cards in the teams-grid
                searchableContent = document.querySelectorAll('.teams-grid .team-card');
                container = document.querySelector('.teams-grid');
                break;
            case 'fixtures.html':
                // Fixtures page has fixture cards in the fixtures-container
                searchableContent = document.querySelectorAll('#fixtures-container .fixture-card');
                container = document.querySelector('#fixtures-container');
                break;
            case 'results.html':
                // Results page has result cards in the fixtures-container
                searchableContent = document.querySelectorAll('#fixtures-container .result-card');
                container = document.querySelector('#fixtures-container');
                break;
            case 'tables.html':
                // Tables page has table rows in the table-body
                searchableContent = document.querySelectorAll('.table-body .table-row');
                container = document.querySelector('.table-body');
                break;
            case 'stats.html':
                // Stats page has stats cards in the stats-table-container
                searchableContent = document.querySelectorAll('.stats-table-container .stats-row, .stats-table-container tr');
                container = document.querySelector('.stats-container');
                break;
            case 'knockout.html':
                // Knockout page has match cards in the tournament-bracket
                searchableContent = document.querySelectorAll('.tournament-bracket .match');
                container = document.querySelector('.tournament-bracket');
                break;
            case 'awards.html':
                // Awards page has award cards in the award-grid
                searchableContent = document.querySelectorAll('.award-grid .award-card');
                container = document.querySelector('.awards-container');
                break;
            default: // index.html
                // Home page has featured cards and news cards
                searchableContent = document.querySelectorAll('.featured-grid .featured-card, .news-card');
                container = document.querySelector('.featured-grid');
        }

        // If no container found, try to find a more generic container
        if (!container) {
            container = document.querySelector('main');
        }

        if (!container) return;

        // Store original content if not already stored
        if (originalContent.size === 0) {
            searchableContent.forEach(item => {
                originalContent.set(item, item.innerHTML);
            });
        }

        // Search through content
        let found = false;
        searchableContent.forEach(item => {
            const text = item.textContent.toLowerCase();
            const matches = text.includes(query);
            
            if (matches) {
                item.style.display = '';
                found = true;
                // Highlight the matching text
                highlightText(item, query);
            } else {
                item.style.display = 'none';
            }
        });

        // Show no results message if nothing found
        const noResults = document.querySelector('.no-results');
        if (!found) {
            if (!noResults) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.textContent = 'No results found';
                container.appendChild(message);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    function highlightText(element, query) {
        const originalHTML = originalContent.get(element);
        if (!originalHTML) return;

        // Create a temporary element to safely manipulate HTML
        const temp = document.createElement('div');
        temp.innerHTML = originalHTML;

        // Function to highlight text in a node
        function highlightNode(node) {
            if (node.nodeType === 3) { // Text node
                const text = node.textContent.toLowerCase();
                const index = text.indexOf(query.toLowerCase());
                if (index >= 0) {
                    const span = document.createElement('span');
                    span.innerHTML = node.textContent.substring(0, index) +
                        '<mark>' + node.textContent.substring(index, index + query.length) + '</mark>' +
                        node.textContent.substring(index + query.length);
                    node.parentNode.replaceChild(span, node);
                }
            } else if (node.nodeType === 1) { // Element node
                // Skip highlighting inside script and style tags
                if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
                    Array.from(node.childNodes).forEach(highlightNode);
                }
            }
        }

        highlightNode(temp);
        element.innerHTML = temp.innerHTML;
    }

    function resetSearch() {
        searchInput.value = '';
        
        // Restore original content
        originalContent.forEach((originalHTML, element) => {
            element.innerHTML = originalHTML;
            element.style.display = '';
        });

        // Remove no results message
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.remove();
        }

        // Clear stored original content
        originalContent.clear();
    }
}); 