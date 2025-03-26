# G3 Storage Website

A clean, modern, mobile-first website for G3 Storage in New Bern, NC.

## Website Features

- Responsive design that works on mobile phones, tablets, and desktops
- Fast loading and performance optimized
- Mobile-friendly navigation
- Contact form for quote requests
- Modern, professional appearance

## Getting Started

This is a simple static website that only uses HTML, CSS, and JavaScript. No frameworks or packages are required.

### How to Use This Website

1. **To view the website locally**: Simply open the `index.html` file in any web browser.

2. **To deploy the website to a server**:
   - Upload all files and folders to your web hosting server
   - Make sure to maintain the same folder structure

### Images

Before deploying, you'll need to:

1. Replace the placeholder `images/hero-bg.jpg` with a real image (recommended size: 1920x1080px)
2. You can also add your logo in the header by editing the HTML to include an image tag

### Customizing the Website

#### To change content:
- Edit the `index.html` file using any text editor
- Look for the text between tags like `<p>` and `</p>` and update as needed

#### To change colors:
- Open `css/styles.css`
- Look for the `:root` section at the top
- Modify the color values (e.g., `--primary-color: #3fb4fa;`)

#### To change contact information:
- Edit the contact details in the footer section of `index.html`

## Form Handling

The contact form currently doesn't actually send emails. To make it functional, you'll need to:

1. Set up a form submission service (like Formspree, Netlify Forms, or your own server)
2. Update the form action in `index.html` and possibly the JavaScript in `js/script.js`

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome) 