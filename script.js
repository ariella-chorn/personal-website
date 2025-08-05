// Live time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Theme management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function getStoredTheme() {
    return localStorage.getItem('theme') || 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Section navigation management
function showSection(sectionId) {
    // Hide all content sections
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.style.display = 'none';
        section.classList.add('hidden');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.remove('hidden');
        }, 10);
    }
    
    // Update navigation active states
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeNavLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', function() {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    
    // Initialize section navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Show home section by default
    showSection('home');
});

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', function() {
    toggleTheme();
});

// Smooth scrolling for anchor links (for any remaining anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (!anchor.classList.contains('nav-link')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Add subtle hover effects for links
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Project link functionality
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        const projectDetails = document.getElementById(projectId);
        
        if (projectDetails) {
            const isVisible = projectDetails.style.display !== 'none';
            
            // Hide all project details first
            document.querySelectorAll('.project-details').forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Special handling for outbound lead generation engine
            if (projectId === 'lead-gen') {
                const otherProjects = document.querySelectorAll('.project-item:not(:has(#lead-gen))');
                
                if (!isVisible) {
                    // Show the clicked project details and hide other projects
                    projectDetails.style.display = 'block';
                    otherProjects.forEach(project => {
                        project.style.display = 'none';
                    });
                } else {
                    // Hide the clicked project details and show other projects
                    otherProjects.forEach(project => {
                        project.style.display = 'block';
                    });
                }
            } else {
                // For other projects, just show the clicked project details if it wasn't visible
                if (!isVisible) {
                    projectDetails.style.display = 'block';
                }
            }
        }
    });
});

// Blog link functionality
document.querySelectorAll('.blog-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const blogId = this.getAttribute('data-blog');
        const blogDetails = document.getElementById(blogId);
        
        if (blogDetails) {
            const isVisible = blogDetails.style.display !== 'none';
            
            // Hide all blog details first
            document.querySelectorAll('.blog-details').forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Get all blog items (the clickable links)
            const allBlogItems = document.querySelectorAll('.blog-item');
            
            if (!isVisible) {
                // Show the clicked blog details
                blogDetails.style.display = 'block';
                
                // Hide all other blog items
                allBlogItems.forEach(item => {
                    if (!item.contains(this)) {
                        item.style.display = 'none';
                    }
                });
                
                // Add back to top link after the blog details
                const backToTopLink = document.createElement('div');
                backToTopLink.className = 'back-to-top';
                backToTopLink.innerHTML = '<a href="#" class="link">↑ back to top</a>';
                backToTopLink.style.marginTop = '30px';
                backToTopLink.style.textAlign = 'center';
                
                // Remove any existing back to top link
                const existingBackToTop = document.querySelector('.back-to-top');
                if (existingBackToTop) {
                    existingBackToTop.remove();
                }
                
                // Add the new back to top link
                blogDetails.appendChild(backToTopLink);
                
                // Add click handler for back to top
                backToTopLink.querySelector('a').addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Hide the blog details
                    blogDetails.style.display = 'none';
                    
                    // Show all blog items again
                    allBlogItems.forEach(item => {
                        item.style.display = 'block';
                    });
                    
                    // Remove the back to top link
                    backToTopLink.remove();
                    
                    // Scroll to top of blog section
                    const blogSection = document.getElementById('blog');
                    if (blogSection) {
                        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
                
            } else {
                // If the blog was already visible, hide it and show all blog items
                blogDetails.style.display = 'none';
                allBlogItems.forEach(item => {
                    item.style.display = 'block';
                });
                
                // Remove the back to top link
                const existingBackToTop = document.querySelector('.back-to-top');
                if (existingBackToTop) {
                    existingBackToTop.remove();
                }
            }
        }
    });
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add page load animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Simple typing effect for the cursor
function typeCursor() {
    const cursor = document.querySelector('.intro p:last-child');
    if (cursor) {
        // The cursor animation is handled by CSS
        // This is just a placeholder for any additional typing effects
    }
}

// Initialize any additional effects
document.addEventListener('DOMContentLoaded', function() {
    typeCursor();
}); 