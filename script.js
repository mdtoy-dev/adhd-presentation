// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-menu a');

function highlightNavigation() {
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// Add scroll-up button
const scrollUpButton = document.createElement('button');
scrollUpButton.innerHTML = '↑';
scrollUpButton.className = 'scroll-up-button';
scrollUpButton.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollUpButton);

// Add styles for scroll-up button
const style = document.createElement('style');
style.textContent = `
    .scroll-up-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 999;
    }
    
    .scroll-up-button.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-up-button:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    .nav-menu a.active {
        color: #2563eb;
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: #2563eb;
    }
    
    @media (max-width: 768px) {
        .scroll-up-button {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1.25rem;
        }
        
        .nav-menu a.active::after {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Show/hide scroll-up button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollUpButton.classList.add('visible');
    } else {
        scrollUpButton.classList.remove('visible');
    }
});

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .info-card, .appraisal-box');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Add copy functionality to tables
const tables = document.querySelectorAll('table');
tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    
    const copyButton = document.createElement('button');
    copyButton.innerHTML = '📋 Copy';
    copyButton.className = 'copy-table-button';
    copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 0.5rem 1rem;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.3s ease;
        z-index: 10;
    `;
    
    copyButton.addEventListener('mouseenter', () => {
        copyButton.style.background = '#1e40af';
        copyButton.style.transform = 'scale(1.05)';
    });
    
    copyButton.addEventListener('mouseleave', () => {
        copyButton.style.background = '#2563eb';
        copyButton.style.transform = 'scale(1)';
    });
    
    copyButton.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(table);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        
        try {
            document.execCommand('copy');
            copyButton.innerHTML = '✓ Copied!';
            copyButton.style.background = '#059669';
            setTimeout(() => {
                copyButton.innerHTML = '📋 Copy';
                copyButton.style.background = '#2563eb';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy table:', err);
        }
        
        window.getSelection().removeAllRanges();
    });
    
    wrapper.appendChild(copyButton);
});

// Add print functionality
const addPrintButton = () => {
    const hero = document.querySelector('.hero .container');
    if (hero) {
        const printButton = document.createElement('button');
        printButton.innerHTML = '🖨️ Print / Save as PDF';
        printButton.style.cssText = `
            margin-top: 1.5rem;
            padding: 0.75rem 1.5rem;
            background: white;
            color: #2563eb;
            border: 2px solid white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        `;
        
        printButton.addEventListener('mouseenter', () => {
            printButton.style.background = 'transparent';
            printButton.style.color = 'white';
        });
        
        printButton.addEventListener('mouseleave', () => {
            printButton.style.background = 'white';
            printButton.style.color = '#2563eb';
        });
        
        printButton.addEventListener('click', () => {
            window.print();
        });
        
        hero.appendChild(printButton);
    }
};

document.addEventListener('DOMContentLoaded', addPrintButton);

// Add tooltips for abbreviations
const abbreviations = {
    'IRR': 'Incidence Rate Ratio',
    'CI': 'Confidence Interval',
    'RCT': 'Randomized Controlled Trial',
    'ADHD': 'Attention Deficit/Hyperactivity Disorder',
    'BMJ': 'British Medical Journal',
    'PY': 'Person Years',
    'NICE': 'National Institute for Health and Care Excellence',
    'WHO': 'World Health Organization'
};

// Find and add tooltips to abbreviations
document.addEventListener('DOMContentLoaded', () => {
    const bodyText = document.body.innerHTML;
    let newBodyText = bodyText;
    
    Object.keys(abbreviations).forEach(abbr => {
        // Only add tooltip if it's in uppercase and standalone
        const regex = new RegExp(`\\b${abbr}\\b(?![^<]*>)`, 'g');
        newBodyText = newBodyText.replace(regex, `<abbr title="${abbreviations[abbr]}">${abbr}</abbr>`);
    });
    
    // Add styles for abbreviations
    const abbrStyle = document.createElement('style');
    abbrStyle.textContent = `
        abbr {
            text-decoration: underline dotted;
            cursor: help;
        }
    `;
    document.head.appendChild(abbrStyle);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Alt + Arrow keys to navigate between sections
    if (e.altKey) {
        const currentSection = Array.from(sections).findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });
        
        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
            e.preventDefault();
            sections[currentSection + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            e.preventDefault();
            sections[currentSection - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Log page load for analytics (placeholder)
console.log('ADHD Study Critical Appraisal Website Loaded');
console.log('Study: Zhang et al., BMJ 2025');
console.log('Navigate using the menu or Alt + Arrow keys');
