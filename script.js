// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-list a');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for sticky navigation
                const navHeight = document.querySelector('.navigation').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                // Smooth scroll to target section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation state
                updateActiveNavLink(this);
            }
        });
    });
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navHeight = document.querySelector('.navigation').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const correspondingLink = document.querySelector(`.nav-list a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    updateActiveNavLink(correspondingLink);
                }
            }
        });
    });
    
    // Function to update active navigation link
    function updateActiveNavLink(activeLink) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current link
        activeLink.classList.add('active');
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.method-card, .bias-card, .implication-card, .limitation-card, .finding');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Add animation to findings on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add click-to-copy functionality for important numbers
    const importantNumbers = document.querySelectorAll('.finding p, .score-item .label');
    
    importantNumbers.forEach(element => {
        element.style.cursor = 'pointer';
        element.title = 'Click to copy';
        
        element.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show temporary feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#059669';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 1000);
            });
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            const key = e.key;
            let targetSection = null;
            
            switch(key) {
                case '1':
                    targetSection = document.querySelector('#overview');
                    break;
                case '2':
                    targetSection = document.querySelector('#methodology');
                    break;
                case '3':
                    targetSection = document.querySelector('#results');
                    break;
                case '4':
                    targetSection = document.querySelector('#bias-assessment');
                    break;
                case '5':
                    targetSection = document.querySelector('#clinical-implications');
                    break;
                case '6':
                    targetSection = document.querySelector('#limitations');
                    break;
                case '7':
                    targetSection = document.querySelector('#conclusion');
                    break;
            }
            
            if (targetSection) {
                e.preventDefault();
                const navHeight = document.querySelector('.navigation').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Appraisal';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3b82f6;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        font-weight: 500;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
    });
    
    document.body.appendChild(printButton);
    
    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search appraisal...';
    searchInput.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 8px 12px;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        width: 200px;
        z-index: 1000;
        font-size: 14px;
        transition: all 0.3s ease;
    `;
    
    searchInput.addEventListener('focus', function() {
        this.style.width = '250px';
        this.style.borderColor = '#3b82f6';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.width = '200px';
        this.style.borderColor = '#e2e8f0';
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchTerm) || searchTerm === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
    
    document.body.appendChild(searchInput);
    
    // Add accessibility improvements
    const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-list a.active {
        background-color: #3b82f6;
        color: white;
    }
    
    .nav-list a.active::after {
        width: 0;
    }
    
    @media (max-width: 768px) {
        .nav-list a.active {
            background-color: #e2e8f0;
            color: #1e3a8a;
        }
    }
`;
document.head.appendChild(style);