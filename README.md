# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript to showcase your professional profile, experience, and projects.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Sections**: Home, About, Experience, Projects, and Contact
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: Scroll-triggered animations and transitions

## File Structure

```
SimplePersonalWebsite/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

- **Name**: Replace "Ariella Chorn" with your name
- **Title/Tagline**: Update the hero subtitle
- **About Section**: Modify the description to reflect your background
- **Contact Information**: Update email, LinkedIn, and GitHub links

### 2. Experience Section

Update the timeline items in the experience section:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="company">Company Name</p>
        <p class="date">Year - Year</p>
        <p>Description of your role and achievements.</p>
    </div>
</div>
```

### 3. Projects Section

Replace the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i> <!-- Change icon as needed -->
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="your-live-link" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### 4. Skills Section

Update the skill tags in the about section to match your skillset:

```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
    <!-- Add more skills -->
</div>
```

### 5. Profile Picture

Replace the placeholder icon with your actual profile picture:

1. Add your image to the project folder
2. Replace the profile placeholder div with:
```html
<div class="hero-image">
    <img src="your-image.jpg" alt="Your Name" class="profile-image">
</div>
```
3. Add CSS for the profile image in `styles.css`:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
}
```

### 6. Color Scheme

To change the color scheme, update these CSS variables in `styles.css`:

- Primary color: `#6366f1` (indigo)
- Secondary color: `#fbbf24` (yellow)
- Background gradients: Update the linear-gradient values

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You can add a custom domain later

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minify CSS/JS**: Use minified versions for production
3. **Use CDN**: The website already uses CDN for fonts and icons
4. **Lazy Loading**: Consider adding lazy loading for images if you add many

## Customization Examples

### Adding a Blog Section

Add this HTML after the projects section:

```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <h3>Blog Post Title</h3>
                <p class="blog-date">January 1, 2024</p>
                <p>Blog post excerpt...</p>
                <a href="#" class="read-more">Read More</a>
            </article>
        </div>
    </div>
</section>
```

### Adding a Resume Download

Add this button to the hero section:

```html
<a href="path-to-your-resume.pdf" class="btn btn-secondary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

## Support

If you need help customizing your website or encounter any issues, feel free to:

1. Check the browser console for JavaScript errors
2. Validate your HTML using the W3C validator
3. Test responsiveness using browser developer tools

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀** 